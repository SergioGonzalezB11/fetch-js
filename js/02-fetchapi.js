const URL_API = "data/tribus.json";
//Consumir JSON array
//Agregar referencia
const tribuBtn=document.querySelector("#cargarTribus");
tribuBtn.addEventListener("click",loadData);
//Agregar listener

//-----------------------------------------

function getData(){
    fetch(URL_API)
        .then((response)=>{
            return response.json();
        })
        .then((data) => {
            viewData(data);
        })
        .catch((err) => {
            console.log(err);
        })
}
function viewData(myData){
    myData.forEach(element => {
        const {idTribu,tribu,puntos,campers} = element;
        campers.forEach(camper =>{
            const {id,nombre,edad,ingles,rol,img} = camper;
        })
    });
    
}