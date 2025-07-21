use dotenv::dotenv;
use std::env;

fn main() {
    // Load environment variables from the .env file
    dotenv().ok();

    // Ensure the WEATHERSTACK_API_KEY is set in the environment
    if env::var("WEATHERSTACK_API_KEY").is_err() {
        eprintln!("Error: WEATHERSTACK_API_KEY is not set in the environment.");
        std::process::exit(1);
    }

    // Collect command line arguments, skipping the first one (the program name)
    let args: Vec<_> = env::args().skip(1).collect();

    // Check if any location argument is provided
    if args.is_empty() {
        eprintln!("Usage: current-weather <location>");
        std::process::exit(1);
    }

    // Join the arguments to form the location query
    let location = args.join(" ");
    // Print the location being queried
    println!("Fetching current weather for: {}", location);

    // Define the URL for the Weatherstack API
    const URL: &'static str = "https://api.weatherstack.com/current";

    // Retrieve the API key from the environment variable
    let api_key = env::var("WEATHERSTACK_API_KEY").unwrap();

    // Make the GET request to the Weatherstack API with the location and API key
    let resp = reqwest::blocking::Client::new()
        .get(URL)
        .query(&[("query", &location), ("access_key", &api_key)])
        .send()
        .unwrap();

    // Check if the request was successful
    if !resp.status().is_success() {
        eprintln!(
            "Error: Failed to fetch weather data. Status: {}",
            resp.status()
        );
        std::process::exit(1);
    }

    // Print the response text (weather data)
    println!("{}", resp.text().unwrap());
}
