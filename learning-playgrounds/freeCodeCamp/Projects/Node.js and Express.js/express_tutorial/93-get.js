import express from "express";
import people from "./data.js"

const app = express();
const port = 5000;

app.get('/api/people', (req, res) => {
	res.status(200).json({success:true, data:people})
})

app.listen(port, () => {
	console.log(`App is listening on http://localhost:${port}`);
});
