var audio = document.getElementById("audio")
var playbtn =document.getElementById("#playpause")
var count = 0;
function play(){
    if(count===0){
        audio.play();
        count =1;
    }
    else{
        count = 0 ;
        audio.pause();
        
    }
}