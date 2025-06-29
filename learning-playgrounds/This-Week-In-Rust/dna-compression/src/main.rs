mod cli;

use std::env;

use crate::cli::{decode_file, encode_file};

fn main() -> std::io::Result<()> {
    // Collect command-line args
    let args: Vec<String> = env::args().collect();
    if args.len() < 3 {
        eprintln!(
            "Usage: {} <encode|decode> <input_file> <output_file> [--complement] [--benchmark]",
            args[0]
        );
        std::process::exit(1);
    }

    let mode = args[1].as_str();
    let input_path = &args[2];
    let output_path = &args[3];
    let should_complement = args.contains(&"--complement".to_string());
    let should_benchmark = args.contains(&"--benchmark".to_string());

    match mode {
        "encode" => encode_file(input_path, output_path, should_complement, should_benchmark)?,
        "decode" => decode_file(input_path, output_path, should_complement, should_benchmark)?,
        other => {
            eprintln!("Unknown mode: {} (use encode or decode)", other);
            std::process::exit(1);
        }
    }

    Ok(())
}
