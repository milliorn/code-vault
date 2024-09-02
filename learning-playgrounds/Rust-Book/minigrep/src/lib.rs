use std::{env, error::Error, fs};

pub struct Config {
    // struct to hold the configuration
    pub query: String,     // add a field to hold the query string
    pub file_name: String, // add a field to hold the file name
    pub ignore_case: bool, // add a field to hold the ignore_case flag
}

impl Config {
    // implementation of the Config struct
    pub fn build(args: &[String]) -> Result<Config, &'static str> {
        if args.len() < 3 {
            panic!("Not enough arguments");
        } // check if there are enough arguments

        let query = args[1].clone(); // get the query string
        let file_name = args[2].clone(); // get the file name
        let ignore_case = env::var("IGNORE_CASE").is_ok(); // check if the ignore_case flag is set

        Ok(Config {
            query,
            file_name,
            ignore_case,
        }) // return the configuration
    }
}

pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
    // run the program
    let contents = fs::read_to_string(config.file_name)?; // read the file

    let results = if config.ignore_case {
        // check if the ignore_case flag is set
        search_case_insensitive(&config.query, &contents)
    } else {
        search(&config.query, &contents)
    }; // search for the query string

    for line in results {
        // iterate over the results
        println!("{}", line); // print the results
    }

    Ok(()) // return success
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // search for the query string in the contents
    let mut results = Vec::new(); // create a vector to hold the results

    for line in contents.lines() {
        // iterate over the lines in the contents
        if line.contains(query) {
            // check if the line contains the query
            results.push(line); // add the line to the results
        }
    }

    results // return the results
}

pub fn search_case_insensitive<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    // search for the query string in the contents in a case-insensitive manner
    let query = query.to_lowercase();
    let mut results = Vec::new();

    for line in contents.lines() {
        // iterate over the lines in the contents
        if line.to_lowercase().contains(&query) {
            // check if the line contains the query
            results.push(line); // add the line to the results
        }
    }

    results // return the results
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn case_sensitive() {
        let query = "duct";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Duct tape.";

        assert_eq!(vec!["safe, fast, productive."], search(query, contents));
    }

    #[test]
    fn case_insensitive() {
        let query = "rUsT";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.
Trust me.";

        assert_eq!(
            vec!["Rust:", "Trust me."],
            search_case_insensitive(query, contents)
        );
    }
}
