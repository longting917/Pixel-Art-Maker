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
	        var color = document.getElementById('colorPicker').value;
	        if (evt.target.hasAttribute("style") === true){
	        	evt.target.removeAttribute("style");
	        } else {
		        console.log(color);
		        evt.target.style.backgroundColor = color;
		        console.log(evt.target.hasAttribute("style"));
		        console.log('A cell was clicked');
	        }

	   	}
	});

}

document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#sizePicker').addEventListener('click', function (evt) {
	


		if(document.getElementById('pixelCanvas').hasChildNodes() === true){
			var tbl = document.getElementById('pixelCanvas');
			while(tbl.rows.length > 0) {
				  tbl.deleteRow(0);
			}
		}

		if (evt.target.getAttribute("type")==="submit") {  // ← verifies target is desired element
			evt.preventDefault();	

			makeGrid(evt)
		}
	});

});
