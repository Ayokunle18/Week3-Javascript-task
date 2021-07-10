let number= document.querySelector("#counter-number");
let decrease= document.querySelector(".decrease-count");
let increase= document.querySelector(".increase-count");
let num=0 ;
 
 increase.addEventListener("click" , ()=>{
     if(num<50 && num>=0){
         num++; }
    number.innerHTML= num; } )

 decrease.addEventListener("click" , ()=>{
    if(num>0 && num<=50){
        num--; }
number.innerHTML= num; 
})



