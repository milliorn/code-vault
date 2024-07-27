/*
INTRODUCTION TO JAVASCRIPT
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/


const team = {
  _players: [
    {firstName: 'Michael', lastName: 'Jordan', age: 56},
    {firstName: 'Magic', lastName: 'Johnson', age: 59},
    {firstName: 'Larry', lastName: 'Bird', age: 62} 
  ],
  _games: [
    {opponent: 'Sixers', teamPoints: 87, opponentPoints: 82},
    {opponent: 'Pistons', teampoints: 98, opponentPoints: 96},
    {opponent: 'Spurs', teampoint: 92, opponentPoints: 91}
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
      lastName : lastName, 
      age: age
    };
    this._players.push(player);
  },
  addGame(opp, myPts, opPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: opPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Blazers', 101, 98);
team.addGame('Warriors', 103, 101);
team.addGame('Knicks', 108, 103);

console.log(team.players);
console.log();
console.log(team.games);
