

// a loop to create my grid
// I guess having two variables to get a grid size is unneccesary 
// but right now it gets the job done
// I may have to fiddle with them a bit when I get around to 
// changing the grid size

var gridContainer = document.getElementById('gridContainer'); // getting our gridContainer element from our html
var gridColumns = 16;
var gridRows = 16;
var gridSize = gridRows * gridColumns; // our number to intitialise the grid. 

for(var i = 0; i < gridSize; i++) {
    var gridTiles = document.createElement('div');
    gridTiles.className = 'gridTiles';

      
    gridContainer.appendChild(gridTiles);
}

 
// This configuration of the loop generates 256 gridTiles which
// is exactly what I want. I just have to figure out how to make them fit
// I am trying to set their size to 100% but they overflow from their container
// I can set them to 35px by 35px and they all fit inside the 
// container, but how will I make their size variable for the 
// grid size selector?

// Do I need a loop that can change? A variable loop?
// Im using a for loop here, do I need a while loop?
// while(... i dont remember the syntax right now and I dont have internet)
// Well at least I have a section of code that works how I need it to


// I need to find a way to add event listeners to every
// iteration of gridTiles
// So, having asked ChatGPT some questions, I see that the forEach()
// method can be used here. It looks like I can essentially create and
// initialise an array in order to use the forEach method

var tileArray = document.querySelectorAll('.gridTiles')

function newClass (gridTiles) {
	gridTiles.classList.add('clicked');
}

tileArray.forEach(function (gridTile) {
	gridTile.addEventListener("click", function() {
        newClass(gridTile);
    });
});

