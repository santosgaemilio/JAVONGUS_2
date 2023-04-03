
// Elementos del html checar los id's en index.html}

let logo = document.querySelector("#logo")
let page = document.querySelector("#page")
let navi = document.querySelectorAll(".navi")
let navi_i = document.querySelectorAll(".navi_i")
let img_pg = document.querySelector("#img_pg")
let img_urb = document.querySelector("#ub")
let img_jav = document.querySelector("#jc")
let img_js = document.querySelector("#js")
let d = document.querySelector("#dice")
let navy = document.querySelector("#navy")
let btnColor = document.querySelectorAll(".btnColor")
let login  = document.querySelector("#login")
let btMore = document.querySelector("#ubBT")


// Función que te da el width de la ventana del navegador
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

// pos te dice en que imagen te encuentras
let pos = 0
// Cambia el estilo de los elementos del html a los de urbanot
function urba(){
    pos = 0
    logo.style.color = "#FFFFFF";
    login.style.backgroundColor = "#FF4D48";
    page.style.backgroundColor =  "#FF4D48";
    navy.style.backgroundColor = "#FF4D48";
    btMore.style.color = "#FFFFFF";
    // loop para cambiar el color a todos los elementos de navi
    for (const element of navi) {
        element.style.color = "#FFFFFF"
    }
    // loop para cambiar el color a todos los elementos de navi_i
    for (const element of navi_i) {
        element.style.color = "#FFFFFF"
    }
    
}


// Cambia el estilo de los elementos del html a los de javucci
function javu(){
    pos = 1
    logo.style.color = "#006637";
    login.style.backgroundColor = "#FFFCF4";
    page.style.backgroundColor =  "#FFFCF4";
    navy.style.backgroundColor = "#FFFCF4";
    btMore.style.color = "#006637";
    
    for (const element of navi) {
        element.style.color = "#006637"
    }
    for (const element of navi_i) {
        element.style.color = "#006637"
    }
   
}


// Cambia el estilo de los elementos del html a los de jspenny
function jspenny(){
    pos = 2
    logo.style.color = "#FAB0AE";
    login.style.backgroundColor = "#BDEFFF";
    page.style.backgroundColor =  "#BDEFFF";
    navy.style.backgroundColor = "#BDEFFF";
    btMore.style.color = "#FAB0AE";
    
    for (const element of navi) {
        element.style.color = "#F5635F"
    }
    for (const element of navi_i) {
        element.style.color = "#FAB0AE"
    }
    
}



// JQuery stuff

// Agarra cada uno de los elementos del carousel de bootstrap
let ub = $(".carousel-item")[0]
let jc = $(".carousel-item")[1]
let js = $(".carousel-item")[2]

// Con JQuery le da una función a el scroll del mouse
$('.carousel').bind('mousewheel DOMMouseScroll', function(event){
    // Si el scroll es para arriba se hace todo esto
    if (event.originalEvent.wheelDelta /120 > 0 || event.originalEvent.detail /120 < 0) {
        // Hace que el carrusel vaya a previo
        $(this).carousel('prev')
        // Agarra la clase active del elemento que la tenga
        ub = $(".carousel-item")[0].attributes[0].value
        jc = $(".carousel-item")[1].attributes[0].value
        js = $(".carousel-item")[2].attributes[0].value
        // Cambia el estilo de los elementos html según el elemento del carousel donde estén
        if(ub.includes("active")){
            console.log("Es Jspenny");
            pos = 0
            jspenny()
        }else if(jc.includes("active")){
            console.log("Es Urban");
            pos = 1
            urba()
        }else if(js.includes("active")){
            console.log("Es Javucci");
            pos = 2
            javu()
        }    
    }
    // Si el scroll es para abajo
    else {
        $(this).carousel('next')
        ub = $(".carousel-item")[0].attributes[0].value
        jc = $(".carousel-item")[1].attributes[0].value
        js = $(".carousel-item")[2].attributes[0].value
        if(ub.includes("active")){
            console.log("Es Javucci");
            pos = 0
            javu()
        }else if(jc.includes("active")){
            console.log("Es Jspenny");
            pos = 1
            jspenny()
        }else if(js.includes("active")){
            console.log("Es Urban"); 
            pos = 2
            urba()
        }        
    }
});

// Esto es para tomar registro
console.log(pos);

// NO TE PERMITE HACER SCROLL A LA PÁGINA!!!! 
$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});

// Las imagenes de cada marca

let subs = document.querySelector("#subs")
let ht = document.querySelector("#ht")
let footer = document.querySelector("#foot")

// RESPONSIVE
// Esta función cambia de imagen si el ancho de la ventana es menos de 1300px
function media(){
    switch (pos) {
        case 0:
            if(getWidth()<1300){
                // Cambia tanto como la imagen, como la posición del botón de ver más, como la imagen del modular
                img_urb.src = "./index_TEST/imgs/urba6.png"
                btMore.style.left = "40%"
                ht.src = "./index_TEST/imgs/html3.png"
                footer.classList.remove("row")
                footer.classList.add("flex-row")
            }else{
                // Regresa todo a como está originalmente
                img_urb.src = "./index_TEST/imgs/urba4.png"
                btMore.style.left = "47%"
                ht.src = "./index_TEST/imgs/html2.png"
                footer.classList.remove("flex-row")
                footer.classList.add("row")
            }
            break;
        case 1:
            if(getWidth()<1300){
                img_jav.src = "./index_TEST/imgs/javucci4.png"
                btMore.style.left = "40%"
                ht.src = "./index_TEST/imgs/html3.png"
                footer.classList.remove("row")
                footer.classList.add("flex-row")
            }else{
                img_jav.src = "./index_TEST/imgs/javucci.png"
                btMore.style.left = "47%"
                ht.src = "./index_TEST/imgs/html2.png"
                footer.classList.remove("flex-row")
                footer.classList.add("row")
            }
            break;
        case 2:
            if(getWidth()<1300){
                img_js.src = "./index_TEST/imgs/jspenny2.png"
                btMore.style.left = "40%"
                ht.src = "./index_TEST/imgs/html3.png"
                footer.classList.remove("row")
                footer.classList.add("flex-row")
            }else{
                img_js.src = "./index_TEST/imgs/jspenny.png"
                btMore.style.left = "47%"
                ht.src = "./index_TEST/imgs/html2.png"
                footer.classList.remove("flex-row")
                footer.classList.add("row")
            }
            break;
        }
}

// Cambia el ancho de la barra de subscribir cuando la ventana mide menos de 451px
function mediaSbs(){
    if(getWidth()<451){
        subs.style.width = "340px"
    }else{
        subs.style.width = "450px"
    }
}

// Hace que estas dos funciones se repitan cada milisegundo para que parezca continua. Como son muy simples no hay problema pero si tuvieran loop tendría que ser menos frecuente
setInterval(media,1)
setInterval(mediaSbs, 1)

let email = document.querySelectorAll(".emaili")
let pass = document.querySelector("#password")
let sign = document.querySelector("#singin")
let mess = document.querySelector("#mess")
let mess2 = document.querySelector("#mess2")
let mess3 = document.querySelector("#mess3")
let subscribir = document.querySelector("#button-addon2")


let decimalP =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
let decimalE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function password(){
    if(pass.value.match(decimalP)){
        mess.innerHTML = ""
    }else{
        mess.innerHTML = "<span style = 'color: red;'>8-15 dígitos, una mayúscula, un número y un caracter especial</span>"
    }
    console.log(pass.value);
}

function ema(){
    if(email[0].value.match(decimalE)){
        mess2.innerHTML = ""
    }else{
        mess2.innerHTML = "<span style = 'color: red;'>Introduzca un email válido</span>"
    }
    console.log(pass.value);
}
function ema2(){
    if(email[1].value.match(decimalE)){
        mess3.innerHTML = ""
    }else{
        mess3.innerHTML = "<span style = 'color: red; font-size: 1rem'>Introduzca un email válido</span>"
    }
    console.log(pass.value);
}

sign.addEventListener("click", ema)
sign.addEventListener("click", password)
subscribir.addEventListener("click", ema2)

const agregarFiltro=(y)=>{
    
    localStorage.setItem("marca",y)
}


document.querySelector("#ub_A").addEventListener("click", ()=>{agregarFiltro("urbanot")})
document.querySelector("#jc_A").addEventListener("click", ()=>{agregarFiltro("javucci")})
document.querySelector("#js_A").addEventListener("click", ()=>{agregarFiltro("jspenny")})

document.querySelector("#ub_B").addEventListener("click", ()=>{agregarFiltro("urbanot")})
document.querySelector("#jc_B").addEventListener("click", ()=>{agregarFiltro("javucci")})
document.querySelector("#js_B").addEventListener("click", ()=>{agregarFiltro("jspenny")})







