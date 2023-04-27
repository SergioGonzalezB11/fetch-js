const campers = ['Camper A','Camper B','Camper C'];
function nuevoCamper(camper,callback){
    setTimeout(()=>{
        campers.push(camper);
        callback();
    },2000);
}
function mostrarCampers(){
    setTimeout(()=>{
        campers.forEach((item)=>{
            console.log(item);
        })
    },1000);
}
mostrarCampers();
nuevoCamper('Camper D',mostrarCampers);