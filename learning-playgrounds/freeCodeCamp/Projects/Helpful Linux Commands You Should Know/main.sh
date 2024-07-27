#!/bin/bash

# Chroot: Run Commands With a Different Root Directory
# chroot [OPTION] NEWROOT [COMMAND [ARG]...]

# Df: Check Disk Space Usage
# df [OPTION]... [FILE]...
df -h

# Check Usage for a Specific Filesystem
df -h /home

# Dmesg: View Kernel Messages
# dmesg [OPTION]...
# dmesg | less

# Free: Check Memory Usage
# free [OPTION]...
free -h

# Htop: Monitor System Resources
# htop [OPTION]...
# htop

# Grep: Search for Patterns in Files
# grep [OPTION]... PATTERN [FILE]...
grep -i "error" /var/log/syslog

# Head/Tail: View the First/Last Part of a File
# head [OPTION]... [FILE]...
# tail [OPTION]... [FILE]...
head -n 5 /var/log/syslog
tail -n 5 /var/log/syslog

# Ps: List Running Processes
# ps [options]
ps aux

# Kill: Stop a Process
# kill [options] <pid> [...]

# Rsync: Sync Files and Folders
# rsync [OPTION]... SRC... [DEST]

# Tar: Store, List or Extract Files
# tar [options] <archive-file> <file or directory to be archived>

# Uptime: Check How Long the System Has Been Running
# uptime [OPTION]
uptime

# W: List Logged in Users
# w [options]
w

# Who: List Logged in Users
# who [options]
who

# Which: Locate a Program
# which [options] <program>
which ls

# Whereis: Locate a Program
# whereis [options] <program>
whereis ls

# Find: Search for Files
# find [path...] [expression]
# find / -name "readme.md"

# Pipe Viewer (pv)
# pv [OPTION] [FILE]
# pv /dev/zero | dd of=/dev/null

# Xargs
# xargs [options] [command [initial-arguments]]
# find / -name "readme.md" | xargs rm -rf

# Sed
# sed [OPTION]... {script-only-if-no-other-script} [input-file]...
sed 's/old/new/g' readme.md

# Awk
# awk [POSIX or GNU style options] -f program-file [--] file ...
awk '{print $1}' readme.md

# Cut
# cut [OPTION]... [FILE]...
cut -d " " -f 1 readme.md

# Sort
# sort [OPTION]... [FILE]...
sort -r readme.md

# Uniq
# uniq [OPTION]... [INPUT [OUTPUT]]
uniq -c readme.md

# Wc
# wc [OPTION]... [FILE]...
wc -l readme.md

# Tr
# tr [OPTION]... SET1 [SET2]
tr 'a-z' 'A-Z' <readme.md

# Curl
# curl [options] [URL...]

# Wget
# wget [option]... [URL]...

# Lsof
# lsof [options] [names]
lsof -i :80

# mtr: Network Diagnostics
# mtr [options] [address]
# mtr google.com

# tac: View Config Files in Reverse
# tac [OPTION]... [FILE]...
tac readme.md
