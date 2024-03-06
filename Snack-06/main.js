/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*BONUS*
Stampare in pagina oltre che in console!
*/

/**
 * Generate a random number between a minimum and a maximum (both included).
 * 
 * @param {number} min Minimum of the range
 * @param {number} max Maximum of the range
 * 
 * @returns {number}
 */
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


const footballTeams = [
  {
    name: "Juventus"
  },
  {
    name: "Inter"
  },
  {
    name: "Milan"
  },
  {
    name: "Napoli"
  },
  {
    name: "Atalanta"
  },
  {
    name: "Roma"
  },
  {
    name: "Lazio"
  },
  {
    name: "Fiorentina"
  },
  {
    name: "Sassuolo"
  },
  {
    name: "Bologna"
  },
];

let teamsWithPointsAndFouls = []

footballTeams.forEach(team => {

  teamsWithPointsAndFouls = footballTeams.map(team => {
    const points = randomNumberGenerator(0, 20);
    const fouls = randomNumberGenerator(0, 20);
    return team = { ...team, points, fouls }
  });

});

console.log(teamsWithPointsAndFouls);

const teamsWithOnlyFouls = teamsWithPointsAndFouls.map(team => { delete team.points; return team })

console.log(teamsWithOnlyFouls);
