const team = {
	_players: [
		{ firstName: "Michael", lastName: "Jordan", age: 56 },
		{ firstName: "Magic", lastName: "Johnson", age: 59 },
		{ firstName: "Larry", lastName: "Bird", age: 62 },
	],
	_games: [
		{ opponent: "Sixers", teamPoints: 87, opponentPoints: 82 },
		{ opponent: "Pistons", teampoints: 98, opponentPoints: 96 },
		{ opponent: "Spurs", teampoint: 92, opponentPoints: 91 },
	],
	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayer(firstName, lastName, age) {
		let player = {
			firstName: firstName,
			lastName: lastName,
			age: age,
		};
		this._players.push(player);
	},
	addGame(opp, myPts, opPts) {
		const game = {
			opponent: opp,
			teamPoints: myPts,
			opponentPoints: opPts,
		};
		this.games.push(game);
	},
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Blazers", 101, 98);
team.addGame("Warriors", 103, 101);
team.addGame("Knicks", 108, 103);

console.log(team.players);
console.log();
console.log(team.games);
