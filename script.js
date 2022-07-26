const sideBar = document.querySelector(".nav-toggle")
const link = document.querySelector(".list")
sideBar.addEventListener("click", function(){
  console.log(link.classList)
  if(link.classList.contains("show-link")){
    link.classList.remove("show-link")
  }else{
    link.classList.add("show-link")
  }
})