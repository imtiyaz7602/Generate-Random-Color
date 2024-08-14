let btn=document.querySelector("button");
btn.addEventListener("click",function(){
//    getRandom();
   btn.innerText=`rgb(${getRandom()})`;
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
