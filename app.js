/*=========================================================
 AGRO DASHBOARD PERÚ 2026
 app.js
=========================================================*/

// =======================
// DATOS DE EJEMPLO
// =======================

const productos = [

{
nombre:"Palta Hass",
categoria:"Fruta",
region:"Lima",
precio:4.82,
oferta:"Alta",
demanda:"Alta",
temporada:"Sí",
tendencia:"⬆"
},

{
nombre:"Mango Kent",
categoria:"Fruta",
region:"Piura",
precio:7.20,
oferta:"Media",
demanda:"Alta",
temporada:"No",
tendencia:"⬆"
},

{
nombre:"Mandarina",
categoria:"Fruta",
region:"Junín",
precio:2.80,
oferta:"Alta",
demanda:"Media",
temporada:"Sí",
tendencia:"⬇"
},

{
nombre:"Tomate",
categoria:"Verdura",
region:"Ica",
precio:2.60,
oferta:"Alta",
demanda:"Alta",
temporada:"Sí",
tendencia:"➡"
},

{
nombre:"Papa Blanca",
categoria:"Tubérculo",
region:"Huánuco",
precio:1.80,
oferta:"Alta",
demanda:"Alta",
temporada:"Sí",
tendencia:"⬇"
},

{
nombre:"Cebolla Roja",
categoria:"Verdura",
region:"Arequipa",
precio:2.30,
oferta:"Media",
demanda:"Alta",
temporada:"Sí",
tendencia:"⬆"
}

];

//=========================
// REFERENCIAS HTML
//=========================

const tabla=document.getElementById("tablaProductos");

const buscar=document.getElementById("buscar");

//=========================
// CARGAR TABLA
//=========================

function cargarTabla(lista){

tabla.innerHTML="";

lista.forEach(producto=>{

tabla.innerHTML+=`

<tr>

<td>${producto.nombre}</td>

<td>${producto.categoria}</td>

<td>${producto.region}</td>

<td>S/${producto.precio.toFixed(2)}</td>

<td>${producto.oferta}</td>

<td>${producto.demanda}</td>

<td>${producto.temporada}</td>

<td>${producto.tendencia}</td>

</tr>

`;

});

}

//=========================
// KPIs
//=========================

function actualizarKPIs(){

document.getElementById("kpiProductos").innerHTML=productos.length;

const temporada=productos.filter(x=>x.temporada=="Sí").length;

document.getElementById("kpiTemporada").innerHTML=temporada;

const escasez=productos.filter(x=>x.oferta=="Baja").length;

document.getElementById("kpiEscasez").innerHTML=escasez;

const promedio=productos.reduce((a,b)=>a+b.precio,0)/productos.length;

document.getElementById("kpiPrecio").innerHTML=

"S/"+promedio.toFixed(2);

document.getElementById("kpiIngreso").innerHTML=

(Math.random()*9000+5000).toFixed(0)+" Ton";

document.getElementById("kpiVariacion").innerHTML=

(Math.random()*8).toFixed(2)+" %";

}

//=========================
// BUSCADOR
//=========================

buscar.addEventListener("keyup",()=>{

const texto=buscar.value.toLowerCase();

const filtrados=productos.filter(producto=>{

return producto.nombre.toLowerCase().includes(texto)

||

producto.region.toLowerCase().includes(texto)

||

producto.categoria.toLowerCase().includes(texto);

});

cargarTabla(filtrados);

});

//=========================
// ORDENAR
//=========================

function ordenarPrecio(){

productos.sort((a,b)=>a.precio-b.precio);

cargarTabla(productos);

}

function ordenarNombre(){

productos.sort((a,b)=>

a.nombre.localeCompare(b.nombre));

cargarTabla(productos);

}

//=========================
// ESTADÍSTICAS
//=========================

function estadisticas(){

console.log("Productos:",productos.length);

console.log("Precio Máximo",

Math.max(...productos.map(x=>x.precio)));

console.log("Precio Mínimo",

Math.min(...productos.map(x=>x.precio)));

}

//=========================
// RELOJ
//=========================

function reloj(){

const fecha=new Date();

document.title=

"Agro Dashboard | "+fecha.toLocaleTimeString();

}

setInterval(reloj,1000);

//=========================
// INICIO
//=========================

actualizarKPIs();

cargarTabla(productos);

estadisticas();