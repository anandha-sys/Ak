window.addEventListener("load",()=>{

setTimeout(()=>{
document.querySelector(".loader").style.display="none";
},2000);

});

window.addEventListener("scroll",()=>{

let scroll=window.pageYOffset;

document.querySelector(".hero").style.backgroundPositionY=
scroll*0.5+"px";

});
