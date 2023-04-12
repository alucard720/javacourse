let books = [
    
    {
    libro:"Speaking JavaScript",
    author:"Axel Rauschmayer",
    pages:460
    },
    {
    libro:"Programming JavaScript Applications,",
    author:"Eric Elliott",
    pages:254
    },
    {
    libro:"Understanding ECMAScript 6",
    author:"Nicholas C. Zakas",
    pages:352
    }
    ];

console.log(JSON.stringify(books));



// console.log(books.libro.toString());//==> convierte arreglo en cadena.


// concat
// Este método combina dos arreglos o agrega más elementos a un arreglo y luego devuelve uno nuevo.

// let primerosNumeros = [1, 2, 3];
// let segundosNumeros = [4, 5, 6];
// let combinado = primerosNumeros.concat(segundosNumeros);
// console.log(combinado); // [1, 2, 3, 4, 5, 6]


// push()
// Este método agrega elementos al final de un arreglo y cambia el arreglo original.

// let buscadores = ['chrome', 'firefox', 'edge'];
// buscadores.push('safari', 'opera mini');
// console.log(buscadores); 
// // ["chrome", "firefox", "edge", "safari", "opera mini"]

// pop()
// Este método elimina el último elemento de un arreglo y lo devuelve.

// let buscadores = ['chrome', 'firefox', 'edge'];
// buscadores.pop(); // "edge"
// console.log(buscadores); // ["chrome", "firefox"]

// shift()
// Este método elimina el primer elemento de un arreglo y lo devuelve.

// let buscadores = ['chrome', 'firefox', 'edge'];
// buscadores.shift(); // "chrome"
// console.log(buscadores); // ["firefox", "edge"]

// unshift()
// Este método agrega un elemento(s) al comienzo de un arreglo y cambia el arreglo original.

// let buscadores = ['chrome', 'firefox', 'edge'];
// buscadores.unshift('safari');
// console.log(buscadores); //  ["safari", "chrome", "firefox", "edge"]
// También podemos agregar varios elementos a la vez

// splice()
// Este método cambia un arreglo agregando, eliminando e insertando elementos.

// La sintaxis es:

// arreglo.splice(índice[, cantidadDeElementosPorRemover, elemento1, ..., elementoN])

// let colores = ["verde", "amarillo", "azul", "púrpura"];
// const menosColores = colores.splice(0, 3);

// console.log(colores, menosColores); 

// Añadiendo elementos

// Para agregar elementos, debemos establecer deleteCount en cero

// let agenda = ['Yo', 'tengo', 'una', 'reunión', 'con'];
// añade 3 elementos al arreglo

// agenda.splice(5, 0, 'algunos', 'clientes', 'mañana');

// console.log(agenda); 
// ['Yo', 'tengo', 'una', 'reunión', 'con', 'algunos', 'clientes', 'mañana']


// split()
// Este método se utiliza para cadenas. Divide una cadena en subcadenas y las devuelve como un arreglo.

// Aquí la sintaxis:

// cadena.split(separador, límite)
// El separador define cómo dividir una cadena ya sea por una coma
// El límite determina el número de separaciones a realizar
// let primerNombre = 'Bolaji';

// // Regresa la cadena dentro de un arreglo
// primerNombre.split() // ["Bolaji"]


// indexOf()
// Este método busca un elemento en un arreglo y devuelve el índice donde se encontró; de lo contrario, devuelve -1

// let frutas = ['manzana', 'naranja', false, 3]

// frutas.indexOf('naranja'); // devuelve 1
// frutas.indexOf(3); // devuelve 3
// frutas.indexOf(null); // devuelve -1 (no fue encontrado)
// lastIndexOf()
// Este método funciona de la misma manera que indexOf() excepto que funciona de derecha a izquierda. Devuelve el último índice donde se encontró el elemento.

// let frutas = ['manzana', 'naranja', false, 3, 'manzana']

// frutas.lastIndexOf('manzana'); // devuelve 4
// filter()
// Este método crea un nuevo arreglo si los elementos de una matriz pasan una determinada condición.

// La sintaxis es:

// let resultados = arreglo.filter(function(elemento, índice, arreglo) {
//   // devuelve true si el elemento pasa el filtro
// });
// Ejemplo:

// Comprueba a los usuarios de Nigeria.

// const codigoPais = ['+234', '+144', '+233', '+234'];

// const nigeriano = codigoPais.filter( codigo => codigo === '+234');

// console.log(nigeriano); // ["+234", "+234"]
// map()
// Este método crea un nuevo arreglo manipulando los valores de un arreglo.

// Ejemplo:

// Muestra los nombres de usuario en una página. (Visualización básica de una lista de amigos)

// const usuarios = ['tina', 'danny', 'mark', 'bolaji'];
// const lista = usuarios.map(elem => {
// 	return '<li>' + elem + '</li>';
// });

// const render = '<ul>' + lista.join('') + '</ul>';

// document.write(render);









// forEach()
// Este método es bueno para iterar a través de un arreglo. Aplica una función en todos los elementos de dicho arreglo.

// const colores = ['verde', 'amarillo', 'azul'];

// colores.forEach((elemento, índice) => console.log(elemento, índice));
// // devuelve el índice y todos los elementos del arreglo
// // "verde" 0
// // "amarillo" 1
// // "azul" 2
// la iteración se puede hacer sin pasar el argumento de índice

// const colores = ['verde', 'amarillo', 'azul'];

// colores.forEach((elemento) => console.log(elemento));
// devuelve cada elemento del arreglo
// "verde"
// "amarillo"
// "azul"


// every()
// Este método verifica si todos los elementos en un arreglo pasan la condición especificada y devuelve true si pasa, de lo contrario, false.

// comprueba si todos los números son positivos
// const numeros = [1, -1, 2, 3];
// let todosPositivos = numeros.every((valor) => {
// 	return valor >= 0;
// })

// console.log(todosPositivos); // devolvería false

// some()
// Este método verifica si al menos un elemento (uno o más) en un arreglo pasa la condición especificada y devuelve true si pasa, de lo contrario, devuelve false.

// comprueba si al menos un número es positivo
// const numeros = [1, -1, 2, 3];
// let alMenosUnoPositivo = numeros.every((valor) => {
// 	return valor >= 0;
// })

// console.log(alMenosUnoPositivo); // devolvería true

// includes()
// Este método verifica si un arreglo contiene un determinado elemento. Es similar a .some(), pero en lugar de buscar una condición específica para pasar, verifica si el arreglo contiene un elemento específico.

// let usuarios = ['paddy', 'zaddy', 'faddy', 'baddy'];
// usuarios.includes('baddy'); // devuelve true
// Si el elemento no se encuentra, regresa false