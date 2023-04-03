function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }



  //*************************************************FILTRO DE CATALOGO********************************************************************************/
  const agregarFiltro=(y)=>{
    
    localStorage.setItem("marca",y)
}

//Tuve que comentar esto de abajo para que sea responsivo el footer

// document.querySelector("#ub_A").addEventListener("click", ()=>{agregarFiltro("urbanot")})
// document.querySelector("#jc_A").addEventListener("click", ()=>{agregarFiltro("javucci")})
// document.querySelector("#js_A").addEventListener("click", ()=>{agregarFiltro("jspenny")})

// document.querySelector("#ub_B").addEventListener("click", ()=>{agregarFiltro("urbanot")})
// document.querySelector("#jc_B").addEventListener("click", ()=>{agregarFiltro("javucci")})
// document.querySelector("#js_B").addEventListener("click", ()=>{agregarFiltro("jspenny")})



  //******************************************************* */
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