let btn=document.querySelector("button");
let h2=document.querySelector("h2");
btn.addEventListener("click",function(){
//    getRandom();
   h2.innerText=`The new random color is with rgb value : rgb(${getRandom()})`;
   let x=getRandom();
   let box=document.querySelector(".box");
   box.style.background=`rgb(${x})`;

});

 function getRandom(){
    let red=Math.floor(Math.random()*255+1);
    let green=Math.floor(Math.random()*255+1);
    let blue=Math.floor(Math.random()*255+1);
    let color= `${red},${green},${blue}`;
    return color;
 }
