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

<<<<<<< HEAD

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
algoritmo: 
-encontramos la posicion del menor del array, 
con i=0 hasta que el objeto en la posicion i
sea undefined.
-la intercambiamos con la posicion i.
-repetimos 
*/
/**
 * 
 * @param {Array} arrayDeObjetos 
 * @returns {number} posmenor
 */
function intercambiaMenor(arrayDeObjetos){
    let tiempoMenor=arrayDeObjetos[0].time;
    let posmenor=0;
    for(let i=0;arrayDeObjetos[i+1]!=undefined;i++){
        objetoActual=arrayDeObjetos[i];
        objetoSiguiente=arrayDeObjetos[i+1];
        objetoFinal=arrayDeObjetos[arrayDeObjetos.length-1];

        if(objetoActual.time < objetoSiguiente.time){
            swap(i,i+1, arrayDeObjetos);
            posmenor =i;    
         }

    if(objetoFinal.time < tiempoMenor){
        swap(arrayDeObjetos.length-1, posmenor, arrayDeObjetos);
        posmenor=arrayDeObjetos.length;    
    }
    
    }

}

intercambiaMenor(chrono);
console.log(JSON.stringify(chrono))
=======
// Put you code here
>>>>>>> 50fd7f85ca89e713a07b82bc743cc2a568848fc2
