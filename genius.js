function activate(idx){
	var div = "";
	switch(idx){
		case 0: div="genius-blue"; break;
		case 1: div="genius-red"; break;
		case 2: div="genius-green"; break;
		case 3: div="genius-yellow"; break;
	}
	document.getElementByID(div).setAttribute("class", "active");
	document.getElementByID(div).setAttribute("className", "active");
}

function deactivate(idx){
	var div = "";
	switch(idx){
		case 0: div="genius-blue"; break;
		case 1: div="genius-red"; break;
		case 2: div="genius-green"; break;
		case 3: div="genius-yellow"; break;
	}
	document.getElementByID(div).setAttribute("class", "");
	document.getElementByID(div).setAttribute("className", "");
}