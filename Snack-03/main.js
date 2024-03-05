/*
Crea un array di oggetti che rappresentano degli animali. Ogni animale ha un nome, una famiglia e una classe.

[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'rospo', famiglia: 'bufonidi', classe: 'anfibi' },
  { nome: 'pitone', famiglia: 'pitonidi', classe: 'rettili' },
  { nome: 'ragno', famiglia: 'araneidi', classe: 'aracnidi' },
];

const mammals = animals.filter(animal => animal.classe === "mammiferi");
console.log(mammals);