// Select canvas and size input
const canvas = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");

// Creating a grid
function makeGrid() {
  //Select height and width input
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    // Creates rows and cells of the grid
    for (let r = 1; r <= height; r++) {
        let rows = document.createElement("tr");
        canvas.appendChild(rows);
        for (let c = 1; c <= width; c++) {
            let columns = document.createElement("td");
            rows.appendChild(columns);
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

// Select color input with the click listener to paint grid cells
canvas.addEventListener("click", function (event) {
    let color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
});
