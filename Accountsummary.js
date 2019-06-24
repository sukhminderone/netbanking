var data = [["22/01/2018","money received from user1","1000","0","1000"],["23/01/2018","money received from user1","0","100","100"],["25/01/2018","money received from user1","87","900","1000"]];


retrievedObject = JSON.parse(localStorage.getItem('robin@gmail.com'));
//var data = retrievedObject["currentAccountSummary"];
console.log(data.length);
var totalRows = data.length;
var cellsInRow = 5;
    function drawTable() {
        // get the reference for the body
        var div1 = document.getElementById('div1');

        // creates a <table> element
        var tbl = document.createElement("table");

        // creating rows
        for (var r = 0; r < totalRows; r++) {
            var row = document.createElement("tr");

	     // create cells in row
             for (var c = 0; c < cellsInRow; c++) {
                var cell = document.createElement("td");

                var cellText = document.createTextNode(data[r][c]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

	tbl.appendChild(row); // add the row to the end of the table body
        }

     div1.appendChild(tbl); // appends <table> into <div1>
}
window.onload=drawTable;
