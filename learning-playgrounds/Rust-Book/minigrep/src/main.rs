use std::{env, process};

use minigrep::Config;

fn main() {
    let args: Vec<String> = env::args().collect(); // get the command line arguments

    let config = Config::build(&args).unwrap_or_else(|err| {
        // build the configuration
        eprintln!("Problem parsing arguments: {err}"); // print an error message
        process::exit(1); // exit the program
    });

    if let Err(e) = minigrep::run(config) {
        // run the program
        eprintln!("Application error: {e}"); // print an error message
        process::exit(1); // exit the program
    }
}
