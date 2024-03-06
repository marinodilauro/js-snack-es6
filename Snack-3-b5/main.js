/*
Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
  { type: 'zucchino nero di Milano', weight: 70, length: 21 },
  { type: 'zucchino romanesco', weight: 80, length: 12 },
  { type: 'zucchino bianco di Trieste', weight: 80, length: 16 },
  { type: 'zucchino striato', weight: 75, length: 22 },
  { type: 'zucchino giallo', weight: 100, length: 23 },
  { type: 'zucchino da fiore', weight: 70, length: 14 },
  { type: 'zucchino ad alberello', weight: 65, length: 22 },
  { type: 'zucchino tondo', weight: 75, length: 13 },
  { type: 'zucchino trombetta di Albenga', weight: 110, length: 20 },
  { type: 'zucchino patisson', weight: 100, length: 11 },
];

const zucchineSmall = zucchine.filter(zucchina => zucchina.length < 15);
const zucchineLarge = zucchine.filter(zucchina => zucchina.length >= 15);


let zucchineSmallTotalWeight = 0;
zucchineSmall.forEach(zucchina => zucchineSmallTotalWeight += zucchina.peso);

let zucchineLargeTotalWeight = 0;
zucchineLarge.forEach(zucchina => zucchineLargeTotalWeight += zucchina.peso);

console.log(zucchineSmall);
console.log(`Il peso totale delle zucchine corte è ${zucchineSmallTotalWeight}g`);

console.log(zucchineLarge);
console.log(`Il peso totale delle zucchine lunghr è ${zucchineLargeTotalWeight}g`);
