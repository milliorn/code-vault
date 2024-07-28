package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
	"runtime"
	"strings"

	"github.com/shirou/gopsutil/disk"
	"github.com/shirou/gopsutil/process"
	"github.com/urfave/cli/v2"
)

type Volume struct {
	Name       string  `json:"name"`
	Total      uint64  `json:"total"`
	Used       uint64  `json:"used"`
	Available  uint64  `json:"available"`
	UsePercent float64 `json:"use_percent"`
	Mount      string  `json:"mount"`
}

func main() {
	app := cli.NewApp()
	app.Name = "Process Terminator"
	app.Usage = "Terminate processes by ID or name"

	app.Commands = []*cli.Command{
		{
			Name:        "kill",
			Usage:       "Terminate processes",
			Description: "Kill processes based on process ID or name",
			Action:      killAction,
			Flags: []cli.Flag{
				&cli.UintFlag{
					Name:  "id",
					Usage: "Specify the process ID to kill",
				},
				&cli.StringFlag{
					Name:  "name",
					Usage: "Specify the process name to kill",
				},
			},
		},
		{
			Name:        "volumes",
			HelpName:    "volumes",
			Action:      actionVolumes,
			ArgsUsage:   ``,
			Usage:       `lists mounted file system volumes`,
			Description: `List the mounted volumes`,
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatalf("Error: %v", err)
	}
}

func killAction(c *cli.Context) error {
	if len(c.Args().Slice()) > 0 {
		return errors.New("no arguments expected, use flags")
	}

	if !c.IsSet("id") && c.String("name") == "" {
		return errors.New("name flag cannot be empty")
	}

	if c.IsSet("id") && c.IsSet("name") {
		return errors.New("either ID or name flag must be provided")
	}

	return killProcess(c)
}

func killProcess(c *cli.Context) error {
	if c.IsSet("id") {
		pid := int32(c.Uint("id"))
		return terminateProcessByID(pid)
	}

	processes, err := process.Processes()
	if err != nil {
		return err
	}

	target := c.String("name")
	found := false
	var errs []string

	for _, p := range processes {
		name, err := p.Name()
		if err != nil {
			return err
		}

		if isEqualProcessName(name, target) {
			found = true
			if err := p.Kill(); err != nil {
				errs = append(errs, err.Error())
			}
		}
	}

	if !found {
		return errors.New("process not found")
	}

	if len(errs) > 0 {
		return errors.New(strings.Join(errs, "\n"))
	}

	return nil
}

func terminateProcessByID(pid int32) error {
	proc, err := process.NewProcess(pid)
	if err != nil {
		return err
	}

	return proc.Kill()
}

func isEqualProcessName(proc1, proc2 string) bool {
	if runtime.GOOS == "linux" {
		return proc1 == proc2
	}
	return strings.EqualFold(proc1, proc2)
}

func actionVolumes(c *cli.Context) error {
	stats, err := disk.Partitions(true)
	if err != nil {
		return err
	}

	var vols []*Volume

	for _, stat := range stats {
		usage, err := disk.Usage(stat.Mountpoint)
		if err != nil {
			continue
		}

		vol := &Volume{
			Name:       stat.Device,
			Total:      usage.Total,
			Used:       usage.Used,
			Available:  usage.Free,
			UsePercent: usage.UsedPercent,
			Mount:      stat.Mountpoint,
		}

		vols = append(vols, vol)
	}

	volsByteArr, err := json.MarshalIndent(vols, "", "\t")
	if err != nil {
		return err
	}

	fmt.Println(string(volsByteArr))
	return nil
}
