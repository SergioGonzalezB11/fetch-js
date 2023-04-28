const URL_API = "data/tribus.json";
//Consumir JSON array
//Agregar referencia
const tribuBtn=document.querySelector("#cargarTribus");
tribuBtn.addEventListener("click",loadData);
//Agregar listener

//-----------------------------------------

function loadData(){
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
    const divContenedor = document.querySelector("#contenedor");
    divContenedor.innerHTML="";
    myData.forEach(element => {
        const {idTribu,tribu,puntos,campers} = element;
        const divTribu = document.createElement("div");
        divTribu.className = "tribus";
        divTribu.innerHTML = /*html*/`
        <p> Id Tribu : ${idTribu}</p>
        <p> Nombre Tribu : ${tribu}</p>
        <p> Puntos : ${puntos}</p>`;
        divContenedor.appendChild(divTribu);
        
        

        
        ;
        campers.forEach(camper =>{
            const {id,nombre,edad,ingles,rol,img} = camper;
            const divCampers = document.createElement("div");
            divCampers.className = "campers";  
            const divImg = document.createElement("div");
            const divInfo = document.createElement("div")
            divImg.className = "img";
            divImg.innerHTML = /*html*/`
            <img src="${img}" alt="">
            `
            divInfo.className = "info";
            divInfo.innerHTML = /*html*/`
            <p> Id  : ${id}</p>
            <p> Nombre  : ${nombre}</p>
            <p> Edad : ${edad}</p>
            <p> Ingles : ${ingles}</p>
            <p> Rol Tribu : ${rol}</p>
            `
            divCampers.appendChild(divImg);
            divCampers.appendChild(divInfo);
            divTribu.appendChild(divCampers);
        })

    });
    
}