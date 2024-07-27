# Linux for Ethical Hacking – Penetration Testing for Beginners

## Here are the sections covered in this course

Useful keyboard Shortcuts
File Management & Manipulation
File & Directory Permissions
File & Directory Ownership
grep & piping
Finding Files With Locate
Enumerating Distribution & Kernel Information
Shells & Bash Configuration
Disk Usage
File Compression & Archiving With tar
Users And Groups & Permissions With Visudo
Networking (ifconfig, netstat & netdiscover)
TOR & Proxychains
Service And Process Management (HTOP & systemctl)
SSH And SSH Security
Curl Fundamentals
UFW Firewall (Uncomplicated Firewall)
How To Clear Tracks & Logs On Linux
SSH Brute Force Protection With Fail2Ban

## Links

<https://hackersploit.org/>

<https://www.youtube.com/watch?v=1hvVcEhcbLM&t=0s>

```bash
touch <filename>
mkdir <dirName>
echo "string"
echo "Hello World!">> <test.txt>
rm -R <name>
rmdir <emptyDirName>
whatis mv
mv <fileName> <dirName>
ls
ls -l
ls -a
ls <dirName>
ls -al
ls -alh
mv <fileName> <newFilename>
nano <fileName>
vim <fileName>
groups root
groups <username>
grep "string" <filePath>
grep -i "string" <filePath>
locate <string>
locate -all -c <string>
whoami
hostname
groups <username>
lsb_release -a
cat /etc/issue
cat /etc/os-release
lscpu
uname -a
uname -s
uname -r
uname -i
uname -o
find .
find /
find / -type f
find / -type d
find / -type f -name "string.ext"
ls -alps
$SHELL
cat /etc/shells
chsh
fish
du -s
du -sh *
df
df -h
df -h | grep sd
df -ht ext4
tar -cf <tarName> <dirPath>
tar -cvf <tarName> <dirPath>
tar -xvf <fileName>
tar -czf <fileName> <dirPath>
ifconfig
ip
ip route show
ip addr
netstat -r
netstat -t
netstat -lt
netstat -p
top
htop
free
ps
ps aux
ps aux | grep "string"
sudo kill <pid>
curl -help
curl -o <fileToCreateWithPath> <url>
curl -O <url>
curl -I <url>
curl -v <url>
sudo ufw status
sudo ufw status verbose
sudo ufw status numbered
sudo ufw enable
sudo ufw disable
sudo ufw reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow <portNumber>
sudo ufw deny ssh
sudo ufw allow http
sudo ufw allow proto tcp from <ip>
sudo ufw allow proto tcp from any to any port <portNumber>
sudo ufw allow from <ip>
sudo ufw allow from <ip> to any port <portNumber>
sudo ufw allow from <ip>
sudo ufw reset
shred --help
shred -vfzu <filename>
```
