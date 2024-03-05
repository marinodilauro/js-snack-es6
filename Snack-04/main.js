/*
Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const peopleList = [
  { firstName: 'Tony', lastName: 'Stark', age: 38 },
  { firstName: 'Peter', lastName: 'Parker', age: 17 },
  { firstName: 'Bruce', lastName: 'Banner', age: 36 },
  { firstName: 'Steve', lastName: 'Rogers', age: 27 },
  { firstName: 'Natasha', lastName: 'Romanoff', age: 26 },
  { firstName: 'Miles', lastName: 'Morales', age: 14 },
  { firstName: 'Clint', lastName: 'Barton', age: 40 },
  { firstName: 'Gwen', lastName: 'Stacy', age: 16 },
  { firstName: 'Scott', lastName: 'Lang', age: 30 },
  { firstName: 'Peter', lastName: 'Quill', age: 34 },
  { firstName: 'Carol', lastName: 'Danvers', age: 18 },
];

const isAdult = peopleList.map(person => {

  if (person.age >= 18) {
    person.canDrive = `${person.firstName} ${person.lastName} può guidare essendo maggiorenne`;
  } else {
    person.canDrive = `${person.firstName} ${person.lastName} NON può guidare essendo minorene`;
  }

  return person
});

console.log(isAdult);

