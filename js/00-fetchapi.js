const URL_API ='data/data.txt';
//Referencia boton cargar Data
const loadDataBtn = document.querySelector('#cargarData');

loadDataBtn.addEventListener("click",getData);

function getData(){
    fetch(URL_API)
        .then(response =>{
/*             console.log(response);
            console.log(response.status);
            console.log(response.statusText); */
            return response.text();
        })
        .then((datos) => {
            console.log(datos);
        })
        .catch((err) => {
            console.log(err);
        })
}
