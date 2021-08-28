

function obtenerNombre(codigoNave){
 
    return(codigoNave.split(":"));

}

console.log(obtenerNombre("ARQ255:SEBASTIAN")[1]);