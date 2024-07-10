document.addEventListener('DOMContentLoaded', function () {


    const container = document.getElementById('products-container');
    const inputTitulo = document.querySelector("#inputTitulo"); //nombre de la prenda a buscar


    //Botones 
    const btnTodos = document.querySelector("#btnTodos")
    const btnPant = document.querySelector("#btnPantalon")
    const btnCha = document.querySelector("#btnChaqueta")
    const btnCami = document.querySelector("#btnCamiseta")

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
    function listaProductos(mostrarProductos) {
        container.innerHTML = ''; //vacia HTML para mejor actualización 
        mostrarProductos.forEach(product => { //con un forEach que recorre todas las propiedades del array. 
            const productItem = document.createElement('div'); //desde el JS creamos un div en el HTML 
            productItem.className = 'productItem';//creamos una clase para el div que acabamos de crear

            //lo que se va escribir dentro del <div> productItem creado y dentro ponemos las variables del array.  
            productItem.innerHTML = `
                <img src="${product.imagen}" alt="${product.nombre}">
                <h2>${product.nombre}</h2>
                <p>Referencia: ${product.referencia}</p>
                <p class="precio">$${product.precio}</p>
            `;
            container.appendChild(productItem);//lugar donde quiero mostrar cada Item ------------------------------------------------!!!! comentar!!!! 
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


    btnTodos.addEventListener("click", () =>{
        listaProductos(products);
        
    });

    btnPant.addEventListener("click", () => filtrarTipo ("pantalones"));
    btnCha.addEventListener("click", () =>filtrarTipo ("chaqueta"));
    btnCami.addEventListener("click", () => filtrarTipo ("camiseta"));

    function filtrarTipo(tipo) {
        const productosFiltrados = products.filter(product =>
            product.nombre.toLowerCase().includes(tipo)
        );
        listaProductos(productosFiltrados);
     }



});



    // // Función para filtrar por nombre de prenda (Todos, Pantalón, Chaqueta, Camiseta)
    // function filtrarPorTipo(nombre) {
    //     const productosFiltrados = products.filter(product => {
    //         switch (nombre) {
    //             case 'Todos':
    //                 return true;
    //             case 'Pantalón':
    //                 return product.nombre.includes('Pantalones') || product.nombre.includes('Pantalón');
    //             case 'Chaqueta':
    //                 return product.nombre.includes('Chaqueta');
    //             case 'Camiseta':
    //                 return product.nombre.includes('Camiseta');
    //             default:
    //                 return false;
    //         }
    //     });
    //     listaProductos(productosFiltrados);
    // }

    // // Eventos para los botones de filtro
    // btnTodos.addEventListener("click", () => filtrarPorTipo('Todos'));
    // btnPant.addEventListener("click", () => filtrarPorTipo('Pantalón'));
    // btnCha.addEventListener("click", () => filtrarPorTipo('Chaqueta'));
    // btnCami.addEventListener("click", () => filtrarPorTipo('Camiseta'));







