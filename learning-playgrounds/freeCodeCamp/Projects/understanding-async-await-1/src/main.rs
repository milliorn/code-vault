use std::{
    pin::Pin,
    task::{Context, Poll},
};

pub enum Hello {
    Init { name: &'static str },
    Done,
}

pub trait MyFuture {
    type Output;

    // Required method
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}

impl MyFuture for Hello {
    type Output = ();

    fn poll(mut self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<Self::Output> {
        match *self {
            Hello::Init { name } => println!("hello, {}!", name),
            Hello::Done => panic!("Please stop polling me!"),
        };

        *self = Hello::Done;
        Poll::Ready(())
    }
}

#[tokio::main]
async fn main() {
    hello("world").await;
}

async fn hello(name: &'static str) {
    println!("hello, {}!", name);
}
