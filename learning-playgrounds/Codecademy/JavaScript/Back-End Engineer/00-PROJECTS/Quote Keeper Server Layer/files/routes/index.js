// routes/index.js
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.post("/", (req, res) => {
	const { source, attributed, quote } = req.body;
	res.render("index", { source, attributed, quote });
});

export default router;
