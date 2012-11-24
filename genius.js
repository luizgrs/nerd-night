buttonPressed = function (idx){
	var div = "";
	if(idx&1){
		div="genius-green";
		document.getElementById(div).setAttribute("class", "active");
		document.getElementById(div).className =  "active";
	}
	if(idx&2){
		div="genius-red";
		document.getElementById(div).setAttribute("class", "active");
		document.getElementById(div).className =  "active";
	}
	if(idx&4){
		div="genius-blue";
		document.getElementById(div).setAttribute("class", "active");
		document.getElementById(div).className =  "active";
	}
	
	if(idx&8){
		div="genius-yellow";
		document.getElementById(div).setAttribute("class", "active");
		document.getElementById(div).className =  "active";
	}
}

buttonUnpressed = function (idx){
	var div = "";
	if(idx&1){
		div="genius-green";
		document.getElementById(div).setAttribute("class", "");
		document.getElementById(div).className =  "";
	}
	if(idx&2){
		div="genius-red";
		document.getElementById(div).setAttribute("class", "");
		document.getElementById(div).className =  "";
	}
	if(idx&4){
		div="genius-blue";
		document.getElementById(div).setAttribute("class", "");
		document.getElementById(div).className =  "";
	}
	
	if(idx&8){
		div="genius-yellow";
		document.getElementById(div).setAttribute("class", "");
		document.getElementById(div).className =  "";
	}
}

var connection = function(){
	var socket = new WebSocket('ws://LUIZGRS-PC:8181/websession');
       socket.onopen = function() {
           alert('handshake successfully established. May send data now...');
       };
       socket.onclose = function() {
           alert('connection closed');
       };
}