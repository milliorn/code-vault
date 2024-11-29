use anyhow::Result;

use std::{
    iter,
    net::{SocketAddr, UdpSocket},
};

use bytes::Bytes;

pub const MSG_SIZE: usize = 1024; // Replace with your actual MSG_SIZE
pub const MSG_COUNT: usize = 10; // Replace with your actual MSG_COUNT

fn sendto_payloads() -> Vec<Bytes> {
    let payload: Vec<u8> = iter::repeat(1u8).take(MSG_SIZE).collect();
    let payload = Bytes::from(payload);

    iter::repeat_with(|| payload.clone())
        .take(MSG_COUNT)
        .collect()
}

pub fn sendto_sender(dst: SocketAddr) -> Result<()> {
    let payloads = sendto_payloads();
    let sock = UdpSocket::bind("[::1]:0")?;
    // let mut i = 0;

    for payload in payloads {
        let n = sock.send_to(&payload, dst)?;
        // i += 1;
        // println!("#{}: send {} bytes", i, n);
        assert_eq!(n, MSG_SIZE);
    }
    println!("send done");

    Ok(())
}
