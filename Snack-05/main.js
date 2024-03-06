/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const raceBikes = [
  {
    name: "Pinarello Dogma F12",
    weight: 7.5
  },
  {
    name: "Bianchi Oltre XR4",
    weight: 6.9
  },
  {
    name: "Colnago C64",
    weight: 7.1
  },
  {
    name: "Cervelo S5",
    weight: 6.8
  },
  {
    name: "Scott Foil",
    weight: 7.7
  },
  {
    name: "Cannondale SuperSix Evo",
    weight: 6.9
  },
  {
    name: "Genesis Zero Disc",
    weight: 7.5
  },
  {
    name: "Focus Izalco Max",
    weight: 7.6
  },
  {
    name: "Santa Cruz Stigmata",
    weight: 7.3
  },
  {
    name: "3T Strada",
    weight: 7.2
  },
];

let minorWeightBike = raceBikes[0];

raceBikes.forEach(bike => {

  if (bike.weight < minorWeightBike.weight) {
    minorWeightBike = bike;
  }

})

const { name, weight } = minorWeightBike;

console.log(`La bicicletta con il peso minore è ${name}`);

