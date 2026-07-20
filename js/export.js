/*==========================================================
 AGRO DASHBOARD PERÚ 2026
 export.js
==========================================================*/


// =====================================
// EXPORTAR TABLA A EXCEL
// =====================================

function exportarExcel(){

    const tabla = document.querySelector("table");


    if(!tabla){

        alert("No existe tabla para exportar");

        return;

    }


    let datos = tabla.outerHTML;


    let archivo = new Blob(

        [
            "\ufeff",
            datos
        ],

        {
            type:"application/vnd.ms-excel"
        }

    );


    let url = URL.createObjectURL(archivo);


    let enlace=document.createElement("a");


    enlace.href=url;


    enlace.download="Agro_Dashboard_Peru_2026.xls";


    enlace.click();


    URL.revokeObjectURL(url);

}



// =====================================
// EXPORTAR CSV
// =====================================

function exportarCSV(){


    const tabla=document.querySelector("table");


    let filas=[];


    tabla.querySelectorAll("tr")

    .forEach(fila=>{


        let columnas=[];


        fila.querySelectorAll("th,td")

        .forEach(columna=>{


            columnas.push(

                columna.innerText

            );


        });


        filas.push(columnas.join(","));


    });



    let contenido=filas.join("\n");


    let archivo=new Blob(

        [
            contenido
        ],

        {
            type:"text/csv;charset=utf-8;"
        }

    );



    let url=URL.createObjectURL(archivo);


    let enlace=document.createElement("a");


    enlace.href=url;


    enlace.download="Productos_Agro_Peru_2026.csv";


    enlace.click();


}



// =====================================
// EXPORTAR PDF
// Requiere jsPDF
// =====================================

function exportarPDF(){


    const contenido=document.querySelector(".main");


    if(!contenido){

        alert("No existe dashboard");

        return;

    }



    window.print();


}



// =====================================
// IMPRIMIR DASHBOARD
// =====================================

function imprimirDashboard(){


    window.print();


}



// =====================================
// CREAR BOTONES AUTOMÁTICOS
// =====================================

function crearBotonesExportacion(){


    const topbar=document.querySelector(".topbar");


    if(!topbar) return;



    const div=document.createElement("div");


    div.className="botonesExport";


    div.innerHTML=`

        <button onclick="exportarExcel()">
        📊 Excel
        </button>


        <button onclick="exportarCSV()">
        📄 CSV
        </button>


        <button onclick="exportarPDF()">
        📕 PDF
        </button>

    `;


    topbar.appendChild(div);


}



window.addEventListener(

"load",

()=>{


    crearBotonesExportacion();


    console.log(
    "Exportación activada"
    );


});
