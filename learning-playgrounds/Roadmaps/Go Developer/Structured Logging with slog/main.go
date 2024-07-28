package main

import (
	"context"
	"log/slog"
	"os"
)

func main() {
	slog.Info("hello, world")
	slog.Info("hello, world", "user", os.Getenv("USER"))

	slog.Warn("hello, world")
	slog.Warn("hello, world", "user", os.Getenv("USER"))

	slog.Error("hello, world")
	slog.Error("hello, world", "user", os.Getenv("USER"))

	slog.Debug("hello, world")
	slog.Debug("hello, world", "user", os.Getenv("USER"))

	logger := slog.Default()
	logger.Info("hello, world", "user", os.Getenv("USER"))

	newlogger := slog.New(slog.NewTextHandler(os.Stdout, nil))
	newlogger.Info("hello, world", "user", os.Getenv("USER"))

	jsonLogger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	jsonLogger.Info("hello, world", "user", os.Getenv("USER"))

	slog.LogAttrs(context.Background(), slog.LevelInfo, "hello, world",
		slog.String("user", os.Getenv("USER")))
}
