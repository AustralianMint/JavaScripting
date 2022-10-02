//This project uses Arrays and Objects to display statistics. 
//Adding new objecs is being practiced also.

const team = {
  //Arrays populated with Objects
  _players: [
    { firstName: "Thomas", lastName: "winkler", age: 31 },
    { firstName: "Harry", lastName: "stylez", age: 23 },
    { firstName: "Garry", lastName: "whalez", age: 58 },
  ],
  _games: [
    { opponent: "bla", teamPoints: 3, opponentPoints: 2 },
    { opponent: "blablabla", teamPoints: 6, opponentPoints: 72 },
    { opponent: "blabla", teamPoints: 35, opponentPoints: 7 },
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  //append new player method.
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player); 
  },
  //append new game method.
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

//testing methods from calling Object. 
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

//just test cuz can.
console.log(team);

