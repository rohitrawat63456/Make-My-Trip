let icon=document.querySelector("#double-side-arrows-icon");
let item2=document.querySelector(".to");
let item1=document.querySelector(".from");
icon.addEventListener("click",()=>{
let html1=item1.innerHTML;
let html2=item2.innerHTML;
item1.innerHTML=html2;
item2.innerHTML=html1;
})