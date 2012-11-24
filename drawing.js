window.onload = function cvs(){
	var canvas = document.getElementById('cvs');
	// Check the element is in the DOM and the browser supports canvas
	if(canvas.getContext) {
		// Initaliase a 2-dimensional drawing context
		var context = canvas.getContext('2d');
		//Canvas commands go here
		context.fillStyle = "rgb(0,0,0)";
		//var h = context.height;
		//var w = context.width;
		context.arc(0,0,30,0,Math.PI*2,false);
		context.fill();
	}
}