let endpoint;
let jsonData
const load=()=>{
  endpoint=localStorage.getItem('endpoint')
}
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
load()
let url=`https://javongus-back-production.up.railway.app/html/producto/${endpoint}`

fetch(url)
    .then(response => response.json())
    .then(data => {
    jsonData = data;
});
const buildElement=(element, clas)=>{
  let elemento=document.createElement(element)
  elemento.classList.add(clas)
  return elemento
}
let circleCont=document.getElementById("colorCont")
const writeProd=()=>{
  document.getElementById('MainImg').src="../../Catalogo"+(jsonData.estilos[0].imagen_front).slice(2)
  document.getElementById("img1").src="../..//Catalogo"+(jsonData.estilos[0].imagen_front).slice(2)
  document.getElementById("img2").src="../..//Catalogo"+(jsonData.estilos[0].imagen_back).slice(2)
  if(jsonData.estilos[0].imagen_left!=null){document.getElementById("img3").src="../../Catalogo"+(jsonData.estilos[0].imagen_left).slice(2)}
  if(jsonData.estilos[0].imagen_right!=null){document.getElementById("img4").src="../../Catalogo"+(jsonData.estilos[0].imagen_right).slice(2)}
  document.getElementById('marca').innerHTML=(getBrand(jsonData.marca_id))
  document.getElementById('title').innerHTML=(jsonData.nombre)
  document.getElementById('price').innerHTML=("$"+jsonData.precio)
  if(jsonData.estilos.length>1){
    for(items of jsonData.estilos){
      let circle=document.createElement('div')
      circle.style.background=(`${items.hexa}`)
      circle.style.border='solid'
      console.log(jsonData.id)
      circle.classList.add('color')
      let obj=items
      circle.addEventListener('click',e=>{changeColor(obj)})
      circleCont.append(circle)
    }
  }else{document.getElementById('circleCont').remove}
}
const changeColor=(item)=>{
  document.getElementById('MainImg').src="../../Catalogo"+(item.imagen_front).slice(2)
  document.getElementById("img1").src="../../Catalogo"+(item.imagen_front).slice(2)
  document.getElementById("img2").src="../../Catalogo"+(item.imagen_back).slice(2)
  if(item.imagen_left!=null){document.getElementById("img3").src="../../Catalogo"+(item.imagen_left).slice(2)}
  if(item.imagen_right!=null){document.getElementById("img4").src="../../Catalogo"+(item.imagen_right).slice(2)}
}

window.addEventListener('load',load)
window.addEventListener('load',e=>{
  setTimeout(() => {
    writeProd()
  }, 800);
})
let id
const getCarrito=()=>{
  fetch("https://javongus-back-production.up.railway.app/html/carrito/")
    .then(response => response.json())
    .then(data => {
    if(data.length>0){
      id=(data[0].id)
    }
});
}

const crearCarrito=()=>{
  fetch("https://javongus-back-production.up.railway.app/html/carrito/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  })
}
const adicion=()=>{
  getCarrito()
  console.log(id)
  setTimeout(() => {
  fetch(`https://javongus-back-production.up.railway.app/html/carrito/add/${id}?cantidad=1&productoId=${jsonData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
    
  })
  alert("Producto agregado al carrito")
  }, 1000);
}
document.getElementById("aggCar").addEventListener("click", (e)=>{
  e.preventDefault()
  adicion()
})

