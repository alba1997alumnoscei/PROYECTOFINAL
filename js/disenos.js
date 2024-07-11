//------------------------------------------------------
// 1. Declaramos variables y constantes
//------------------------------------------------------
//slider
const sliderImages = document.querySelector(".slider-images");
const listaImages = document.querySelectorAll(".slider-images img");

//Botones
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");


//Contador
const spanActual = document.getElementById("txtActual");
const spanTotal = document.getElementById("txtTotal"); 

let imgIndex = 0; //la primera foto que va a tomar va a ser la 0
const totalImages = listaImages.length; //total de imagenes, y la vamos a tomar de la lista de imagenes con el lenght 


//EventListener

btnNext.addEventListener("click", nextImagen); //2 parametros: click + funcion
btnPrev.addEventListener("click", prevImagen); //2 parametros: click + funcion

//------------------------------------------------------
// 2. Funciones
//------------------------------------------------------

function nextImagen(){
    imgIndex++; //cada vez que hago nextImage el indice se incrementa en 1
    if(imgIndex >= totalImages){//si el indice es mayor o igual al total de imagenes
        imgIndex=0; //el indice se queda a 0
    }
    actualizarSlider();//----------------------------------------------------------------
    actualizarContador(); //funcion de actualizar contador 
}

function prevImagen(){
    imgIndex--; //cada vez que hago prevImage el indice se decrementa en 1
    if(imgIndex < 0){//si el indice es menor a 0
        imgIndex = totalImages; //el indice vale totalImages
    }
    actualizarSlider();//----------------------------------------------------------------
    actualizarContador(); //funcion de actualizar contador 
}

function actualizarSlider(){// como el minwidth es 400px 
    const width= 400; //el ancho de mi slider 
    sliderImages.style.transform = `translateX(${-width * imgIndex})`//aplico CSS para mover en X cierta cantidad de px, usando esa variable. 
}

function actualizarContador(){ //funcion para que imprima los valores
    spanActual.textContent = imgIndex +1;
    
}

//------------------------------------------------------
// 3. Ejecutamos codigo 
//------------------------------------------------------
actualizarContador();
spanTotal.textContent = totalImages;


//------------------------------------------------------
// 
//------------------------------------------------------