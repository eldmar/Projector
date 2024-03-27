"use strict";

"use strict";

class Sport {
  #equipment;
  constructor(name, players, time) {
    this.name = name;
    this.players = players;
    this.time = time;
    this.#equipment = [];
  }

  addEquipment(equipment) {
    this.#equipment.push(equipment);
  }

  showEquipment() {
    console.log(`Equipment for ${this.name}: ${this.#equipment.join(", ")}`);
  }

  numberOfPlayers() {
    console.log(`This game is played by ${this.players} players.`);
  }
  changeGameTime(newTime) {
    this.time = newTime;
    console.log(
      `The game time for ${this.name} has been updated to ${this.time} minutes.`
    );
  }
}

class TeamSport extends Sport {
  #tactics;

  constructor(name, players, time, coach, teamName) {
    super(name, players, time);
    this.teamName = teamName;
    this.coach = coach;
    this.#tactics = tactics;
  }

  setCoach(coachName) {
    this.coach = coachName;
  }

  showCoach() {
    console.log(`The coach of ${this.teamName} is ${this.coach}.`);
  }

  cheerTeam() {
    console.log(`Go, ${this.teamName}!`);
  }
}

class Football extends TeamSport {
  #stadium;
  constructor(players, league, stadium) {
    super("Football", players, 90, teamName);
    this.league = league;
    this.#stadium = stadium;
  }

  setLeague(leagueName) {
    this.league = leagueName;
  }

  celebrateGoal() {
    console.log(`${this.teamName} scored a goal!`);
  }

  setStadium(stadiumName) {
    this.stadium = stadiumName;
  }

  #showStadium() {
    console.log(`The home stadium of ${this.teamName} is ${this.stadium}.`);
  }
  numberOfPlayers() {
    console.log(`This game is played by ${this.players} players.`);
  }
}

class Basketball extends TeamSport {
  #mascot;
  constructor(players, courtType, mascot) {
    super("Basketball", players, 48, teamName);
    this.courtType = courtType;
    this.#mascot = mascot;
  }

  setCourtType(courtType) {
    this.courtType = courtType;
  }

  dunk() {
    console.log(`${this.teamName} performs a dunk!`);
  }

  setMascot(mascotName) {
    this.mascot = mascotName;
  }

  showMascot() {
    console.log(`The mascot of ${this.teamName} is ${this.mascot}.`);
  }
  numberOfPlayers() {
    console.log(`This game is played by ${this.players} players.`);
  }
}
