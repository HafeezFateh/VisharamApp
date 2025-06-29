const showNav = document.getElementById("responsive-header");
const color = document.getElementById("colorba");
function handleColor(){
  if (color.classList.contains("bg-gradient-to-br")) {
    color.classList.remove("bg-gradient-to-br");
    color.classList.add("bg-gray-950");
  } else {
    color.classList.remove("bg-gray-950");
    color.classList.add("bg-gradient-to-br");
  }
}


function handleClick(){
    showNav.classList.toggle("hidden");
   
}