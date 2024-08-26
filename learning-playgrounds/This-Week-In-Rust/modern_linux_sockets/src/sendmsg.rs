use bytes::Bytes;
use socket2::{Domain, Protocol, SockAddr, Socket, Type};
use std::io::IoSlice;
use std::io::Result;
use std::iter;
use std::net::{Ipv6Addr, SocketAddr};

pub const MSG_SIZE: usize = 1024; // Replace with your actual MSG_SIZE
pub const MSG_COUNT: usize = 10; // Replace with your actual MSG_COUNT

fn sendmsg_payloads() -> Vec<Bytes> {
    let payload: Vec<u8> = iter::repeat(1u8).take(MSG_SIZE).collect();
    let payload = Bytes::from(payload);
    iter::repeat_with(|| payload.clone())
        .take(MSG_COUNT)
        .collect()
}

pub fn sendmsg_sender(dst: SocketAddr) -> Result<()> {
    let payloads = sendmsg_payloads();

    let sock = Socket::new(Domain::IPV6, Type::DGRAM, Some(Protocol::UDP))?;
    let addr = SocketAddr::from((Ipv6Addr::LOCALHOST, 0));
    let addr = SockAddr::from(addr);
    sock.bind(&addr)?;
    let dst = SockAddr::from(dst);

    for payload in payloads {
        let buf = IoSlice::new(&payload);
        let n = sock.send_to_vectored(&[buf], &dst)?;
        assert_eq!(n, MSG_SIZE);
    }
    println!("send done");

    Ok(())
}
