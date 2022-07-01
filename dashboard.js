var songs=[
    {url:"img/1.jpg",name:"Bollywood Butter"},
    {url:"img/2.jpg",name:"Punjabi 101"},
    {url:"img/3.jpg",name:"Kollywood Cream"},
    {url:"img/4.jpg",name:"Indie India"},
    {url:"img/5.jpg",name:"Tollywood Pearls"},
    {url:"img/6.jpg",name:"India Top 50"},
    {url:"img/7.jpg",name:"Sleep"},
    {url:"img/8.jpg",name:"New Music Hindi"},
    {url:"img/9.jpg",name:"Dinner"}
]


var input = document.getElementById("searchbar");


input.addEventListener("keypress", function() {
  
  // var myDiv = document.getElementsByClassName("songItemContainer");
  // myDiv.innerHTML = "";

  var arr=[];
  var inputValue = document.getElementById("searchbar").value;
  arr = songs.filter(function(eles){
    return eles.name.includes(inputValue);
  })
  console.log(arr);

display(arr);
})

function display(arr){
  document.querySelector(".songItemContainer").innerHTML="";
  for(var i=0;i<arr.length;i++){
    var anchor=document.createElement("a");
    anchor.setAttribute("href","play.html");
    var divi=document.createElement("div");
    var im=document.createElement("img");
    im.setAttribute("src",arr[i].url);
    var name=document.createElement("p");
    name.innerText=arr[i].name;
     anchor.append(divi);
    
    divi.append(im,name);
    
    document.querySelector(".songItemContainer").append(anchor);
  }
}
