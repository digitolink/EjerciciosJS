const numbers = [11,9,13,12];
const numbers2 = [1,7,5,3,2]

//funcion para intercambiar los valores entre 
//dos posiciones cualesquiera de un array
function swap(pos1,pos2,arraynum){
    const temp=arraynum[pos1];
    arraynum[pos1]=arraynum[pos2];
    arraynum[pos2]=temp;
}

//funcion para encontrar la posicion del menor 
//en un rango entre dos posiciones
function minorInRangePosition(pos1,pos2,arraynum){
    let menor=arraynum[pos1];
    let posmenor=pos1;
    for(let i=pos1;i<pos2;i++){
        if(arraynum[i] < arraynum[i+1]){
            menor =arraynum[i];
            posmenor=i;    
         }

    }
    if(arraynum[pos2]<menor){
        menor=arraynum[pos2];
        posmenor=pos2;
    }
    return posmenor;
}

//funcion para ordenar un array en un rango
//entre dos posiciones
function inRangeOrdered(pos1,pos2,arraynum){
/* 
algoritmo: 
-encontramos la posicion del menor del array en el rango
pos1+i a pos2, con i=0 hasta pos2.
-la intercambiamos con la primera posicion.
-repetimos 
*/
    for(let i=pos1;i<=pos2;i++){
        let posicionMenor=minorInRangePosition(i,pos2,arraynum);
        swap(posicionMenor, i, arraynum);
    }

}

inRangeOrdered(0,3,numbers);
console.log(numbers);
inRangeOrdered(1,3,numbers2);
console.log(numbers2);