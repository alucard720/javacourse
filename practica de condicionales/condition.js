// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur@nonummyac.co.uk"
//     }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere@sed.com"
//     }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
//     }];


//     let Names = prompt("buscar nombre: 1,2,3");
    

//    switch(Names){

//     case "1":
//         alert(JSON.stringify(contacts[0]));
//         break;
//     case "2":
//         alert(JSON.stringify(contacts[2]));
//         break;
//     case "3":
//         alert(JSON.stringify(contacts[0]));
//         break;

//    }
// let NewNames = prompt("Agregar nuevo nombre
//    if (Names !== NewNames){
//     contacts.push(NewNames);

//    }else{
//     alert("try again");
//    }

//    console.log(NewNames);


   while (true) {
    let firstNumber = prompt("Introduce el primer número");
    let secondNumber = prompt("Introduce el primer número");
    let operand = prompt("Introduce el operando (+, -, * o /)");
    let result;

    if (firstNumber === "S" || secondNumber === "S" || operand === "S") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: operando desconocido";
        }
    } else {
        result = "Error:al menos uno de los valores introducidos no es un número";
    }
    alert(result);
}