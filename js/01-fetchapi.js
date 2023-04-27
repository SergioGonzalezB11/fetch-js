const URL_API = "data/campers.json";
//Consumir JSON con Fetch API (Objeto)

//Cargar referencia a un boton
const cargaBtn=document.querySelector("#cargarCampers");
cargaBtn.addEventListener("click",loadData);

//Agregar listener

//-------------------------------------
function loadData(){
    fetch(URL_API)
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            viewHTML(data);
            console.log(data);
        })
}
function viewHTML(myData){
    const {id,nombre,edad,ingles} = myData;
    //Mostrar los datos en el html
    //console.log(myData.id);
    const div=document.createElement("div");
    div.innerHTML= `<p>id: ${myData.id}</p> <p>nombre: ${myData.nombre}</p> <p>id: ${myData.edad}</p><p>id: ${myData.ingles}</p>`;
    document.body.appendChild(div)

}