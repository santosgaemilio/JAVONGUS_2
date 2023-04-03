//TODO Este código se encarga de cambiar el color de una camisa en una tienda en línea cuando el usuario hace clic 
//en uno de los botones de color disponibles. A continuación, explicaré línea por línea su funcionamiento: 

//* Selecciona todos los botones de color disponibles en la página y los almacena en la constante COLOR_BTNS.
//Selecciona la imagen principal de la camisa (la que se muestra en grande en la página) y la almacena en la constante MAIN_IMG.
//Selecciona el contenedor que contiene las imágenes pequeñas de la camisa (las que se muestran debajo de la imagen principal) y lo almacena en la constante SMALL_IMGS_CONTAINER.

const COLOR_BTNS = document.querySelectorAll('.color');
const MAIN_IMG = document.querySelector('.container.sproduct img');
const SMALL_IMGS_CONTAINER = document.querySelector('.small-img-group');

//*Agrega un event listener a cada botón de color en la página usando el método forEach de JavaScript.
//El event listener espera a que se haga clic en uno de los botones de color.
//Almacenamos la clase del botón de color en la variable colorNameClass.
//Comprueba si el botón de color en el que se hizo clic no tiene la clase "active-color" (es decir, si no se ha seleccionado previamente).
//Si el botón de color no ha sido seleccionado previamente, extraemos el nombre del color de la clase del botón de color y lo almacenamos en la variable colorName.
//Llamamos a la función resetActiveBtns() para desactivar cualquier botón de color activo previamente.
//Agregamos la clase "active-color" al botón de color en el que se hizo clic para indicar que está activo.
//Llamamos a la función setNewColor() y le pasamos el nombre del color seleccionado.

COLOR_BTNS.forEach(color => {
  color.addEventListener('click', () => {
    let colorNameClass = color.className;
    if(!color.classList.contains('active-color')){
      let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
      resetActiveBtns();
      color.classList.add('active-color');
      setNewColor(colorName);
    }
  });
});

// resetting all color btns
function resetActiveBtns(){
  COLOR_BTNS.forEach(color => {
    color.classList.remove('active-color');
  });
}

// set new color on the banner right and small images
function setNewColor(color){
  MAIN_IMG.src = `../img/camisa4c/1_${color}.png`;
  for(let i = 0; i < 4; i++) {
    SMALL_IMGS_CONTAINER.children[i].children[0].src = `../img/camisa4c/${i+1}_${color}.png`;
  }
}

// Tabla de tallas
function toggleTable() {
  var tabla = document.getElementById("tabla-tallas");
  var boton = document.querySelector(".tallas-toggle i:last-child");
  if (tabla.style.display === "none") {
    tabla.style.display = "table";
    boton.classList.remove("fa-plus");
    boton.classList.add("fa-minus");
  } else {
    tabla.style.display = "none";
    boton.classList.remove("fa-minus");
    boton.classList.add("fa-plus");
  }
}




