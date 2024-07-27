# Setting Up Go Locally

## WHAT IS GO

Go, or Golang, is a programming language developed at Google. It has received a lot of acclaim from developers for its speed and straightforward syntax. It’s used in major applications and its adoption continues to grow as developers try developing in Go.

## INSTALLING GO AND RUNNING GO PROGRAMS

Developing Go locally on your own environment is a big step towards creating your very own Go projects and exercising your imagination!

This guide will assume some knowledge of the command line and use of a code editor (we recommend VSCode), so brush up if you need too!

First, downland Go to your computer by going to Golang’s download page and select your operating system under the Featured downloads section.

The installer will be downloaded as a .zip in which you will open and follow through with the installation wizard instructions. The steps below will branch into the installation steps for Mac and Windows machines, respectively.

## SETTING UP FOR MAC

After you’ve downloaded the installer, you’ll be redirected to Go’s installation page

(Optional) You can check that Go has been installed correctly by navigating to the Go folder using the command:

    \$ cd /usr/local/go/

After cd (changing directory) use the command ls (list stuff), if it’s populated, then you’re on the right track.

    One thing we’ll want to do is install the Go tools to run a program and search documentation. To do this, run the command:
    $  echo "export GOPATH=\$HOME/go" >> ~/.bash_profile && echo "export PATH=\$PATH:\$GOPATH/bin" >> ~/.bash_profile
    The commands above will store in your bash profile (a file that contains various file and system configurations) the location of where your Go programs will be stored and the location of your bin folder (where the compiled binary files are stored).

Navigate to your Go folder using the command:

    cd $HOME/go

Or

    \$ cd ~/go 3) Create a folder called src using the mkdir (make directory) command:

    \$ mkdir src 4) Make a folder called hello:

    mkdir hello 5) Navigate inside the hello folder:

    \$ cd hello 6) Make a file called hello.go using the touch command:

    \$ touch hello.go 7) Open hello.go using your code editor and paste in the code provided in the installation page and save your program.

    package main

    import "fmt"

    func main() {
    fmt.Printf("hello, world\n")
    } 8) Build a binary/executable file using the Go tool by running:

    \$ go build hello.go
    Or simply:

    \$ go build 9) Run the binary file using:

    \$ ./hello

You should see hello, world printed to the terminal. Congrats, you’re good to GO!

## SETTING UP FOR WINDOWS

After you’ve downloaded the installer, you’ll be redirected to Go’s installation page. The instructions below pair very closely to the steps provided on that page.

    1. Open up your File Explorer and navigate to your home directory. E.g. C:\Users\Your_Name. Inside this directory, you can create a folder named go.

    2. Inside the go folder, create another directory src: This is where all of our Go code that we write will live.

    3. Enter your src folder and create a folder called hello, you’ll create a simple program to test that Go has been properly installed.

    4. Use your text editor (we recommend VSCode if you have that installed) to open the newly created hello folder. Use your text editor to create a new file named main.go in the hello folder.

    5. Inside of main.go, copy the code provided on the installation page and save your main.go file:

    package main

    import "fmt"

    func main() {
        fmt.Printf("hello, world\n")
    }

    6) Open your command prompt and navigate to the hello folder using the following command:

    cd go/src/hello

    The cd command stands for change directory, so the command above will navigate to the directory as specified.

    7. Build a binary/executable file using the Go tool by running:

    go build 8) To check if the executable file was created, you can run the command:

    dir

    This command will list out the files inside the current directory (the hello\* folder). You should see \*\*hello.exe as one of the files listed.

    9. Run the binary file using:

    hello

You should see hello, world printed to the terminal. Congrats, you’re good to GO!
