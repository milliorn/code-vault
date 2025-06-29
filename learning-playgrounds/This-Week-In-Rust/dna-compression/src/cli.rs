// Bring in our library’s types
use dna_compression::NucleotideBlockVec;

// File I/O and buffering
use std::fs::File;
use std::io::{BufReader, BufWriter, Read, Write};
use std::time::Instant;

pub fn encode_file(
    input_path: &str,
    output_path: &str,
    complement: bool,
    benchmark: bool,
) -> std::io::Result<()> {
    // Read the file into a String
    let mut raw_content = String::new();
    BufReader::new(File::open(input_path)?).read_to_string(&mut raw_content)?;

    // Strip whitespace/newlines
    let sequence: String = raw_content.chars().filter(|c| !c.is_whitespace()).collect();

    // Encode into blocks
    let mut blocks = NucleotideBlockVec::from_str(&sequence);

    // Optionally complement
    if complement {
        blocks.complement_sequence();
    }

    // Write packed bytes
    let bytes = blocks.to_bytes();
    BufWriter::new(File::create(output_path)?).write_all(&bytes)?;

    // Benchmark CSV if asked
    if benchmark {
        run_benchmark(&mut blocks)?;
    }

    Ok(())
}

pub fn decode_file(
    input_path: &str,
    output_path: &str,
    complement: bool,
    benchmark: bool,
) -> std::io::Result<()> {
    // Read all bytes
    let mut raw_bytes = Vec::new();
    BufReader::new(File::open(input_path)?).read_to_end(&mut raw_bytes)?;

    // Reconstruct blocks
    let mut blocks = NucleotideBlockVec::from_bytes(&raw_bytes);

    // Optionally complement
    if complement {
        blocks.complement_sequence();
    }

    // Write decoded text
    let decoded = blocks.to_string();
    BufWriter::new(File::create(output_path)?).write_all(decoded.as_bytes())?;

    // Benchmark CSV if asked
    if benchmark {
        run_benchmark(&mut blocks)?;
    }

    Ok(())
}

/// Compare bit-shift vs. match-table complements 100× and write timings to CSV.
fn run_benchmark(blocks: &mut NucleotideBlockVec) -> std::io::Result<()> {
    // Create/overwrite the CSV file
    let mut csv = File::create("speed_test.csv")?;
    writeln!(csv, "method,iteration,time_ns")?;

    // Perform 100 iterations of each complement method
    for iteration in 0..100 {
        // bit-shift approach
        let start = Instant::now();
        blocks.complement_sequence();

        let elapsed_ns = start.elapsed().as_nanos();
        writeln!(csv, "bit_shift,{iteration},{elapsed_ns}")?;

        // match-table approach
        let start = Instant::now();
        blocks.complement_sequence_match();

        let elapsed_ns = start.elapsed().as_nanos();
        writeln!(csv, "match_table,{iteration},{elapsed_ns}")?;
    }

    println!("Benchmark written to speed_test.csv");
    Ok(())
}
