/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 mapa.js
==========================================================*/


// =====================================
// DATOS REGIONALES TEMPORALES
// Luego se conectará con base real
// =====================================

const regionesPeru = [

{
    region:"Lima",
    productos:[
        "Palta Hass",
        "Fresa",
        "Tomate",
        "Lechuga"
    ],
    produccion:95
},

{
    region:"Ica",
    productos:[
        "Uva",
        "Palta",
        "Espárrago",
        "Cebolla"
    ],
    produccion:88
},

{
    region:"Piura",
    productos:[
        "Mango",
        "Limón",
        "Banano"
    ],
    produccion:82
},

{
    region:"La Libertad",
    productos:[
        "Arándano",
        "Papa",
        "Espárrago"
    ],
    produccion:76
},

{
    region:"Junín",
    productos:[
        "Mandarina",
        "Café",
        "Jengibre"
    ],
    produccion:70
},

{
    region:"Arequipa",
    productos:[
        "Cebolla",
        "Ajo",
        "Papa"
    ],
    produccion:65
}

];



// =====================================
// BUSCAR REGIÓN
// =====================================

function buscarRegion(nombre){


    return regionesPeru.find(

        r => r.region === nombre

    );


}



// =====================================
// MOSTRAR INFORMACIÓN DE REGIÓN
// =====================================

function mostrarRegion(nombre){


    const datos=buscarRegion(nombre);



    if(!datos){

        console.log(
            "Región no encontrada"
        );

        return;

    }



    const mensaje=`

    Región:
    ${datos.region}


    Producción:
    ${datos.produccion}%


    Productos:

    ${datos.productos.join(", ")}

    `;



    console.log(mensaje);



    const panel=

    document.getElementById("infoRegion");



    if(panel){

        panel.innerHTML=`

        <h3>${datos.region}</h3>

        <p>
        Producción:
        ${datos.produccion}%
        </p>


        <strong>
        Productos:
        </strong>

        <p>
        ${datos.productos.join(", ")}
        </p>

        `;

    }


}



// =====================================
// CREAR LISTA DE REGIONES
// =====================================

function cargarRegiones(){


    const selector=

    document.getElementById("region");


    if(!selector)
        return;



    regionesPeru.forEach(region=>{


        let opcion=

        document.createElement("option");


        opcion.value=

        region.region;


        opcion.textContent=

        region.region;


        selector.appendChild(opcion);


    });



    selector.addEventListener(

        "change",

        function(){


            mostrarRegion(this.value);


        }

    );


}



// =====================================
// INICIO
// =====================================

window.addEventListener(

"load",

()=>{


    cargarRegiones();


    console.log(

    "Mapa agrícola cargado"

    );


});
