/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 cargarDatos.js
==========================================================*/


// =====================================
// VARIABLES GLOBALES
// =====================================

let productosGlobal = [];
let preciosGlobal = [];
let regionesGlobal = [];



// =====================================
// CARGAR ARCHIVO JSON
// =====================================

async function cargarJSON(ruta){

    try{

        const respuesta = await fetch(ruta);

        const datos = await respuesta.json();

        return datos;

    }

    catch(error){

        console.error(
            "Error cargando:",
            ruta,
            error
        );

        return [];

    }

}



// =====================================
// CARGAR TODOS LOS DATOS
// =====================================

async function cargarDatosSistema(){


    const frutas = await cargarJSON(
        "data/frutas.json"
    );


    const verduras = await cargarJSON(
        "data/verduras.json"
    );


    const tuberculos = await cargarJSON(
        "data/tuberculos.json"
    );


    const legumbres = await cargarJSON(
        "data/legumbres.json"
    );


    const hierbas = await cargarJSON(
        "data/hierbas.json"
    );


    preciosGlobal = await cargarJSON(
        "data/precios.json"
    );


    regionesGlobal = await cargarJSON(
        "data/regiones.json"
    );



    productosGlobal=[

        ...frutas,
        ...verduras,
        ...tuberculos,
        ...legumbres,
        ...hierbas

    ];



    console.log(
        "Productos cargados:",
        productosGlobal.length
    );


    console.log(
        "Precios cargados:",
        preciosGlobal.length
    );


    actualizarDashboardDatos();


}



// =====================================
// ACTUALIZAR DASHBOARD
// =====================================

function actualizarDashboardDatos(){


    // Total productos

    const total =
    document.getElementById(
        "kpiProductos"
    );


    if(total){

        total.innerHTML =
        productosGlobal.length;

    }



    // Precio promedio

    let suma=0;


    preciosGlobal.forEach(p=>{

        suma += p.precioActual;

    });



    let promedio =

    suma / preciosGlobal.length;



    const precio =

    document.getElementById(
        "kpiPrecio"
    );


    if(precio){

        precio.innerHTML =
        "S/ "+promedio.toFixed(2);

    }



    // Productos con escasez

    let escasez =

    preciosGlobal.filter(

        p=>p.oferta==="Baja"

    ).length;



    const kpiEscasez=

    document.getElementById(
        "kpiEscasez"
    );


    if(kpiEscasez){

        kpiEscasez.innerHTML =
        escasez;

    }



    // Enviar datos al calendario

    if(typeof generarCalendario==="function"){

        generarCalendario(
            productosGlobal
        );

    }


}



// =====================================
// BUSCADOR GLOBAL
// =====================================

function buscarProductoGlobal(texto){


    texto =
    texto.toLowerCase();



    return productosGlobal.filter(p=>{


        return (

            p.nombre
            .toLowerCase()
            .includes(texto)

            ||

            p.categoria
            .toLowerCase()
            .includes(texto)

        );


    });


}



// =====================================
// INICIO
// =====================================

window.addEventListener(

"load",

()=>{


    cargarDatosSistema();


});
