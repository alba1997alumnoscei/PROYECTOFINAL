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
        btnTodos.addEventListener("click", () => {
            listaProductos(products);

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


        const addCesta = document.querySelectorAll('.btnCesta');
        let counter = 0;

        addCesta.forEach(btn => {
            btn.addEventListener("click", () => {
                const index = parseInt(btn.dataset.index);
                agregarProducto(products[index]);
                counter++;
                counterTotal.textContent = counter;
            });
        });

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

        let precioTotal = 0;
        let productoRopaSeleccionado = null;
        let diseñoSeleccionado = null;

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

        function agregarRopaAlCarrito(item) {
            if (productoRopaSeleccionado) {
                carritoContainer.innerHTML = '';
            }
            const carritoItem = document.createElement('div');
            carritoItem.className = 'productItem';
            carritoItem.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <h2>${item.nombre}</h2>
                <p>${item.precio.toFixed(2)} EUR</p>
                
                
                
                
            `;
            carritoContainer.appendChild(carritoItem);
            productoRopaSeleccionado = item;
            actualizarPrecioTotal();
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

        function actualizarPrecioTotal() {
            let precioTotalCalculado = 0;
            if (productoRopaSeleccionado) {
                precioTotalCalculado += productoRopaSeleccionado.precio;
            }
            if (diseñoSeleccionado) {
                precioTotalCalculado += diseñoSeleccionado.precio;
            }

            // Verificar si se ingresó el código de descuento correcto
            const codigoDescuento = document.getElementById('codigo').value;
            if (codigoDescuento === "CAMISETA123") {
                precioTotalCalculado *= 0.85; // Aplicar descuento del 15%
            }

            precioTotal = precioTotalCalculado;
            verTotal();
        }

        function verTotal() {
            txtInfo.textContent = `Total a pagar: ${precioTotal.toFixed(2)} EUR`;
        }

        function borrarCarrito() {
            carritoContainer.innerHTML = '';
            carritoDisenos.innerHTML = '';
            precioTotal = 0;
            productoRopaSeleccionado = null;
            diseñoSeleccionado = null;
            verTotal();
        }

        // Evento para vaciar el carrito
        document.getElementById("borrarCarrito").addEventListener("click", borrarCarrito);

        // Evento para aplicar el descuento
        document.getElementById("aplicarDescuento").addEventListener("click", actualizarPrecioTotal);

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

            productItem.querySelector('.btnCestaRopa').addEventListener('click', () => {
                agregarRopaAlCarrito(producto);
                document.getElementById("disenos-container").scrollIntoView({ behavior: 'smooth' });

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
                // Desplazar al div "disenos-container"
                document.getElementById("carrito").scrollIntoView({ behavior: 'smooth' });
            });


        });

        // Mostrar el total inicial
        verTotal();

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


