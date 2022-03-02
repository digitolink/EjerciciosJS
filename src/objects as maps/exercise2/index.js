const chrono = [
    {
        name: "Ana",
        time: 102.01
    },
    {
        name: "Pablo",
        time: 105.82
    },
    {
        name: "Marco",
        time: 100.4
    },
    {
        name: "Luisa",
        time: 103.39
    },
    {
        name: "Pedro",
        time: 109.09
    },
]


//funcion para intercambiar los valores entre 
//dos posiciones cualesquiera de un array

/**
 * 
 * @param {number} pos1 
 * @param {number} pos2 
 * @param {Array} arraynum 
 */
function swap(pos1,pos2,arraynum){
    const temporal=arraynum[pos1];
    arraynum[pos1]=arraynum[pos2];
    arraynum[pos2]=temporal;
}

/*funcion para encontrar la posicion del objeto persona que 
tenga menor tiempo
*/
/**
 * 
 * @param {Array} arrayDeObjetos 
 * @returns {number} posmenor
 */

function intercambiaMenor(arrayDeObjetos){
   
    for(let i=0;i<arrayDeObjetos.length-1;i++){
        for(let j=i+1;j<arrayDeObjetos.length-1;j++){
            objetoActual=arrayDeObjetos[i];
            objetoSiguiente=arrayDeObjetos[j];

            if(objetoActual.time > objetoSiguiente.time)
                swap(i,j, arrayDeObjetos);   
         
            
        }
    }
}



intercambiaMenor(chrono);
console.log(JSON.stringify(chrono))
