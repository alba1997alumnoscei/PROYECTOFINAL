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

        case "personalizar":
            console.log("Estoy en Pago");
            iniPersonalizar();
            break;

        case "pago":
            console.log("Estoy en Pago");
            iniPago();
            break;

    }


    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------ JS HOME ------------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------


    function iniHome() {
        const acordeon = document.querySelector(".acordeon");
        const headers = acordeon.querySelectorAll(".acordeon__item--titulo");
        const acordeonItems = acordeon.querySelectorAll(".acordeon__item");

        const addCesta = '';

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


        const discount = document.getElementById("descuento")
        discount.addEventListener('click', function () {
            alert('Enhorabuena! Este es tu codigo descuento: CAMISETA123');
        });
    }
    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------ JS ROPA ---------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------

    function iniRopa() {
        const container = document.getElementById('products-container');
        const inputTitulo = document.querySelector("#inputTitulo"); //nombre de la prenda a buscar
        const counterTotal = document.querySelector('#contadorTotal');



        //Botones 
        const btnTodos = document.querySelector("#btnTodos")
        const btnPant = document.querySelector("#btnTote")
        const btnCha = document.querySelector("#btnSudadera")
        const btnCami = document.querySelector("#btnCamiseta")


        //Array de los productos: nombre, referencia, precio, imagen
        const products = [
            {
                nombre: 'Camiseta Vibing',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiesta-vibing.jpg',

            },
            {
                nombre: 'Camiseta Alien',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-alien.jpg',

            },
            {
                nombre: 'Camiseta Bees',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-bees.jpg',

            },
            {
                nombre: 'Camiseta Cat',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-cat.jpg',

            },
            {
                nombre: 'Camiseta Eye',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-ojo.jpg',

            },
            {
                nombre: 'Camiseta Be Kind',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-kind.jpg',

            },
            {
                nombre: 'Camiseta Push Your Limit',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-push.jpg',

            },
            {
                nombre: 'Camiseta Take It All In',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/camiseta-take.jpg',

            },
            //------------------------------------------------------------------------------------
            {
                nombre: 'Sudadera Alien',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-alien.jpg',

            },
            {
                nombre: 'Sudadera Bees',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-bees.jpg',

            },
            {
                nombre: 'Sudadera Cat',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-cat.jpg',

            },
            {
                nombre: 'Sudadera Be Kind',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-kind.jpg',

            },
            {
                nombre: 'Sudadera Eye',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-ojo.jpg',

            },
            {
                nombre: 'Sudadera Push Your Limit',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-push.jpg',

            },
            {
                nombre: 'Sudadera Take It All In',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-take.jpg',

            },
            {
                nombre: 'Sudadera Vibing',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/sudadera-vibing.jpg',

            },
            //-----------------------------------------------------------------------------------
            {
                nombre: 'Tote Bag Alien',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-alien.jpg',

            },
            {
                nombre: 'Tote Bag Bees',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-bees.jpg',

            },
            {
                nombre: 'Tote Bag Cat',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-cat.jpg',

            },
            {
                nombre: 'Tote Bag Kind',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-kind.jpg',

            },
            {
                nombre: 'Tote Bag Eye',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-ojo.jpg',

            },
            {
                nombre: 'Tote Bag Push Your Limit',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-push.jpg',

            },
            {
                nombre: 'Tote Bag Take It All In',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-take.jpg',

            },
            {
                nombre: 'Tote Bag Vibing',
                precio: 12.99,
                referencia: 'precio de diseño no inlcuido',
                imagen: 'imgs/tote-vibing.jpg',

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
                <p >${product.precio}</p>
                <p> ${product.referencia}</p>
               
                
            `;


                container.appendChild(productItem);//añade dentro del container al final 

            });




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
        btnTodos.addEventListener("click", () => { //cuando hago clic en Todos, se muestra la lista de productos completa
            listaProductos(products); //llama a la funcion 

        });

        btnPant.addEventListener("click", () => filtrarTipo("tote")); 
        btnCha.addEventListener("click", () => filtrarTipo("sudadera"));
        btnCami.addEventListener("click", () => filtrarTipo("camiseta"));

        function filtrarTipo(tipo) {
            const productosFiltrados = products.filter(product =>
                product.nombre.toLowerCase().includes(tipo)
            );
            listaProductos(productosFiltrados);
        }


    }



    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------ JS DISEÑOS-------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------

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
    };


    //----------------------------------------------------------------------------------------------------------------------------------------------------------
    //------------------------------------ JS PERSONALIZAR----------------------------------------------
    //----------------------------------------------------------------------------------------------------------------------------------------------------------

    function iniPersonalizar() {
        const prodContainer = document.getElementById("productos-container");
        const disenosContainer = document.getElementById("disenos-container");

        const carritoContainer = document.getElementById("carrito-container");
        const carritoDisenos = document.getElementById("carrito-disenos");
        const txtInfo = document.querySelector(".infoTotal");

        const btnBorrar = document.getElementById("borrarCarrito");
        const btnDescuento = document.getElementById("aplicarDescuento");
        const btnMensaje = document.getElementById("btnMensaje");
        

        let precioTotal = 0;
        let productoRopaSeleccionado = null; //lo inicializamos en null la primera vez, para que despues se pueda ir actualizando 
        let diseñoSeleccionado = null;//lo inicializamos en null la primera vez, para que despues se pueda ir actualizando 

        //array de productos
        const products = [
            {
                nombre: 'Camiseta Basic',
                precio: 12.99,
                imagen: 'imgs/sample-basic.jpg',


            },
            {
                nombre: 'Camiseta Oversize',
                precio: 12.99,
                imagen: 'imgs/sample-oversize.jpg',


            },

            {
                nombre: 'Camiseta Crop',
                precio: 12.99,
                imagen: 'imgs/sample-crop.jpg',


            },
            {
                nombre: 'Camiseta Niños',
                precio: 12.99,
                imagen: 'imgs/sample-ninos.jpg',


            },
            {
                nombre: 'Sudadera con Bolsillo',
                precio: 12.99,
                imagen: 'imgs/sample-bolsillo.jpg',


            },
            {
                nombre: 'Sudadera sin Bolsillo',
                precio: 12.99,
                imagen: 'imgs/sample-sin.jpg',


            },
            {
                nombre: 'Tote Bag Blanca',
                precio: 12.99,
                imagen: 'imgs/sample-toteblanca.jpg',


            },
            {
                nombre: 'Tote Bag Negra',
                precio: 12.99,
                imagen: 'imgs/sample-totenegra.jpg',

            },

            //------------------------------------------------------------------------------------



        ];

        //array de diseños 
        const disenos = [
            {
                nombre: 'Alien',
                precio: 9.99,
                imagen: 'imgs/diseno-alien.jpg',

            },
            {
                nombre: 'Bees',
                precio: 9.99,
                imagen: 'imgs/diseno-bees.jpg',

            },
            {
                nombre: 'Cat',
                precio: 9.99,
                imagen: 'imgs/diseno-cat.jpg',

            },
            {
                nombre: 'Be Kind',
                precio: 9.99,
                imagen: 'imgs/diseno-kind.jpg',

            },
            {
                nombre: 'Eye',
                precio: 9.99,
                imagen: 'imgs/diseno-ojo.jpg',

            },
            {
                nombre: 'Push Your Limit',
                precio: 9.99,
                imagen: 'imgs/diseno-push.jpg',

            },
            {
                nombre: 'Take It All In',
                precio: 9.99,
                imagen: 'imgs/diseno-take.jpg',

            },
            {
                nombre: 'Vibing',
                precio: 9.99,
                imagen: 'imgs/diseno-vibing.jpg',

            },

        ];

           // Listar productos de ropa
           products.forEach(producto => {
            const productItem = document.createElement('div');
            productItem.className = 'productItem';
            productItem.innerHTML = `
            
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.precio.toFixed(2)} EUR</p>
                <button class="btnCestaRopa">Añadir al carrito</button>
                
            `;
            prodContainer.appendChild(productItem);

            //ahora como ya está creado el boton con la clase .btnCestaRopa, hago un query selector para que cada vez que haga click sobre este botón, se ejectue la funcion de agregar la ropa al carrito, del producto en cuestión. 
            productItem.querySelector('.btnCestaRopa').addEventListener('click', () => {
                agregarRopaAlCarrito(producto);
                //Se ejecuta la funcion para mostrar el mensaje de que falta el diseño
                mostrarMensaje();
                //Se cierra dicho mensaje
                cerrarMensajeDiseno();                
            });

        });


        // Listar diseños
        disenos.forEach(diseno => {
            const disenoItem = document.createElement('div');
            disenoItem.className = 'disenoItem';
            disenoItem.innerHTML = `
                <img src="${diseno.imagen}" alt="${diseno.nombre}">
                <h2>${diseno.nombre}</h2>
                <p>${diseno.precio.toFixed(2)} EUR</p>
                <button class="btnCestaDiseno">Añadir al carrito</button>
            `;
            disenosContainer.appendChild(disenoItem);

            disenoItem.querySelector('.btnCestaDiseno').addEventListener('click', () => {
                agregarDisenoAlCarrito(diseno);
                //Se ejecuta la funcion para mostrar el mensaje de que falta alguna camiseta, sudadera o Tote Bag
                mostrarMensajeDiseno();
                //Se cierra dicho mensaje
                cerrarMensaje();
            });


        });

            // Mostrar el total inicial para que me muestre que el total a pagar es 0,00 EUR 
            verTotal();

            //funcion que te muestra el mensaje de que falta por añadir el diseño 
        function mostrarMensaje() {
            const mensaje = document.getElementById('mensaje');
            if(diseñoSeleccionado){//comprobamos si hay algun diseño seleccionado
                console.log("Ya hay un diseño seleccionado");
            }else{//en el caso de que no haya mostramos el mensaje
                mensaje.style.display = 'block';
            }
            
        }

        // Función para cerrar el mensaje
        function cerrarMensaje() {//CerraMensaje seleccionado
            const mensaje = document.getElementById('mensaje');
            //Cerramos el mensaje
            mensaje.style.display = 'none';
        }
            //funcion que te muestra el mensaje de que falta por añadir una camiseta, sudadera o Tote Bag
        function mostrarMensajeDiseno() {
            const mensaje = document.getElementById('mensajeDiseno');
            //comprobamos si hay alguna prenda de ropa seleccionada
            if(productoRopaSeleccionado){
                console.log("Ya hay seleccionado una camiseta, sudadera o Tote Bag")
            }else{//en el caso de que no haya mostramos el mensaje
                mensaje.style.display = 'block';
            }
        }

        // Función para cerrar el mensaje
        function cerrarMensajeDiseno() {
            const mensaje = document.getElementById('mensajeDiseno');
            mensaje.style.display = 'none';
        }

        //funcion que se ejectuta cuando hago clic en el boton "Añadir al carrito". Solo puede haber 1 productoRopaSeleccionado y 1 diseñoSeleccionado
        function agregarRopaAlCarrito(item) {
            if (productoRopaSeleccionado) { //comprobamos si hay algún productoRopaSeleccionado en el carrito
                carritoContainer.innerHTML = ''; //si hay algún productoRopaSeleccionado, vacia el carrito 
            }
            const carritoItem = document.createElement('div'); //y ahora crea el div del nuevo producto que hemos seleccionado. 
            carritoItem.className = 'productItem'; //crea la clase 
            carritoItem.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <h2>${item.nombre}</h2>
                <p>${item.precio.toFixed(2)} EUR</p>
                
                
                
                
            `;
            carritoContainer.appendChild(carritoItem); //en el container añade el producto 
            productoRopaSeleccionado = item; //ahora el productoRopaSeleccionado será el nuevo item que acabamos de añadir. 
            actualizarPrecioTotal(); //ejecutamos funcion de actualizarPrecio 
        }

        function agregarDisenoAlCarrito(item) {
            if (diseñoSeleccionado) {
                carritoDisenos.innerHTML = '';
            }
            const carritoItem = document.createElement('div');
            carritoItem.className = 'disenoItem';
            carritoItem.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <h2>${item.nombre}</h2>
                <p>${item.precio.toFixed(2)} EUR</p>
                
                
            `;
            carritoDisenos.appendChild(carritoItem);
            diseñoSeleccionado = item;
            actualizarPrecioTotal();
        }

        function actualizarPrecioTotal() { //ejecutamos la funcion de actualizar el precio 
            let precioTotalCalculado = 0; //incializamos la variable del precio en 0
            if (productoRopaSeleccionado) { //comprobamos si hay algun producto seleccionado 
                precioTotalCalculado += productoRopaSeleccionado.precio; //si hay algun producto seleccionado sumamos el total precioTotalCalculado al precio del productoRopaSeleccionado. 
            }
            if (diseñoSeleccionado) {//si hay un diseño seleccionado
                precioTotalCalculado += diseñoSeleccionado.precio; //sumamos el precioTotalCalculado, es decir 0, al precio del diseñoSeleccionado. 
            }

            //DESCUENTO 
            const codigoDescuento = document.getElementById('codigo').value; //del HTML, obtenemos el valor del div #codigo. 
            if (codigoDescuento === "CAMISETA123") { //si es exactamente igual a CAMISETA123
                precioTotalCalculado *= 0.85; // Aplicar descuento del 15%
            }

            precioTotal = precioTotalCalculado; //Entonces ahora el precio total que incialmente era 0, va a ser igual al precio total calculado que acabamos de ver. Es decir, la suma de lo que he agregado al carrito menos el descuento. 
            verTotal(); //ejecutamos la funcion para ver el total 
        }

        function verTotal() { //ejecutamos la función para que se muestre el total. 
            txtInfo.textContent = `Total a pagar: ${precioTotal.toFixed(2)} EUR`;
        }

        //funcion de vaciar carrito. 
        function borrarCarrito() {
            carritoContainer.innerHTML = ''; //lo deja vacio
            carritoDisenos.innerHTML = ''; //lo deja vacio 
            precioTotal = 0; //lo deja a 0
            productoRopaSeleccionado = null; //lo deja a null 
            diseñoSeleccionado = null;//lo deja a null 
            verTotal(); // y ejecutamos la funcion verTotal para mostrar el valor a 0
        }

        // Evento para vaciar el carrito
        btnBorrar.addEventListener("click", borrarCarrito);

        // Evento para aplicar el descuento
        btnDescuento.addEventListener("click", actualizarPrecioTotal);

      // Función para desplazarse al div con id "carrito"
    function scrollToCarrito() {
        const carritoDiv = document.getElementById("carrito");
        carritoDiv.scrollIntoView({ behavior: 'smooth' });
    }

    // Event listener para el botón "Ir al Carrito"
    const botonIrAlCarrito = document.querySelector('.fixed-button');
    botonIrAlCarrito.addEventListener('click', scrollToCarrito);



    }

});


