/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 utils.js
==========================================================*/


// =====================================
// FORMATO DE MONEDA
// =====================================

function formatoMoneda(valor){

    return "S/ " + Number(valor)
    .toFixed(2);

}



// =====================================
// FORMATO DE PORCENTAJE
// =====================================

function formatoPorcentaje(valor){

    return Number(valor)
    .toFixed(2) + "%";

}



// =====================================
// COLOR SEGÚN ESTADO
// =====================================

function colorEstado(estado){


    switch(estado){


        case "Alta":

            return "#4CAF50";


        case "Media":

            return "#FFC107";


        case "Baja":

            return "#F44336";


        case "No":

            return "#9E9E9E";


        default:

            return "#FFFFFF";


    }

}



// =====================================
// FECHA ACTUAL
// =====================================

function fechaActual(){


    let fecha=new Date();


    return fecha.toLocaleDateString(
        "es-PE"
    );


}



// =====================================
// HORA ACTUAL
// =====================================

function horaActual(){


    let hora=new Date();


    return hora.toLocaleTimeString(
        "es-PE"
    );


}



// =====================================
// ORDENAR PRODUCTOS POR PRECIO
// =====================================

function ordenarPorPrecio(lista){


    return lista.sort(

        (a,b)=>

        a.precio-b.precio

    );


}



// =====================================
// BUSCADOR GENERAL
// =====================================

function buscarProducto(lista,texto){


    texto=texto.toLowerCase();



    return lista.filter(producto=>{


        return (

            producto.nombre
            .toLowerCase()
            .includes(texto)


            ||

            producto.categoria
            .toLowerCase()
            .includes(texto)


            ||

            producto.region
            .toLowerCase()
            .includes(texto)

        );


    });


}



// =====================================
// GENERAR ID
// =====================================

function generarID(){


    return Date.now();


}



// =====================================
// ANIMACIÓN KPI
// =====================================

function animarNumero(elemento,valor){


    let inicio=0;


    let incremento=

    valor/50;



    let intervalo=setInterval(()=>{


        inicio += incremento;



        elemento.innerHTML=

        Math.floor(inicio);



        if(inicio>=valor){


            elemento.innerHTML=valor;


            clearInterval(intervalo);


        }


    },20);


}



// =====================================
// LOG DEL SISTEMA
// =====================================

function logSistema(mensaje){


    console.log(

        "["+

        new Date()
        .toLocaleTimeString()

        +"] "

        +

        mensaje

    );


}
