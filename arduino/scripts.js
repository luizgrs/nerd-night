navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
navigator.GetGamepads = navigator.Gamepads || navigator.webkitGetGamepads || navigator.msGetGamePads || navigator.mozGetGamePads
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.mozRequestAnimationFrame ||window.webkitRequestAnimationFrame
var buttonPressed; var buttonUnpressed; var botoes_old;

window.URL = window.URL || window.webkitURL;
window.addEventListener('load', load);
var oldGamePad;    
function load()
{   
    if(!navigator.getUserMedia)
        alert('no web-rtc support');
    else if(!navigator.GetGamepads)
        alert('no gamepad support');
    else if(!window.requestAnimationFrame)
        alert('no request animateion frame support');
    else
    {
        navigator.getUserMedia({video:true, audio: true}, cameraToVideo, error);
        scheduleNextTick();
    }
}

function error(error)
{
    console.log(error);
    alert('erro on use webcam');
}

function cameraToVideo(localMediaStream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(localMediaStream);
}

function scheduleNextTick(){
  if (navigator.GetGamepads) {
    window.requestAnimationFrame(checkGamePadStatus);
  }    
}

function checkGamePadStatus()
{
    var gamepad = navigator.GetGamepads()[0];
    var h1 = document.querySelector('h1');
    var botoes = 0;    
    if(gamepad)
    {
        botoes = (gamepad.buttons[0] == 1 ? 1 : 0)  
                  | (gamepad.buttons[1] == 1 ? 2 : 0)
                  | (gamepad.buttons[2] == 1 ? 4 : 0)
                  | (gamepad.buttons[3] == 1 ? 8 : 0);

        cor_botoes = (gamepad.buttons[0] == 1 ? " VERDE" : "")  
                  + (gamepad.buttons[1] == 1 ? " VERMELHO" : "")
                  + (gamepad.buttons[2] == 1 ? " AZUL" : "")
                  + (gamepad.buttons[3] == 1 ? " LARANJA" : "");
        
        h1.innerText = 'Gamepad Botões: ' + cor_botoes.trim();
        if(buttonPressed)
            buttonPressed(botoes);
        
        var check = (botoes | botoes_old) ^ botoes;
        if(check != 0 && buttonUnpressed)
            buttonUnpressed(check);
    }       
    else 
        h1.innerText = 'No Gamepad!'
            
    botoes_old = botoes;
    scheduleNextTick();
}