// let contacts =
// [
// {   "name":"Maxwell Wright",
//     "Telefono":"(0191) 719 6495",
//     "correo":"Curabitur.egestas.nunc@nonummyac.co.uk"
// },


// {   "name":"Raja Villarreal",
//     "Telefono":"(0191) 719 6495",
//     "correo":"Curabitur.egestas.nunc@nonummyac.co.uk"
// },



// {   "name":"Helen Richards",
//     "Telefono":"(0191) 719 6495",
//     "correo":"Curabitur.egestas.nunc@nonummyac.co.uk"
// },

// ];

var array = [["Maxwell Wright","B1(0191) 719 6495","Curabitur.egestas.nunc@nonummyac.co.uk"],
["Raja Villarreal","0866 398 2895","posuere.vulputate@sed.com"],
["Helen Richards","0800 1111","libero@convallis.edu"],




]
                      


table = document.getElementById("table");

for(var i = 0; i < array.length; i++)
{
    // create a new row
    var newRow = table.insertRow(table.length);
    for(var j = 0; j < array[i].length; j++)
    {
        // create a new cell
        var cell = newRow.insertCell(j);
        
        // add value to the cell
        cell.innerHTML = array[i][j];
    }
}
