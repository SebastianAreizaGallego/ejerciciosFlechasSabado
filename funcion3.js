let temperatura1=-20;
let temperatura2=50;
let temperatura3=-45;
let temperatura4=30;

let temperaturaMax;

/*if(temperatura1>temperatura2&&temperatura1>temperatura3&&temperatura1>temperatura4){

   temperaturaMax=temperatura1;
    
     
}else if(temperatura2>temperatura1&&temperatura2>temperatura3&&temperatura2>temperatura4){


  temperaturaMax=temperatura2;

}else if(temperatura3>temperatura1&&temperatura3>temperatura2&&temperatura3>temperatura4){

  temperaturaMax=temperatura3;


}else if(temperatura4>temperatura1&&temperatura4>temperatura2&&temperatura4>temperatura3){


    temperaturaMax=temperatura4;

}
*/



function calcularTemperaturaMaxima(temperatura1,temperatura2,temperatura3,temperatura4,){
return(Math.max(temperatura1,temperatura2,temperatura3,temperatura4,))


}

function calcularTemperaturaMinima(temperatura1,temperatura2,temperatura3,temperatura4,){
    return(Math.min(temperatura1,temperatura2,temperatura3,temperatura4,))
    
    
    }

    let calcularTemperaturaMaxima=calcularTemperaturaMaxima(-20,50,-45,30);
    let calcularTemperaturaMinima=calcularTemperaturaMinima(-20,50,-45,30);

    console.log(`el promedio de temperatura es:${(calcularTemperaturaMaxima+calcularTemperaturaMinima)/2}°C`);