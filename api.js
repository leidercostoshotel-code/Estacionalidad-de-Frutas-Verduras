/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 api.js
==========================================================*/


// URL BASE PARA DATOS
// Posteriormente se conectará con MIDAGRI / SISAP

const API_CONFIG = {

    fuente:"MIDAGRI",

    actualizado:new Date()

};


// =====================================
// DATOS DE PRECIOS (TEMPORAL)
// Luego será reemplazado por API real
// =====================================

let preciosProductos=[

{
    nombre:"Palta Hass",
    precio:4.82,
    variacion:2.5,
    ingreso:520,
    tendencia:"Subiendo"
},

{
    nombre:"Tomate",
    precio:2.60,
    variacion:-1.8,
    ingreso:850,
    tendencia:"Bajando"
},

{
    nombre:"Papa Blanca",
    precio:1.80,
    variacion:0.5,
    ingreso:1200,
    tendencia:"Estable"
}

];


// =====================================
// BUSCAR PRECIO PRODUCTO
// =====================================

function buscarPrecio(nombre){

    return preciosProductos.find(

        producto => producto.nombre === nombre

    );

}



// =====================================
// ACTUALIZAR TARJETAS DE PRECIO
// =====================================

function actualizarPrecios(){

    if(preciosProductos.length===0)
        return;


    let suma=0;


    preciosProductos.forEach(producto=>{

        suma += producto.precio;

    });


    let promedio=suma/preciosProductos.length;


    const kpi=document.getElementById("kpiPrecio");


    if(kpi){

        kpi.innerHTML="S/ "+promedio.toFixed(2);

    }

}



// =====================================
// VARIACIÓN DE PRECIOS
// =====================================

function calcularVariacion(){

    let subida=0;

    let bajada=0;


    preciosProductos.forEach(producto=>{


        if(producto.variacion>0){

            subida++;

        }

        else if(producto.variacion<0){

            bajada++;

        }


    });


    return {

        productosSuben:subida,

        productosBajan:bajada

    };

}



// =====================================
// SIMULADOR DE ACTUALIZACIÓN
// Luego será API REAL
// =====================================

function actualizarDatos(){

    preciosProductos.forEach(producto=>{


        let cambio=(Math.random()*0.20)-0.10;


        producto.precio += cambio;


        producto.precio=

        Number(producto.precio.toFixed(2));


    });


    actualizarPrecios();


    console.log(
        "Precios actualizados:",
        new Date()
    );

}



// Actualiza cada 5 minutos

setInterval(

    actualizarDatos,

    300000

);


// =====================================
// INICIO
// =====================================

window.addEventListener("load",()=>{


    actualizarPrecios();


    console.log(

    "API Agro Dashboard cargada"

    );


});