// Select canvas and size input
const canvas = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");

// Creating a grid
function makeGrid() {
  //Select height and width input
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    // Creates rows and cells of the grid
    for (let r = 0; r < height; r++) {
        let row = canvas.insertRow(r);
        for (let c = 0; c < width; c++) {
            let cell = row.insertCell(c);
                // Select color input with the click
                // listener to paint and unpaint grid cells
                cell.addEventListener("click", function (click) {
                    let color = document.getElementById("colorPicker").value;
                    let clickedCell = click.target;
                        if(clickedCell.style.backgroundColor ==  "white") {
                            clickedCell.style.backgroundColor = color;
                        }
                        else  {
                            clickedCell.style.backgroundColor = "white";
                        }
                })
            }
      }
};

// When size is submitted by the user, call makeGrid()
// and also allows user to reset when they resubmit size input
size.addEventListener("submit", function(event) {
    event.preventDefault();
    canvas.innerHTML = " ";
    makeGrid();
});
