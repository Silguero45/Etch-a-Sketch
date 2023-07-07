window.addEventListener("DOMContentLoaded", addElement(16,16));

document.querySelectorAll(".row").forEach(function(item){
    item.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "pink";
    });
});

document.querySelectorAll(".row").forEach(function(item){
    item.addEventListener("click", e => {
        e.target.style.backgroundColor = "gold";
    });
});


function addElement(rows,columns){
    
    var grid = document.createElement('div');
    grid.className = 'grid';

    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            row.textContent = i + '-' +j; // set text
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
};

function reset(){
    elements = document.getElementsByClassName("row")
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="gold";
    };
}