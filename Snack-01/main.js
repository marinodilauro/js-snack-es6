/* Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array. */

const carsList = [

  {
    marca: "Hyundai",
    modello: "i20",
    alimentazione: "Benzina"
  },

  {
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "GPL"
  },

  {
    marca: "Renault",
    modello: "Clio",
    alimentazione: "Elettrica"
  },

  {
    marca: "Dacia",
    modello: "Sandero",
    alimentazione: "Benzina"
  },

  {
    marca: "Mazda",
    modello: "MX-5",
    alimentazione: "Benzina"
  },

  {
    marca: "Ford",
    modello: "Focus",
    alimentazione: "Diesel"
  },

  {
    marca: "Tesla",
    modello: "Model-Y",
    alimentazione: "Elettrico"
  },

  {
    marca: "Jeep",
    modello: "Renegade",
    alimentazione: "Benzina"
  },

  {
    marca: "Toyota",
    modello: "Corolla",
    alimentazione: "Ibrido"
  },

  {
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "Diesel"
  },
];


let alimBenzina = [];
let alimDiesel = [];
let alimAltro = [];

alimBenzina = carsList.filter(car => car.alimentazione === "Benzina");
alimDiesel = carsList.filter(car => car.alimentazione === "Diesel");
alimAltro = carsList.filter(car => car.alimentazione !== "Benzina" && car.alimentazione !== "Diesel");

console.log(alimBenzina);

console.log(alimDiesel);

console.log(alimAltro);

