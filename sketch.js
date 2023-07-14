window.addEventListener("DOMContentLoaded", addElement(16,16));

document.querySelectorAll(".row").forEach(function(item){
    item.addEventListener("click", e => {
        e.target.style.backgroundColor = window.getComputedStyle((
            document.getElementById("grid")), null).getPropertyValue('background-color');
    });
});

document.getElementById("btn-adjust").addEventListener("click", () => {
    let len = prompt("Choose the length of the board:");
    let he = prompt("Choose the height of the board:");

    clearBoard();
    addElement(he,len);
});

document.getElementById("btn-reset").addEventListener("click", reset);
document.getElementById("btn-paint").addEventListener("click", paint);
document.getElementById("btn-random").addEventListener("click", random);
document.getElementById("btn-erase").addEventListener("click", erase);
document.getElementById("btn-fill").addEventListener("click", fill);

function addElement(rows,columns){
    
    var grid = document.createElement('div');
    grid.id = 'grid';

    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div'); 
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var row = document.createElement('div'); 
            row.className = 'row';
            column.appendChild(row); 
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
};

function clearBoard(){
   var x = document.getElementById("grid");

   while(x.hasChildNodes()) {
     x.removeChild(grid.firstElementChild);
  };

   x.remove();
    
}

function reset(){
    let elements = document.getElementsByClassName("row")
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor=window.getComputedStyle((
            document.getElementById("grid")), null).getPropertyValue('background-color');
    };
}

function paint(){
    document.querySelectorAll(".row").forEach(function(item){
        item.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = document.getElementById("colorpicker").value;
             });
        });
    };


function random(){
    document.querySelectorAll(".row").forEach(function(item){
        item.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    });
}

function erase(){
    document.querySelectorAll(".row").forEach(function(item){
        item.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = window.getComputedStyle((
                document.getElementById("grid")), null).getPropertyValue('background-color');
        });
    });
}

function fill(){
    document.querySelectorAll(".row").addEventListener("click", e => {
        e.target.style.backgroundColor = document.getElementById("colorpicker").value;
         });
    }