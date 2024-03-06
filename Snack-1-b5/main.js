/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  { type: 'zucchino nero di Milano', weight: 70, length: 28 },
  { type: 'zucchino romanesco', weight: 80, length: 17 },
  { type: 'zucchino bianco di Trieste', weight: 80, length: 16 },
  { type: 'zucchino striato', weight: 75, length: 27 },
  { type: 'zucchino giallo', weight: 100, length: 26 },
  { type: 'zucchino da fiore', weight: 70, length: 14 },
  { type: 'zucchino ad alberello', weight: 65, length: 22 },
  { type: 'zucchino tondo', weight: 75, length: 16 },
  { type: 'zucchino trombetta di Albenga', weight: 110, length: 21 },
  { type: 'zucchino patisson', weight: 100, length: 19 },
];

let totalWeight = 0;

zucchine.forEach(zucchina => totalWeight += zucchina.weight);

console.log(`Il peso totale delle zucchine è ${totalWeight}g`);

