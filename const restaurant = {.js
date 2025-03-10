const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tava e nti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// obtener las variables: nombre, horario

const { name: nombre, openingHours: horario } = restaurant;
console.log(nombre);
console.log(horario);

// obtener las variables: horarioEntreSemana y horarioFinDeSemana
// const {sat: horarioFinDeSemana, ...horarioEntreSemana} = horario;
// console.log(horarioEntreSemana);

// más dificil:
const {
  openingHours: { sat: horarioFinDeSemana, ...horarioEntreSemana },
} = restaurant;

console.log(horarioEntreSemana.thu);

// { mon: 'Not open', thu: {open: 12, close: 22} }

console.log(horario);
horario.mon = "Not open";
console.log(horario.mon);

const horarioCerrado = {
  mon: "Not open",
  tue: "Not open",
  wed: "Not open",
  thu: "Not open",
  fri: "Not open",
  sat: "Not open",
  sun: "Not open",
};

const horarioCompleto = { ...horarioCerrado, ...horario };
console.log(horarioCompleto);
