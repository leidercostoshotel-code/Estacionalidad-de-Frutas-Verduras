/*====================================================
 AGRO DASHBOARD PERÚ 2026
 charts.js
====================================================*/

Chart.defaults.font.family="Poppins";
Chart.defaults.color="#455A64";

//=====================================================
// COLORES
//=====================================================

const verde="#2E7D32";
const verde2="#43A047";
const verde3="#81C784";
const naranja="#FB8C00";
const rojo="#E53935";
const azul="#1976D2";
const morado="#8E24AA";
const celeste="#29B6F6";

//=====================================================
// PRODUCCIÓN MENSUAL
//=====================================================

new Chart(document.getElementById("chartProduccion"),{

type:"bar",

data:{

labels:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],

datasets:[{

label:"Miles de toneladas",

data:[75,82,90,115,138,160,171,166,142,120,102,88],

backgroundColor:verde2,

borderRadius:8

}]

},

options:{

responsive:true,

plugins:{

legend:{display:false}

},

scales:{

y:{beginAtZero:true}

}

}

});

//=====================================================
// OFERTA VS DEMANDA
//=====================================================

new Chart(document.getElementById("chartOferta"),{

type:"radar",

data:{

labels:["Frutas","Verduras","Tubérculos","Legumbres","Hierbas"],

datasets:[

{

label:"Oferta",

data:[95,88,82,60,45],

backgroundColor:"rgba(67,160,71,.25)",

borderColor:verde2

},

{

label:"Demanda",

data:[82,91,74,55,42],

backgroundColor:"rgba(25,118,210,.20)",

borderColor:azul

}

]

},

options:{

responsive:true

}

});

//=====================================================
// PRECIOS
//=====================================================

new Chart(document.getElementById("chartPrecios"),{

type:"line",

data:{

labels:["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],

datasets:[{

label:"Precio promedio",

data:[3.4,3.5,3.7,3.6,3.8,3.75,3.71],

borderColor:naranja,

backgroundColor:"rgba(251,140,0,.20)",

fill:true,

tension:.35

}]

},

options:{

responsive:true

}

});

//=====================================================
// TOP PRODUCTOS
//=====================================================

new Chart(document.getElementById("chartTop"),{

type:"doughnut",

data:{

labels:[

"Papa",

"Tomate",

"Cebolla",

"Palta",

"Mango",

"Mandarina"

],

datasets:[{

data:[24,18,14,16,12,16],

backgroundColor:[

verde,

verde2,

verde3,

azul,

naranja,

rojo

]

}]

},

options:{

responsive:true

}

});

//=====================================================
// REGIONES
//=====================================================

const nuevoCanvas=document.createElement("canvas");

nuevoCanvas.id="chartRegiones";

document.querySelector(".tabla").prepend(nuevoCanvas);

new Chart(nuevoCanvas,{

type:"bar",

data:{

labels:[

"Lima",

"Ica",

"Junín",

"Piura",

"La Libertad",

"Arequipa",

"Cajamarca"

],

datasets:[{

label:"Producción",

data:[95,82,77,70,66,52,48],

backgroundColor:celeste,

borderRadius:6

}]

},

options:{

responsive:true

}

});

//=====================================================
// ESTACIONALIDAD
//=====================================================

const heatCanvas=document.createElement("canvas");

heatCanvas.id="chartHeat";

document.getElementById("heatmap").innerHTML="";

document.getElementById("heatmap").appendChild(heatCanvas);

new Chart(heatCanvas,{

type:"bubble",

data:{

datasets:[

{

label:"Alta Producción",

data:[

{x:1,y:7,r:15},

{x:2,y:8,r:18},

{x:3,y:9,r:20},

{x:4,y:10,r:25},

{x:5,y:8,r:18},

{x:6,y:6,r:14}

],

backgroundColor:verde2

}

]

},

options:{

responsive:true,

scales:{

x:{

min:0,

max:12,

title:{

display:true,

text:"Mes"

}

},

y:{

min:0,

max:12,

title:{

display:true,

text:"Índice"

}

}

}

}

});

console.log("Gráficos cargados correctamente.");