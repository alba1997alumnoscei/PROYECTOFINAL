//Para cargar cargar el contenido del DOM usamos este addEventListener 

document.addEventListener('DOMContentLoaded', function () {

    //Declaramos la variable bodyId que será igual al body id de cada página.  
    const bodyId = document.body.id;
    console.log("body id es:", bodyId) //console.log para saber en qué página estamos. 

    //Definimos un switch con el parámetro bodyId. Cada página corresponde a un case y dependiendo del case en el que esté se iniciará la función asignada. 
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

        
        case "personalizar":
            console.log("Estoy en Pago");
            iniPersonalizar();
            break;
    }


    //-------------------------------------------------------------------------------------------------------------
    // JS HOME 
    //-------------------------------------------------------------------------------------------------------------

    //Esta función corresponde al index.html 

    function iniHome() {
    
        //----------------------------------------------
        //1. Definimos variables para hacer un acordeón. 
        //----------------------------------------------

        const acordeon = document.querySelector(".acordeon");
        const headers = acordeon.querySelectorAll(".acordeon__item--titulo");
        const acordeonItems = acordeon.querySelectorAll(".acordeon__item");
        const discount = document.getElementById("descuento")
        //----------------------------------------------
        //2. Hacemos forEach 
        //----------------------------------------------
        //Como queremos que el acordeón se "abra" vamos a recorrer todos los headers con un forEach   

        headers.forEach(header => {
            //cuando yo hago click en el header (en los titulos)
            header.addEventListener("click", () => {
                //Recogemos el elemento en el que hemos clickeado, busca el elemento más cercano con la clase .acordeon__item.
                const item = header.closest(".acordeon__item");

                //ahora recorremos todos los items del acordeón y eliminamos la clase de activo para que se "cierren" los demás
                acordeonItems.forEach(elemento => {
                    elemento.classList.remove("active");

                })

                //agregamos la clase active solo en el item que hemos seleccionado
                item.classList.add("active");
            });

        });

        //para que al cargar la página el primero [0] esté "abierto"
        acordeonItems[0].classList.add('active');
        //----------------------------------------------
        //3. Ejecutamos los eventos
        //----------------------------------------------
        //cuando hago click en discount se ejecuta la función del código de descuento. 
        discount.addEventListener('click', function () {
            alert('Enhorabuena! Este es tu codigo descuento: CAMISETA123');
        });
    }
    //-----------------------------------------------------------------------------------------------------------
    // JS ROPA 
    //-----------------------------------------------------------------------------------------------------------

    //Esta función corresponde al HTML ropa-accesorios.html
    function iniRopa() {
        //----------------------------------------------
        //1. Declaramos las variables 
        //----------------------------------------------
        //products__container será donde aparezcan todas las prendas y accesorios.
        const inputText = document.querySelector("#inputText"); //nombre de la prenda a buscar que más 
        const container = document.getElementById('products__container');

        //Botones: corresponde a los botones de filtrar. 
        const btnTodos = document.querySelector("#btnTodos")
        const btnPant = document.querySelector("#btnTote")
        const btnCha = document.querySelector("#btnSudadera")
        const btnCami = document.querySelector("#btnCamiseta")

        //Array de los productos: nombre, infoPrecio, precio, imagen
        const products = [
            //camisetas 
            {
                nombre: 'Camiseta Vibing',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiesta-vibing.jpg',

            },
            {
                nombre: 'Camiseta Alien',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-alien.jpg',

            },
            {
                nombre: 'Camiseta Bees',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-bees.jpg',

            },
            {
                nombre: 'Camiseta Cat',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-cat.jpg',

            },
            {
                nombre: 'Camiseta Eye',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-ojo.jpg',

            },
            {
                nombre: 'Camiseta Be Kind',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-kind.jpg',

            },
            {
                nombre: 'Camiseta Push Your Limit',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-push.jpg',

            },
            {
                nombre: 'Camiseta Take It All In',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/camiseta-take.jpg',

            },
            //------------------------------------
            //sudaderas
            {
                nombre: 'Sudadera Alien',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-alien.jpg',

            },
            {
                nombre: 'Sudadera Bees',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-bees.jpg',

            },
            {
                nombre: 'Sudadera Cat',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-cat.jpg',

            },
            {
                nombre: 'Sudadera Be Kind',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-kind.jpg',

            },
            {
                nombre: 'Sudadera Eye',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-ojo.jpg',

            },
            {
                nombre: 'Sudadera Push Your Limit',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-push.jpg',

            },
            {
                nombre: 'Sudadera Take It All In',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-take.jpg',

            },
            {
                nombre: 'Sudadera Vibing',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/sudadera-vibing.jpg',

            },
            //-------------------------------------
            //tote bags 
            {
                nombre: 'Tote Bag Alien',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-alien.jpg',

            },
            {
                nombre: 'Tote Bag Bees',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-bees.jpg',

            },
            {
                nombre: 'Tote Bag Cat',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-cat.jpg',

            },
            {
                nombre: 'Tote Bag Kind',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-kind.jpg',

            },
            {
                nombre: 'Tote Bag Eye',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-ojo.jpg',

            },
            {
                nombre: 'Tote Bag Push Your Limit',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-push.jpg',

            },
            {
                nombre: 'Tote Bag Take It All In',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-take.jpg',

            },
            {
                nombre: 'Tote Bag Vibing',
                precio: 12.99,
                infoPrecio: '*No incluye diseño',
                imagen: 'imgs/tote-vibing.jpg',

            },
        ];
        //----------------------------------------------
        //2. Funciones 
        //----------------------------------------------

        //--------------- Funcion para mostrar todos los productos en la página --------------- 
        function listaProductos(products) {
            container.innerHTML = ''; //vacia el container para mejor actualización 
            products.forEach(product => { //con un forEach recorremos todas las propiedades del array. 
                const productItem = document.createElement('div'); //desde el JS creamos un div en el HTML 
                productItem.className = 'productItem';//creamos una clase para el div que acabamos de crear

                //lo que se va escribir dentro del <div> productItem creado y dentro ponemos las variables del array.  
                productItem.innerHTML = `
                <img src="${product.imagen}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <p >${product.precio}</p>
                <div class ="infoPrecio"> ${product.infoPrecio}</div>
                               
            `;
                container.appendChild(productItem);//añade dentro del container, al final 
            });
            
        }
        //--------------- Función de filtrar por tipo cuando hago click ---------------
        function filtrarTipo(tipo) {
            const productosFiltrados = products.filter(product =>
                product.nombre.toLowerCase().includes(tipo)
            );
            listaProductos(productosFiltrados); 
        }


        // ----------Evento para filtrar por título al escribir en el input----------
        inputText.addEventListener("input", () => { //cuando escribimos texto en el input 
            const texto = inputText.value.toLowerCase();//obtiene el valor que escribimos y se convierte a minúsculas para que filtre mejor 
            const productosFiltrados = products.filter(product => //del array "products" filtramos por nombre 
                product.nombre.toLowerCase().includes(texto) //que incluya el value que hemos escrito en el input
            );
            listaProductos(productosFiltrados); // se ejecuta la función de listarProductos para ver los productos que hay 
        });



        // ---------------Filtrar clicando en los botones ---------------
        btnTodos.addEventListener("click", () => { //cuando hago clic en Todos, se muestra la lista de productos completa
            listaProductos(products); //llama a la funcion 

        });

        //hacemos click para filtrar 
        btnPant.addEventListener("click", () => filtrarTipo("tote")); //filtramos por tote
        btnCha.addEventListener("click", () => filtrarTipo("sudadera"));//filtramos por sudadera
        btnCami.addEventListener("click", () => filtrarTipo("camiseta"));//filtramos por camiseta

    }
        //----------------------------------------------
        //3. Ejecutamos 
        //----------------------------------------------

    listaProductos(products); // Se ejecuta la función listaProductos para mostrar el array


    //-----------------------------------------------------------------------------------------------------------
    //  JS DISEÑOS
    //-----------------------------------------------------------------------------------------------------------
//Esta función corresponde al HTML disenos.html
    function iniDisenos() {
        //------------------------------------------------------
        // 1. Declaramos variables y constantes
        //------------------------------------------------------
        //slider
        const sliderImages = document.querySelector(".slider-images");
        const listaImages = document.querySelectorAll(".slider-images img");

        //Botones de siguiente y anterior
        const btnAnterior = document.querySelector(".btnAnterior");
        const btnSiguiente = document.querySelector(".btnSiguiente");


        //Numera en que posición se encuentra con respecto al total de diseños
        const spanActual = document.getElementById("txtActual");
        const spanTotal = document.getElementById("txtTotal");

        let imgIndex = 0; //la primera foto que va a tomar va a ser la 0
        const totalImages = listaImages.length; //total de imagenes,  vamos a saber el total de imagenes usando el lenght


        //EventListener

        btnSiguiente.addEventListener("click", nextImagen); //2 parametros: click + funcion
        btnAnterior.addEventListener("click", prevImagen); //2 parametros: click + funcion

        //------------------------------------------------------
        // 2. Funciones
        //------------------------------------------------------

        // Función para ver la siguiente imagen 
        function nextImagen() {
            imgIndex++; //cada vez que hago nextImage el indice se incrementa en 1
            if (imgIndex >= totalImages) {//si el indice es mayor o igual al total de imagenes
                imgIndex = 0; //el indice se queda a 0
            }
            actualizarSlider(); //se actualiza el slider 
            actualizarContador(); //y se actualiza el contador
        }
    // Función para ver la imagen anterior
        function prevImagen() {
            imgIndex--; //cada vez que hago prevImage el indice se decrementa en 1
            if (imgIndex < 0) {//si el indice es menor a 0
                imgIndex = totalImages; //el indice vale totalImages
            }
            actualizarSlider(); // se actualiza el slider 
            actualizarContador(); //y se actualiza contador 
        }

        function actualizarSlider() {// como el minwidth de las imagenes es 250px 
            const width = 250; //tomamos el ancho de mi slider 
            sliderImages.style.transform = `translateX(${-width * imgIndex}px)`//aplico CSS para mover en X 250px mi slider 
        }

        function actualizarContador() { //funcion para que se actualice el contador de imagenes 
            spanActual.textContent = imgIndex + 1; //y sería: según en la imagen que se encuentre (spanActual), se sumará 1. 

        }

        //------------------------------------------------------
        // 3. Ejecutamos codigo 
        //------------------------------------------------------
        actualizarContador(); //actualizar contador 
        spanTotal.textContent = totalImages; //que se muestre el texto del total de imagenes
    };


    //-------------------------------------------------------------------------------------------------------------
    // JS PERSONALIZAR
    //-------------------------------------------------------------------------------------------------------------
//esta función pertenece al HTML personalizar.html
    function iniPersonalizar() {

        //----------------------------------------------
        //1. Declaramos variables: 
        //----------------------------------------------
        const prodContainer = document.getElementById("productos__container"); //ropa y accesorios que crearemos más adelante en este JS
        const disenosContainer = document.getElementById("disenos-container"); //ropa y accesorios que crearemos más adelante en este JS

        const carritoContainer = document.getElementById("carrito-container"); //parte del carrito donde irá la prenda/accesorio
        const carritoDisenos = document.getElementById("carrito-disenos"); // parte del carrito donde irá el diseño 
        const txtInfo = document.querySelector(".infoTotal");

        const btnBorrar = document.getElementById("borrarCarrito"); //botón de vaciar carrito 
        const btnDescuento = document.getElementById("bntAplicarD"); //botón de descuento 
        const btnMensaje = document.getElementById("btnMensaje"); //botón de mensaje  
        

        let precioTotal = 0; //el precio de nuestro carrito inicialmente será 0 
        let productoRopaSeleccionado = null; //lo inicializamos en null la primera vez, para que despues se pueda ir actualizando 
        let diseñoSeleccionado = null;//lo inicializamos en null la primera vez, para que despues se pueda ir actualizando 

        //array de productos: en este array hemos puesto solo los modelos de camiseta, sudadera y tote bag. 
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

        ];

        // Array de diseños: en este array irán nuestros 8 diseños 
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
        
            //----------------------------------------------
            //2. forEach, eventos y funciones para ir ejecutando 
            //----------------------------------------------
           // Listar productos de ropa: recorre el array de products para crear un div con la clase productItem 
           products.forEach(producto => {
            const productItem = document.createElement('div');
            productItem.className = 'productItem';

            //y ahora en el HTML se escribirá lo siguiente. Recorre cada producto, en todas sus propiedades, es decir, recorre la imagen, el nombre y el precio. En el precio ponemos toFixed(2) para que aparezca 2 dígitos.  
            productItem.innerHTML = `
            
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio.toFixed(2)} EUR</p>
                <button class="btnCestaRopa">Añadir al carrito</button>
                
            `;
            prodContainer.appendChild(productItem); // y lo añade dentro del container, al final 

            //ahora como ya está creado el boton con la clase .btnCestaRopa, hago un query selector para que cada vez que haga click sobre este botón, se ejectue la funcion de agregar la ropa al carrito, del producto en cuestión. 
            productItem.querySelector('.btnCestaRopa').addEventListener('click', () => {
                agregarRopaAlCarrito(producto);
                //Se ejecuta la funcion para mostrar el mensaje de que falta el diseño
                mostrarMensaje();
                //Se cierra dicho mensaje
                cerrarMensajeDiseno();                
            });

        });


        // Listar diseños en la pagina: recorre el array de diseños para crear un div con la clase disenoItem 
        disenos.forEach(diseno => {
            const disenoItem = document.createElement('div');
            disenoItem.className = 'disenoItem';
            disenoItem.innerHTML = `
                <img src="${diseno.imagen}" alt="${diseno.nombre}">
                <h3>${diseno.nombre}</h3>
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

        // Función para cerrar el mensaje de ropa
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

        // Función para cerrar el mensaje de Diseno 
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
                <h3>${item.nombre}</h3>
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
                <h3>${item.nombre}</h3>
                <p>${item.precio.toFixed(2)} EUR</p>
                
                
            `;
            carritoDisenos.appendChild(carritoItem);
            diseñoSeleccionado = item;
            actualizarPrecioTotal();
        }

        //funcion actualizar el precio 
        function actualizarPrecioTotal() { //ejecutamos la funcion de actualizar el precio 
            let precioTotalCalculado = 0; //incializamos la variable del precio en 0
            if (productoRopaSeleccionado) { //comprobamos si hay algun producto seleccionado 
                precioTotalCalculado += productoRopaSeleccionado.precio; //si hay algun producto seleccionado sumamos el total precioTotalCalculado al precio del productoRopaSeleccionado. 
            }
            if (diseñoSeleccionado) {//si hay un diseño seleccionado
                precioTotalCalculado += diseñoSeleccionado.precio; //sumamos el precioTotalCalculado, es decir 0, al precio del diseñoSeleccionado. 
            }

            //Obtener descuento  
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
    const botonIrAlCarrito = document.querySelector('.irCarrito');
    botonIrAlCarrito.addEventListener('click', scrollToCarrito);

    }

});

