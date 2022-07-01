
 var audio = new Audio("songs/1.mp3")
 var count=0;
 var songItems = Array.from(document.getElementsByClassName("songimg"))
 var songname = Array.from(document.getElementsByClassName("songtext"))
 let songs = [
     { name:"legion",filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
     { name:"let me love you",filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
     { name:"Beautiful mistake" ,filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
     { name: "Ritmo",filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
     { name:"Worth it",filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
     { name:"Heat wave",filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
     { name:"illegal weapon",filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
     { name:"Misery",filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
     { name:"I am in love",filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
     { name:"flex:all in my head",filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
 ]
 
 var songIndex = 0;
  
   Array.from(document.getElementsByClassName('playbutton')).forEach((element)=>{
     //console.log(element.id)
     var songIndex = 0;
     element.addEventListener('click', (e)=>{ 
        
         songIndex = +(element.id);
        
         audio.src = `songs/${songIndex}.mp3`;
         
        if(count===0){
        
         audio.play();
         count=1
        }
        else{
        
      audio.pause();
      count=0
        }
   
     })
 })
 
 
 songItems.forEach((element, i)=>{ 
     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
     //element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
 })
 
 songname.forEach((element, i)=>{ 
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
     element.getElementsByTagName("h1").innerText = songs[i].name; 
 })