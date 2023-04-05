//Aqui se guardan los datos de la api en una variable
let jsonData;
fetch('https://javongus-back-production.up.railway.app/html/producto/')
    .then(response => response.json())
    .then(data => {
    jsonData = data;
});


//Funcion para sacar la marca en funcion del numero que tiene en la base de datos
const getBrand=(brand)=>{
    switch (brand) {
        case 1:
            return 'UrbaNot'
            break;
        case 2:
            return 'Javucci'
            break
        case 3:
            return "JSPenny"
            break
        default:
            break;
    }
}
//Funcion para sacar el gender dependiendo de lo que diga la base de datos
const getGender=item=>{
    switch (item) {
        case 1:
            return 'hombre'
            break;
        case 2:
            return 'mujer'
            break
        default:
            break;
    }
}
//Funcion para la creacion de elementos, el cual recibe dos parametros, uno para el tipo 
//de elemento que queremos crear, y otro para la clase que se le dara 
 const buildElement=(element, clas)=>{
    let elemento=document.createElement(element)
    elemento.classList.add(clas)
    return elemento
}

//Funcion para la creacion de las tarjetas de productos
let container=document.getElementById('section')
const buildCard=item=>{
            //Creacion de los elementos de cada producto
            let cardProduct=buildElement('div',"cardProduct")
            let imgF=buildElement("img", ('card',"front"))
            let imgB=buildElement("img",('card', "back"))
            let divIm=buildElement('div','divImg')
            let title=buildElement('a')
            let divTitle=buildElement('div')
            let description=buildElement('div',"description")
            let price=buildElement('p')
            let brand=buildElement('p')
            imgB.draggable=false
            imgF.draggable=false
            //Adicion de atributos y texto a los elementos
            price.innerHTML=`$${item.precio}`
            brand.innerHTML=`Marca ${getBrand(item.marca_id)}`
            title.innerHTML=item.nombre
            imgF.src=item.estilos[0].imagen_front
            imgB.src=item.estilos[0].imagen_back
            divIm.id=item.id
            let id=item.id
            title.setAttribute("value", id)
            title.addEventListener("click", e=>{
                e.preventDefault()
                dirigir(e)
            })
            title.classList.add('dir')
            title.href="../../articuloIndividual/html/articuloIndividual.html"
            //Adicion de los elementos al DOM
            description.append(price, brand)
            divTitle.append(title)
            divIm.append(imgF)
            divIm.append(imgB)
            cardProduct.append(divIm)
            cardProduct.append(divTitle)
            cardProduct.append(description)
            container.append(cardProduct)
            //Condicion para agregar las opciones de cambio de color
            if(Object.keys(item.estilos).length>1){
                let divColors=document.createElement('div')
                //Loop para agregar todos los colores disponibles
                for(colores in item.estilos){
                    drawCircle(item.estilos[colores],divColors,id)
                }
                divTitle.append(divColors)
            }
}



const agregarFiltro=(event)=>{
    localStorage.setItem("marca",(event.target.getAttribute('value')))
    cleanFilters()
    del()
    postProducts()
}


let drops=document.querySelectorAll('.dropbrand')
for(item of drops){
    item.addEventListener('click', agregarFiltro)
}

//Function que guarda en el local storage el id
const dirigir=(e)=>{
    id=e.target.getAttribute("value")
    localStorage.setItem("endpoint",id)
    location.href=("/articuloIndividual/html/articuloIndividual.html")
}



const filtrar=()=>{
    del()
    writeWithFilters()
}

//Funcion para iterar sobre el archivo JSON y llenar el DOM acorde a la base de datos
const postProducts=()=>{
    //setTimeout para esperar el resultado de fetc fetch
    
        if(localStorage.getItem('marca')!=null){
            let check=document.getElementById(localStorage.getItem('marca'))
            if(check!=null){check.checked=true}
        }
        //Loop para iterar en cada uno de los elementos disponibles
        writeWithFilters()
        localStorage.removeItem('marca')
 
}

let x=(document.querySelector(".dropbrand").getAttribute('val'))
//Funcion que se agrega a los circulos para cambiar de color
const changeColor=(nodo,srcFront,srcBack)=>{
    let containImg=document.getElementById(nodo)
    containImg.childNodes[0].src=srcFront
    containImg.childNodes[1].src=srcBack
    //Loop para eliminar el color verde de los circulos no seleccionados
    for (let i=0;i<event.target.parentNode.childNodes.length;i++){
        event.target.parentNode.childNodes[i].classList.remove("selected")
    }
    event.target.classList.add('selected')
}

//Function para crear los circulos para la eleccion del color
const drawCircle=(iitem, divcol,id)=>{
    let circle=document.createElement('div')
    circle.classList.add('circle')
    let back=iitem.imagen_back
    let front=iitem.imagen_front
    circle.style.background=(`${iitem.hexa}`)
    console.log(iitem.hexa)
    circle.addEventListener('click', ()=>{changeColor(`${id}`, front, back)})
    divcol.append(circle)
    circle.parentNode.childNodes[0].classList.add('selected')
}


//Funcion que limpia todos los filtros
const cleanFilters=()=>{
    let checks=document.querySelectorAll('.check')
    for(let i=0;i<checks.length;i++){
        checks[i].checked=false
    }
    document.querySelectorAll('.rangePrice')[0].value=100
    document.querySelectorAll('.rangePrice')[1].value=1500
    valueMax.innerHTML=`$${rangeMax.value}`
    valueMin.innerHTML=`$${rangeMin.value}`
}

//Funcion para imprimir en el DOM el valor de los input range
let rangeMin=document.querySelectorAll('.rangePrice')[0]
let rangeMax=document.querySelectorAll('.rangePrice')[1]
let valueMin=document.querySelectorAll('.price')[0]
let valueMax=document.querySelectorAll('.price')[1]
const writePrice=(node)=>{
    let valMin=Number(rangeMin.value)
    let valMax=Number(rangeMax.value)
    //Este if evita que el precio menor sea mas alto que el precio mayor
    //En caso de que el rango del precio menor sea mas grande que el precio mayor, intercambia los valores
    if(valMin>valMax){
        rangeMin.value=valMax
        rangeMax.value=valMin
        valueMax.innerHTML=`$${rangeMax.value}`
        valueMin.innerHTML=`$${rangeMin.value}`
    }else{
    node.innerHTML=`$${event.target.value}`
    }}
rangeMin.addEventListener("change",()=>{writePrice(valueMin)})
rangeMax.addEventListener("change",()=>{writePrice(valueMax)})




//Funcion que permite limpiar el Dom de los articulos
const del=()=>{
    let cards=document.querySelectorAll('.cardProduct')
    for(let i=0;i<cards.length;i++){
        cards[i].remove()
    }
}


//Esta fuuncion permite insertar en el DOM los productos que cumplen con la condicion de los filtros
const writeWithFilters=()=>{
    for(item of jsonData){
        let marca =getBrand(item.marca_id)
            if(filter('.brand',marca)&&filter('.gender',getGender(item.target))&&filter('.type', item.tipo)
            &&(item.precio>=Number(rangeMin.value)&&item.precio<=Number(rangeMax.value))){
            
            buildCard(item)
        }
    }
    //Esta condicion permite agregar un mensajen en caso de no haber productos con los filtros seleccionados 
    if(document.querySelectorAll(".cardProduct").length==0&&document.querySelector('.mensajeError')==null){
        let mensaje=buildElement('div')
        mensaje.innerHTML='No se encontraron productos con esas especificaciones'
        mensaje.classList.add("mensajeError")
        container.append(mensaje)
    }else{if(document.querySelector('.mensajeError')!=null&&document.querySelectorAll(".cardProduct").length!=0){document.querySelector('.mensajeError').remove()}}
}

//Funcion especial para el boton de limpiar filtros
const limpiarFiltros=()=>{
    cleanFilters()
    del()
    writeWithFilters()
}
let botonClean=document.getElementById('clean')
botonClean.addEventListener('click', limpiarFiltros)



//Esta funcion permite verificar uno a uno en que categoria estan incluidos los productos
//De esta manera, si el filtro esta seleccinado con dos categorias
//Se tendran que cumplir ambas condiciones para que el producto se muestre
const filter=(clas,target)=>{
    let selected=[]
    let checks=document.querySelectorAll(clas)
    //console.clear()
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked){
            selected.push(checks[i].value)
        }
    }
    if(selected.some(catego=>target.includes(catego))){return(true)}
    else if(selected.length==0){return(true)}
    else{return(false)}
}










//Aqui se le agregan a todos los inputs le funcion de filtrado, permite agregar tantos check box como sea neccesario
let check=document.querySelectorAll('.check')
for(let i=0;i<check.length;i++){
   // check[i].addEventListener('change', filter)
    check[i].addEventListener('change', filtrar)
}
rangeMin.addEventListener("change",filtrar)
rangeMax.addEventListener("change",filtrar)


//Aqui se agregan funciones a la ventana para que al recargar, se limpien los filtros 
//y se carguen de nuevo todos los articulos
window.addEventListener('load',cleanFilters)
window.addEventListener('load',()=>{
    setTimeout(() => {
        postProducts()
    }, 700);
})


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
   
}

function ema(){
    if(email[0].value.match(decimalE)){
        mess2.innerHTML = ""
    }else{
        mess2.innerHTML = "<span style = 'color: red;'>Introduzca un email válido</span>"
    }
  
}
function ema2(){
    if(email[1].value.match(decimalE)){
        mess3.innerHTML = ""
    }else{
        mess3.innerHTML = "<span style = 'color: red; font-size: 1rem'>Introduzca un email válido</span>"
    }
   
}

sign.addEventListener("click", ema)
sign.addEventListener("click", password)
subscribir.addEventListener("click", ema2)


let catCom=document.querySelector('.dropbrand1')
catCom.addEventListener('click',limpiarFiltros)


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
