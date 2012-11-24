navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;
window.addEventListener('load', load);
    
function load()
{   
    if(!navigator.getUserMedia)
        alert('no web-rtc');    
    else
    {
        var stream = navigator.getUserMedia({video:true, audio: true}, cameraToVideo, error);
    }
}

function error(error)
{
    console.log(error);
    alert('erro');
}

function cameraToVideo(localMediaStream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(localMediaStream);
   video.onloadedmetadata = function(e) {
      video.play();
   };
}