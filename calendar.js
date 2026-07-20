/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 calendar.js
==========================================================*/

const meses = [
    "ene","feb","mar","abr","may","jun",
    "jul","ago","sep","oct","nov","dic"
];

const colores = {
    "Alta":"#4CAF50",
    "Media":"#FFC107",
    "Baja":"#F44336",
    "No":"#E0E0E0"
};

function obtenerColor(valor){

    return colores[valor] || "#E0E0E0";

}

function generarCalendario(productos){

    const contenedor=document.getElementById("heatmap");

    if(!contenedor) return;

    contenedor.innerHTML="";

    const tabla=document.createElement("table");

    tabla.className="tablaCalendario";

    // Encabezado

    const thead=document.createElement("thead");

    let fila="<tr>";

    fila+="<th>Producto</th>";

    meses.forEach(m=>{

        fila+="<th>"+m.toUpperCase()+"</th>";

    });

    fila+="</tr>";

    thead.innerHTML=fila;

    tabla.appendChild(thead);

    // Cuerpo

    const tbody=document.createElement("tbody");

    productos.forEach(producto=>{

        const tr=document.createElement("tr");

        let html="<td>"+producto.nombre+"</td>";

        meses.forEach(mes=>{

            const estado=producto.temporada[mes];

            html+=`
            <td
                style="
                    background:${obtenerColor(estado)};
                    color:white;
                    text-align:center;
                    font-weight:bold;
                ">
                ${estado.charAt(0)}
            </td>
            `;

        });

        tr.innerHTML=html;

        tbody.appendChild(tr);

    });

    tabla.appendChild(tbody);

    contenedor.appendChild(tabla);

}

function filtrarMes(mes){

    if(typeof productos==="undefined") return;

    const lista=productos.filter(p=>{

        return p.temporada[mes]!="No";

    });

    generarCalendario(lista);

}

function iniciarCalendario(){

    if(typeof productos==="undefined") return;

    generarCalendario(productos);

    const selector=document.getElementById("mes");

    if(selector){

        selector.addEventListener("change",function(){

            const valor=this.value.toLowerCase().substring(0,3);

            filtrarMes(valor);

        });

    }

}

window.addEventListener("load",iniciarCalendario);