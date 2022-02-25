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
function swap(pos1,pos2,arraynum){
    const temporal=arraynum[pos1];
    arraynum[pos1]=arraynum[pos2];
    arraynum[pos2]=temporal;
}

//funcion para encontrar la posicion del objeto persona que 
//tenga menor tiempo
//
function menorTiempoYSuPosicion(arrayDeObjetos){
    let menor=arrayDeObjetos[0].time;
    let posmenor=0;
    for(let i=0;i<arrayDeObjetos[i]!=undefined;i++){
        if(arrayDeObjetos[i].time < arrayDeObjetos[i+1].time){
            menor =arrayDeObjetos[i];
            posmenor=i;    
         }

    }
    return posmenor;
}


/* /* Funcion que ordena los participantes 
por su tiempo, de la persona mas rapida
a la mas lenta.
algoritmo: 
-encontramos la posicion del menor del array, 
con i=0 hasta que el objeto en la posicion i
sea undefined.
-la intercambiamos con la primera posicion.
-repetimos 
*/
    for(let i=0;chrono[i]!=undefined;i++){
        let posicionMenor=menorTiempoYSuPosicion(chrono);
        swap(posicionMenor, i, chrono);
    }


//
console.log(JSON.stringify(chrono))