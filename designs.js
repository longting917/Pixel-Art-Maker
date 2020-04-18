const table = document.getElementById('pixelCanvas');

function makeGrid() {

	const inputHeight = document.getElementById('inputHeight');
	const inputWidth = document.getElementById('inputWidth');

	var rows = inputHeight.value;
	var cols = inputWidth.value;

	for(i = 1; i <= rows; i++) {

		table.appendChild(document.createElement('TR'));
		var lastRow = table.lastChild;

		for(j = 1; j <= cols; j++) {

			lastRow.appendChild(document.createElement('TD'));
			lastRow.lastChild.setAttribute('class','cell');
		}
	}

	table.addEventListener('click', function (evt) {
	    if (evt.target.nodeName === 'TD') {
	        var color = document.getElementById('colorPicker').value;
		        // Tests below to debug why color might not show up on a click. 
		        // Below checks passed 2018-04-18
		        // console.log(color);
		        // console.log(evt.target.hasAttribute("style"));
		        // console.log('A cell was clicked');
		        evt.target.style.backgroundColor = color;
	   	}
	});
}

document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#sizePicker').addEventListener('click', function (evt) {
	
		if(table.hasChildNodes() === true){
			// Removes old rows so they don't just keep appending on the bottom
			// deleting the table.
			while(table.rows.length > 0) {
				  table.deleteRow(0);
			}
		}
		if (evt.target.getAttribute("type")==="submit") {
			evt.preventDefault();	
			makeGrid(evt)
		}
	});

});
