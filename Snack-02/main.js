/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const musicalInstruments = ["guitar", "DRUM", "bass", "Violin", "Piano", "UKULELE"];

const newArray = musicalInstruments.map(instrument => {
  let firstLetterCap = instrument.toLowerCase();
  firstLetterCap = firstLetterCap.charAt(0).toUpperCase() + firstLetterCap.slice(1);
  return firstLetterCap;
});

console.log(newArray);
