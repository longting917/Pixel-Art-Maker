// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {


function makeGrid() {

	const inputHeight = document.getElementById('inputHeight');
	const inputWidth = document.getElementById('inputWidth');

	var rows = inputHeight.value;
	var cols = inputWidth.value;

	for(i = 1; i <= rows; i++) {

		var table = document.getElementById('pixelCanvas');
		table.appendChild(document.createElement('TR'));
		var lastRow = table.lastChild;

		for(j = 1; j <= cols; j++) {
			lastRow.appendChild(document.createElement('TD'));
			lastRow.lastChild.setAttribute('class','cell');
		}
	}

	document.querySelector('#pixelCanvas').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
        var color = document.getElementById('#colorPicker').val;
        evt.target.setAttribute('background-color',color);
        console.log('A cell was clicked');
    }});
}