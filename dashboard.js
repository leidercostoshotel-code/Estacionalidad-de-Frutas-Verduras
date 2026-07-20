/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 dashboard.js
==========================================================*/


// =====================================
// VARIABLES GLOBALES
// =====================================

let fechaActualizacion = new Date();


// =====================================
// ACTUALIZAR KPI PRODUCTOS
// =====================================

function actualizarDashboardKPI(){


    if(typeof productos === "undefined")
        return;



    // Total productos

    const totalProductos = productos.length;



    const elementoProductos =

    document.getElementById("kpiProductos");



    if(elementoProductos){

        elementoProductos.innerHTML =
        totalProductos;

    }



    // Productos en temporada

    let temporada = productos.filter(

        p => p.temporada === "Sí"

    ).length;



    const elementoTemporada =

    document.getElementById("kpiTemporada");



    if(elementoTemporada){

        elementoTemporada.innerHTML =
        temporada;

    }



    // Escasez

    let escasez = productos.filter(

        p => p.oferta === "Baja"

    ).length;



    const elementoEscasez =

    document.getElementById("kpiEscasez");



    if(elementoEscasez){

        elementoEscasez.innerHTML =
        escasez;

    }



}



// =====================================
// CALCULAR PRECIO PROMEDIO
// =====================================

function calcularPrecioPromedio(){


    if(typeof preciosProductos === "undefined")
        return 0;



    let suma=0;



    preciosProductos.forEach(p=>{


        suma += p.precio;


    });



    return (

        suma / preciosProductos.length

    ).toFixed(2);



}



// =====================================
// ACTUALIZAR PRECIO KPI
// =====================================

function actualizarPrecioDashboard(){


    const precio=

    document.getElementById("kpiPrecio");



    if(precio){


        precio.innerHTML=

        "S/ "+calcularPrecioPromedio();


    }


}



// =====================================
// INDICADOR DE MERCADO
// =====================================

function estadoMercado(){


    let mensaje="";


    if(typeof preciosProductos === "undefined")
        return;



    let suben=0;

    let bajan=0;



    preciosProductos.forEach(p=>{


        if(p.variacion>0){

            suben++;

        }


        else{


            bajan++;

        }


    });



    if(suben>bajan){

        mensaje="📈 Precios con tendencia al alza";

    }

    else{

        mensaje="📉 Mercado estable";

    }



    console.log(mensaje);


    return mensaje;

}



// =====================================
// FECHA ACTUALIZACIÓN
// =====================================

function mostrarActualizacion(){


    fechaActualizacion=

    new Date();



    console.log(

        "Actualizado:",
        fechaActualizacion.toLocaleString()

    );


}



// =====================================
// ACTUALIZACIÓN AUTOMÁTICA
// =====================================

function refrescarDashboard(){


    actualizarDashboardKPI();

    actualizarPrecioDashboard();

    estadoMercado();

    mostrarActualizacion();


}



// =====================================
// INICIAR DASHBOARD
// =====================================

window.addEventListener(

"load",

()=>{


    refrescarDashboard();



    // Actualiza cada 1 minuto

    setInterval(

        refrescarDashboard,

        60000

    );



    console.log(

    "Dashboard Agro Perú iniciado"

    );


});