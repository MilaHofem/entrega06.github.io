let carritoArray = [];
let subtotalGeneral = document.getElementById("subtotalGeneral");
let costoXenvío = document.getElementById("costoXenvío");
let costoTotal = document.getElementById("costoTotal");



// entrega 6:

function subtotales(){
    let subtotales = document.getElementsByClassName("subtotales");
    let sumaTotales = 0;
    for(let i = 0; i < subtotales.length; i++){
        sumaTotales += parseInt(subtotales[i]).innerHTML;
    }
    subtotalGeneral.innerHTML = sumaTotales;
}

function subTotal(id, cost){
    let cant = parseInt(document.getElementById(`cantProd${id}`).value);
    console.log(cant)
    let total = (cant*cost)
    document.getElementById(`subProd${id}`).innerHTML = total;
    subtotales();
}



function mostrarDatosCarrito(array){


    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        htmlContentToAppend += `

        <div class="row">
            <div class="col">
            <img src="img/prod${item.id}_1.jpg" id="nombreProd" alt="imagenItem"></p>
            </div>
            <div class="col">
            <p id="nombreProd">${item.name}</p>
            </div>
            <div class="col">
            <p id="costoProd${item.id}">${item.currency} ${item.unitCost}</p>
            </div>
            <div class="col">
                <input class="form-control-price" type="number" onchange="subtotal(${item.id}, ${item.unitCost})" id="cantProd${item.id}" value=${item.count} w="75px";> 
            </div>
            <div class="col">
               <label class="subtotales" id="subProd${item.id}">${item.unitCost*item.count}</label>
            </div>

            </div>
        </div>
        
        `
        document.getElementById("carrito-list-container").innerHTML = htmlContentToAppend;
    }
    subtotales();
}


document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(carrito).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            carritoArray = resultObj.data.articles;
            mostrarDatosCarrito(carritoArray);
        }

    });
 });
