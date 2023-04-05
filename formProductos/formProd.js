let submitE=document.getElementById('subEstyle')
let submitP=document.getElementById('subP')
submitP.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log("dasd")
})
let dataEstyle={}
const getDataE=()=>{
    let imgF=document.getElementById('img1').value
    imgF="../dataBase/"+imgF.slice(12)
    dataEstyle.imagen_front=imgF
    let imgB=document.getElementById('img2').value
    imgB="../dataBase/"+imgB.slice(12)
    dataEstyle.imagen_back=imgB
    let imgR=document.getElementById('img3').value
    imgR="../dataBase/"+imgR.slice(12)
    dataEstyle.imagen_right=imgR
    let imgL=document.getElementById('img4').value
    imgL="../dataBase/"+imgL.slice(12)
    dataEstyle.imagen_left=imgL
    dataEstyle.hexa=document.getElementById("hexa").value
    console.log(dataEstyle)
}
let dataProd={}
const getDataP=()=>{
    dataProd.cantidad=Number(document.getElementById("cantidad").value)
    dataProd.descripcion=document.getElementById('descrp').value
    dataProd.marca_id=Number(document.getElementById('brand').value)
    dataProd.nombre=document.getElementById('name').value
    dataProd.precio=Number(document.getElementById("price").value)
    dataProd.target=Number(document.getElementById("target").value)
    dataProd.tipo=document.getElementById("type").value
}


const upload=(data,url)=>{
fetch(url, { //URL del servicio a donde se hara el POST
    method: 'POST', // or 'PUT' 
    headers: { // se agrega el header
      'Content-Type': 'application/json', //tipo de contenido
    },
    body: JSON.stringify(data), //se agrega el cuerpo del POST
  })
  .then(response => response.json()) //se obtiene la respuesta del servidor
  .then(data => { //se obtiene el json
    console.log('Success:', data); //se imprime el json
  })
  .catch((error) => { //si hay un error
    console.error('Error:', error); //se imprime el error
  });
}
submitP.addEventListener("click",getDataP)
submitP.addEventListener('click', e=>{
    upload(dataProd,"https://javongus-back-production.up.railway.app/html/producto/")
})
submitE.addEventListener("click",getDataE)
submitE.addEventListener('click', e=>{
    e.preventDefault()
    upload(dataEstyle, "https://javongus-back-production.up.railway.app/html/estilo/")
    let id;
    setTimeout(() => {
           fetch('https://javongus-back-production.up.railway.app/html/estilo/last')
    .then(response => response.json())
    .then(data => {
    id = data.id;
    });
    }, 500);
    setTimeout(() => {
        let dato={
            'cantidad':1,
            'estiloId':id
        }
        fetch(`https://javongus-back-production.up.railway.app/html/producto/${(document.getElementById("idProd").value)}?cantidad=0&estiloId=${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
    }, 1000);
})


const cleanFile=()=>{
  document.getElementById('img1').value=''
  document.getElementById('img2').value=''
  document.getElementById('img3').value=''
  document.getElementById('img4').value=''
}
window.addEventListener('load', cleanFile)