use benchmarking_rust_criterion::{play_game, play_game_fibonacci};
use criterion::{criterion_group, criterion_main, Criterion};

fn bench_play_game(c: &mut Criterion) {
    c.bench_function("bench_play_game", |b| {
        b.iter(|| {
            std::hint::black_box(for i in 1..=100 {
                play_game(i, false);
                play_game_fibonacci(i, false);
            });
        });
    });
}

fn bench_play_game_fibonacci(c: &mut Criterion) {
    c.bench_function("bench_play_game", |b| {
        b.iter(|| {
            std::hint::black_box(for i in 1..=100 {
                play_game_fibonacci(i, false);
            });
        });
    });
}

fn bench_play_game_100(c: &mut Criterion) {
    c.bench_function("bench_play_game_100", |b| {
        b.iter(|| std::hint::black_box(play_game(100, false)));
    });
}

fn bench_play_game_1_000_000(c: &mut Criterion) {
    c.bench_function("bench_play_game_1_000_000", |b| {
        b.iter(|| std::hint::black_box(play_game(1_000_000, false)));
    });
}

criterion_group!(
    benches,
    bench_play_game,
    bench_play_game_fibonacci,
    bench_play_game_100,
    bench_play_game_1_000_000
);
criterion_main!(benches);
