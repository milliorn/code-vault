import express from "express";
import cors from "cors";
import 'dotenv/config'

// console.log(process.env.DB_API_KEY);

const app = express(); // create express app
const PORT = 5000; // default port to listen

app.use(express.json()); // for parsing application/json
app.use(cors()); // enable cors

app.get("/", (req, res) => { // get root
  // console.log(req.accepts());
  // console.log(req.acceptsCharsets());
  // console.log(req.acceptsEncodings());
  // console.log(req.acceptsLanguages());
  // console.log(req.body);
  // console.log(req.cookies);
  // console.log(req.get("Accept"));
  // console.log(req.get("Accept-Encoding"));
  // console.log(req.get("Content-Type"));
  // console.log(req.get("Origin"));
  // console.log(req.get("Referer"));
  // console.log(req.get("User-Agent"));
  // console.log(req.get("host"));
  // console.log(req.headers);
  // console.log(req.hostname);
  // console.log(req.ip);
  // console.log(req.is("json"));
  // console.log(req.method);
  // console.log(req.originalUrl);
  // console.log(req.params);
  // console.log(req.path);
  // console.log(req.protocol);
  // console.log(req.query);
  // console.log(req.range(1000));
  // console.log(req.route);
  // console.log(req.secure);
  // console.log(req.subdomains);
  // console.log(req.xhr);

  res.json({ message: "Hello World!" }); // send response
});

app.get("/api/notes", async (req, res) => { // get all notes
  res.json({ message: "success!" }); // send response
});

app.listen(PORT, () => { // start express server
  console.log(`Server running at http://localhost:${PORT}/`);
});