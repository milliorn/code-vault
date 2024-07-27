import http from "http";

const server = http.createServer((req, res) => {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  
  server.on("clientError", (err, socket) => {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
  });

  if (req.url === "/") {
    res.end(`Your IP address is ${ip} and your source port is ${port}.`);
  } else if (req.url === `/about`) {
    res.end(`Here is our short history`);
  } else {
    res.end(
      `<h1>Oops!</h1><p>We can't find the page your looking for!</p><a href="/">back home</a>`
    );
  }
});


server.listen(5000);
