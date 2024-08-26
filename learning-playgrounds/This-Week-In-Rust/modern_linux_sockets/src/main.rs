use std::net::UdpSocket;

use anyhow::Result;
use sendervectored::sendervectored;
use sendmsg::sendmsg_sender;
use sendto::sendto_sender;

mod sendervectored;
mod sendmsg;
mod sendto;

fn main() -> Result<()> {
    let dst_sock = UdpSocket::bind("[::1]:0")?;

    // sendto_sender(dst_sock.local_addr()?)?;
    // sendmsg_sender(dst_sock.local_addr()?)?;
    sendervectored(dst_sock.local_addr()?)?;
    Ok(())
}
