window.onload = function cvs(){
	var canvas = document.getElementById('cvs');
	// Check the element is in the DOM and the browser supports canvas
	if(canvas.getContext) {
		canvas.height = canvas.offsetHeight;
		canvas.width = canvas.offsetWidth;
		// Initaliase a 2-dimensional drawing context
		var context = canvas.getContext('2d');
		//Canvas commands go here
		context.fillStyle = "rgb(0,0,0)";
		var w = canvas.width/2;
		var h = canvas.height/2;
		
		var x = w;
		var y = h;
		////////////////
		// MAIN BLACK
		////////////////
		context.arc(w,h,250,0,Math.PI*2,false);
		context.fill();
		
		////////////////
		// GREEN BUTTON
		////////////////
		context.fillStyle = "rgb(0,255,0)";
		context.beginPath();
		var delta = Math.PI * 0.02;
		context.arc(w,h,210,Math.PI*1.5-delta,Math.PI*1+delta,true);
		x-=115;
		y-=13.3;
		context.lineTo(x,y);
		delta = Math.PI * 0.035;
		context.arc(w,h,115,Math.PI*1+delta,Math.PI*1.5-delta,false);
		context.closePath();
		context.fill();
		
		
		////////////////
		// YELLOW BUTTON
		////////////////
		context.beginPath();
		context.fillStyle = "rgb(255,255,0)";
		var delta = Math.PI * 0.02;
		context.arc(w,h,210,Math.PI*1-delta,Math.PI*0.5+delta,true);
		x+=102;	
		y+=128;
		context.lineTo(x,y);
		delta = Math.PI * 0.035;
		context.arc(w,h,115,Math.PI*0.5+delta,Math.PI*1-delta,false);
		context.closePath();
		context.fill();
		
		////////////////
		// BLUE BUTTON
		////////////////
		context.beginPath();
		context.fillStyle = "rgb(0,0,255)";
		var delta = Math.PI * 0.02;
		context.arc(w,h,210,Math.PI*0.5-delta,0+delta,true);
		x+=145;	
		y-=102;
		context.lineTo(x,y);
		delta = Math.PI * 0.035;
		context.arc(w,h,115,0+delta,Math.PI*0.5-delta,false);
		context.closePath();
		context.fill();
		
		////////////////
		// RED BUTTON
		////////////////
		context.beginPath();
		context.fillStyle = "rgb(255,0,0)";
		var delta = Math.PI * 0.02;
		context.arc(w,h,210,Math.PI*2-delta,Math.PI*1.5+delta,true);
		x-=118;	
		y-=126;
		context.lineTo(x,y);
		delta = Math.PI * 0.035;
		context.arc(w,h,115,Math.PI*1.5+delta,Math.PI*2-delta,false);
		context.closePath();
		context.fill();
		
	}
}