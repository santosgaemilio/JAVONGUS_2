const agregarFiltro=(y)=>{
    
    localStorage.setItem("marca",y)
}


// document.querySelector("#ub_A").addEventListener("click", ()=>{agregarFiltro("urbanot")})
// document.querySelector("#jc_A").addEventListener("click", ()=>{agregarFiltro("javucci")})
// document.querySelector("#js_A").addEventListener("click", ()=>{agregarFiltro("jspenny")})

// document.querySelector("#ub_B").addEventListener("click", ()=>{agregarFiltro("urbanot")})
// document.querySelector("#jc_B").addEventListener("click", ()=>{agregarFiltro("javucci")})
// document.querySelector("#js_B").addEventListener("click", ()=>{agregarFiltro("jspenny")})


function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }




function media(){
    if(getWidth()<1300){
        // Cambia tanto como la imagen, como la posición del botón de ver más, como la imagen del modular
      
        footer.classList.remove("row")
        footer.classList.add("flex-row")
    }else{
        // Regresa todo a como está originalmente
        footer.classList.remove("flex-row")
        footer.classList.add("row")
    }
}
setInterval(media,1)

let footer = document.querySelector("#foot")