import people from "./data.js";

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide name value" });
	}
	res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide name value" });
	}
	res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.people.find((x) => x.id === Number(id));

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `no person with id ${id}` });
	}
	const newPeople = people.people.map((x) => {
		if (x.id === Number(id)) {
			x.name = name;
		}
		return x;
	});
	res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
	const p = people.people.find((x) => x.id === Number(req.params.id));
	if (!p) {
		return res
			.status(404)
			.json({ success: false, msg: `no person with id ${req.params.id}` });
	}
	const newPeople = people.people.filter((x) => x.id !== Number(req.params.id));
	return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
};
