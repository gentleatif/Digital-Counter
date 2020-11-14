// set initial Count

let count = 0;

// select value and buttons
const value= document.getElementById('value');
const btns =document.querySelectorAll(".btn");
btns.forEach(function(btn){
btn.addEventListener("click",function(e){
  var audio = new Audio('tone.mp3');
audio.play();
 const cTarget =e.currentTarget.classList;
if(cTarget.contains('decrease')){
count--;
}
else if(cTarget.contains('increase')){
count++;
}
else
{count=0;}
value.textContent=count;

if(count>0)
{
  value.style.color="green";
}
if(count<0){
  value.style.color="red";
}
if(count===0){
  value.style.color="black";
}

}
);
});
