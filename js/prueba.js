document.addEventListener('DOMContentLoaded', function () {

    const bodyId = document.body.id;
    console.log("body id es:", bodyId)

    switch (bodyId) {

        case "home":
            console.log("Estoy en Home");
            iniHome();
            break;

        case "ropa":
            console.log("Estoy en Ropa y Diseños");
            iniRopa();
            break;

        case "disenos":
            console.log("Estoy en Diseños");
            iniDisenos();
            break;

        case "contacto":
            console.log("Estoy en Contacto");
            iniContacto();
            break;

        case "pago":
            console.log("Estoy en Pago");
            iniPago();
            break;

    }


    //------------------------------------------------------------------------------------------
    //------------------------------------ JS HOME ---------------------------------------------
    //------------------------------------------------------------------------------------------

    function iniHome() {
        const acordeon = document.querySelector(".acordeon");
        const headers = acordeon.querySelectorAll(".acordeon__item--titulo");
        const acordeonItems = acordeon.querySelectorAll(".acordeon__item");

        const btnPersonalizar = document.getElementById("botonPersonalizar");
        const btnDescuento = document.getElementById("botonDescuento");


        // FOREACH: en los headers 

        headers.forEach(header => {
            //cuando yo hago click en el header (en los titulos)
            header.addEventListener("click", () => {
                //el más cercano
                const item = header.closest(".acordeon__item");



                //quitar "active"
                acordeonItems.forEach(elemento => {
                    elemento.classList.remove("active");

                })


                //agregar "active"
                item.classList.add("active");
            });

        });


        acordeonItems[0].classList.add('active');


    }

    //------------------------------------------------------------------------------------------
    //------------------------------------ JS ROPA ---------------------------------------------
    //------------------------------------------------------------------------------------------

    function iniRopa() {
        const container = document.getElementById('products-container');
        const inputTitulo = document.querySelector("#inputTitulo"); //nombre de la prenda a buscar


        //Botones 
        const btnTodos = document.querySelector("#btnTodos")  
        const btnPant = document.querySelector("#btnPantalon")
        const btnCha = document.querySelector("#btnChaqueta")
        const btnCami = document.querySelector("#btnCamiseta")
        let btnCesta = "";
        //Array de los productos: nombre, referencia, precio, imagen
        const products = [
            {
                nombre: 'Camiseta Roja',
                referencia: 'REF123',
                precio: 19.99,
                imagen: 'https://via.placeholder.com/200x200?text=Camiseta+Roja'
            },
            {
                nombre: 'Pantalones Vaqueros',
                referencia: 'REF456',
                precio: 39.99,
                imagen: 'https://via.placeholder.com/200x200?text=Pantalones+Vaqueros'
            },
            {
                nombre: 'Chaqueta de Cuero',
                referencia: 'REF789',
                precio: 59.99,
                imagen: 'https://via.placeholder.com/200x200?text=Chaqueta+de+Cuero'
            },
            {
                nombre: 'Camiseta Roja',
                referencia: 'REF123',
                precio: 19.99,
                imagen: 'https://via.placeholder.com/200x200?text=Camiseta+Roja'
            },
            {
                nombre: 'Pantalones Vaqueros',
                referencia: 'REF456',
                precio: 39.99,
                imagen: 'https://via.placeholder.com/200x200?text=Pantalones+Vaqueros'
            },
            {
                nombre: 'Chaqueta de Cuero',
                referencia: 'REF789',
                precio: 59.99,
                imagen: 'https://via.placeholder.com/200x200?text=Chaqueta+de+Cuero'
            },

        ];


        //Funcion para mostrar todos los productos
        function listaProductos(products) {
            container.innerHTML = ''; //vacia HTML para mejor actualización 
            products.forEach(product => { //con un forEach que recorre todas las propiedades del array. 
                const productItem = document.createElement('div'); //desde el JS creamos un div en el HTML 
                productItem.className = 'productItem';//creamos una clase para el div que acabamos de crear

                //lo que se va escribir dentro del <div> productItem creado y dentro ponemos las variables del array.  
                productItem.innerHTML = `
                <img src="${product.imagen}" alt="${product.nombre}">
                <h2>${product.nombre}</h2>
                <p>Referencia: ${product.referencia}</p>
                <p class="precio">$${product.precio}</p>
                <p><button class="btn" id="btnCesta">Cesta </button></p>
            `;
                container.appendChild(productItem);//añade dentro del container al final 

            });
            btnCesta = document.getElementById('btnCesta');

           
        }

        listaProductos(products); // Se ejecuta la función listaProductos para mostrar el array


        // Evento para filtrar por título al escribir en el input
        inputTitulo.addEventListener("input", () => { //cuando escribimos texto en el input 
            const texto = inputTitulo.value.toLowerCase();//obtiene el valor que escribimos y se convierte a minúsculas para que filtre mejor 

            const productosFiltrados = products.filter(product => //del array "products" filtramos por nombre 
                product.nombre.toLowerCase().includes(texto) //que incluya el value que hemos escrito en el input
            );
            listaProductos(productosFiltrados); // función de escribir 
        });

        // Filtrar clicando en los botones 
        btnTodos.addEventListener("click", () => {
            listaProductos(products);

        });

        btnPant.addEventListener("click", () => filtrarTipo("pantalones"));
        btnCha.addEventListener("click", () => filtrarTipo("chaqueta"));
        btnCami.addEventListener("click", () => filtrarTipo("camiseta"));

        function filtrarTipo(tipo) {
            const productosFiltrados = products.filter(product =>
                product.nombre.toLowerCase().includes(tipo)
            );
            listaProductos(productosFiltrados);
        }

        btnCesta.addEventListener("click", (Element) => {

            //cogemos el elemento Padre para saber cual es el producto, si camiseta, pantalón, chaqueta
            let oElementoPadre = Element.target.parentNode.parentNode;
            console.log(Element);

        });


    }
});


//------------------------------------------------------------------------------------------
//------------------------------------ JS DISEÑOS-------------------------------------------
//------------------------------------------------------------------------------------------

function iniDisenos() {
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

    function nextImagen() {
        imgIndex++; //cada vez que hago nextImage el indice se incrementa en 1
        if (imgIndex >= totalImages) {//si el indice es mayor o igual al total de imagenes
            imgIndex = 0; //el indice se queda a 0
        }
        actualizarSlider();
        actualizarContador(); //funcion de actualizar contador 
    }

    function prevImagen() {
        imgIndex--; //cada vez que hago prevImage el indice se decrementa en 1
        if (imgIndex < 0) {//si el indice es menor a 0
            imgIndex = totalImages; //el indice vale totalImages
        }
        actualizarSlider();
        actualizarContador(); //funcion de actualizar contador 
    }

    function actualizarSlider() {// como el minwidth es 400px 
        const width = 400; //el ancho de mi slider 
        sliderImages.style.transform = `translateX(${-width * imgIndex}px)`//aplico CSS para mover en X cierta cantidad de px, usando esa variable. 
    }

    function actualizarContador() { //funcion para que imprima los valores
        spanActual.textContent = imgIndex + 1;

    }

    //------------------------------------------------------
    // 3. Ejecutamos codigo 
    //------------------------------------------------------
    actualizarContador();
    spanTotal.textContent = totalImages;


    //------------------------------------------------------
    // 
    //------------------------------------------------------
}


//------------------------------------------------------------------------------------------
//------------------------------------ JS CONTACTO------------------------------------------
//------------------------------------------------------------------------------------------






//------------------------------------------------------------------------------------------
//------------------------------------ JS PAGO----------------------------------------------
//------------------------------------------------------------------------------------------























