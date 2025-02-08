use benchmarking_rust_criterion::{play_game, play_game_fibonacci};

fn main() {
    let i = std::env::args()
        .collect::<Vec<String>>()
        .get(1)
        .map(|s| s.parse::<u32>())
        .unwrap_or(Ok(15))
        .unwrap_or(15);
    play_game(i, false);

    let j = std::env::args()
        .collect::<Vec<String>>()
        .get(1)
        .map(|s| s.parse::<u32>())
        .unwrap_or(Ok(15))
        .unwrap_or(15);
    play_game_fibonacci(j, true);
}
