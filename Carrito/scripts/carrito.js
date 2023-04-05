let datos;
fetch("https://javongus-back-production.up.railway.app/html/carrito/")
    .then(response => response.json())
    .then(data => {
    datos = data;
});

const write=()=>{
    for(item of datos){
        console.log(item.carritoProducto[0].producto.estilos[0].imagen_front)
        let container=document.createElement('div')
        container.className=('p-2 text-left border-2 articulos rounded-bottom-1 mb-1')
        container.innerHTML= `<div class="row">
        <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

            <a href="">
                <img src="/Catalogo${(item.carritoProducto[0].producto.estilos[0].imagen_front).slice(2)}" class="img-fluid imagenArticulo"
                    alt="Responsive image">
            </a>
        </div>

        <div class="p-3 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">

            <p class="textoArticulos">${item.carritoProducto[0].producto.nombre}</p>
            <p>Talla: M</p>

        </div>

        <div class="p-3 col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-end">

            <p>$${item.carritoProducto[0].producto.precio}</p>
        </div>

    </div>`
    let cont=document.getElementById('container')
        cont.append(container)
    }
}
window.addEventListener('load', e=>{
    setTimeout(() => {
        write()
    }, 300);
})