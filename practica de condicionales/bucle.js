// let n = 0;
// while(n < 91) {
//     console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
//     n += 10;
// }


/* while(condicion){
    bloque de codigo
} */

/*
do{
    bloque de codigo
}while(condicion);
 */

/* 
for(inicializacion; condicion; incremento){
    bloque de codigo
}
ej. for (let i=0; i < 10; i++){
    console.log(i);
}
==for arrays==
for (let i = 0; i < values.length; i++) {
    sum += values[i];
*/


switch(showContact){
    
    case "todos":
        alert(JSON.stringify(contacts));
        break;
    case "primero":
        alert(JSON.stringify(contacts[0]));
        break;
    case "ultimo":
        alert(JSON.stringify(contacts[2]));
        break;
    case "nuevo":
        contact.push(newNames)
        break;
    default :
    console.log("salir")}

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuera@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];


const contactResult = prompt("Buscar")
for (const property in contacts){
    if(property === "name" || property === "phone" || property === "email"){
        contactResult[property] = contacts[property];
    }
   
}
console.log(contactResult);



// let showContact = contacts.length;
// let i =0;

// while (i ===name.contacts[0]|| i=== name.contacts[2]){
// console.log(contacts[i]);
// }




// for(let num = 0; num < 5; num++){
//     var ask = prompt('ver contactos');
//     contacts.push(ask);   
// }
// console.log(contacts);