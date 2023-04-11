
/*for of */
// let values = [10, 30, 50, 100];
// let sum = 0;
// for (let i = 0; i < values.length; i++) {
//     sum += values[i];
// }
// console.log(sum); // -> 190


/*let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "SÃ£o Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`); ==> como sacar una info de un array sin los corchetes
    }
}*/


/* 
for ... in

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

for (let key in user) {
    console.log(`${key} -> ${user[key]}`); // -> 
name -> Calvin
surname -> Hart
age -> 66
email -> CalvinMHart@teleworm.us
};

*/

/* 

break y continue 

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

*/