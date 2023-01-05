
const watchButton=document.querySelector(".btn");

const closeicon=document.querySelector(".close-icon");

const trailer=document.querySelector(".trailer-container");
const video=document.querySelector("video");

watchButton.addEventListener("click",()=>{
    trailer.classList.remove("active");
});

closeicon.addEventListener("click",()=>{
    trailer.classList.add("active");
    video.pause();
    video.currentTime=0;
})





