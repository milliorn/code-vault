const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Joe",
      lastName: "Blow",
      age: 21,
    },
    {
      firstName: "Art",
      lastName: "Fart",
      age: 31,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 2,
      opponentPoints: 7,
    },
    {
      opponent: "Saints",
      teamPoints: 4,
      opponentPoints: 2,
    },
    {
      opponent: "Bears",
      teamPoints: 24,
      opponentPoints: 27,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Stephen", "Curry", 28);
team.addGame("Rams", 10, 20);

team.players.forEach((e) => console.log(e));
team.games.forEach((e) => console.log(e));
