  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#menu-bar-button");
  let container= document.querySelector(".large-container");
  let addCloseButton=document.querySelector("#ads-box-close")



 document.addEventListener('mouseover',hoverVideo,false);
 var vid=document.getElementsByClassName("video-box");
 [].forEach.call(vid,function(item){
  item.addEventListener('mouseover',hoverVideo,false);
  item.addEventListener('mouseout',hideVideo,false);
 });
 function hoverVideo(e){
  this.play();
 }
function hideVideo(e){
  this.pause();
}



  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    container.classList.toggle("small-comtainer");
    
  });
  
  function showOrHideDiv() {
    var v = document.getElementById("ads-box");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
 }

 