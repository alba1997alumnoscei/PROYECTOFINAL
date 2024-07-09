//-----------------------------------------------------------------------------------------------------------------------------------------//
// 1. Declaro variables 
//-----------------------------------------------------------------------------------------------------------------------------------------//
const acordeon = document.querySelector(".acordeon");               
const headers = acordeon.querySelectorAll(".acordeon__item--titulo");                         
const acordeonItems = acordeon.querySelectorAll(".acordeon__item"); 

const personalizarBtn = acordeon.querySelectorAll(".personalizar"); 
const descuentoBtn = acordeon.querySelectorAll(".descuento"); 

//-----------------------------------------------------------------------------------------------------------------------------------------//
// 2. Funciones: 
//-----------------------------------------------------------------------------------------------------------------------------------------//

// FOREACH: en los headers 

headers.forEach(header => {
    //cuando yo hago click en el header (en los titulos)
    header.addEventListener("click", () => {
        //hago referencia a todos los items 
        const item = header.closest(".acordeon__item");


        //quitar "active"
        acordeonItems.forEach(elemento => {
            elemento.classList.remove("active");
        
        });

        //agregar "active"
        item.classList.add("active");

        
        if (item.classList.contains('active')) {
            const personalizarBtn = item.querySelector('.personalizar');
            personalizarBtn.style.display = 'block';

            const descuentoBtn = item.querySelector('.descuento');
            descuentoBtn.style.display = 'block';
        } else {
            personalizarBtn.style.display = 'none';
            descuentoBtn.style.display = 'none';
            
        }
    });



//EVENT LISTENER de mouseover y mouseout, con clase de sombreado.
    header.addEventListener("mouseover", () =>  header.classList.add("sombreado"));     
    header.addEventListener("mouseout", () => header.classList.remove("sombreado"));    

});

//-----------------------------------------------------------------------------------------------------------------------------------------//
// 3. Ejecutamos codigo
//-----------------------------------------------------------------------------------------------------------------------------------------//
acordeonItems[0].classList.add('active');
