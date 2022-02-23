const numbers = [11,9,13,12]

function minorInRange(pos1,pos2,arraynum){
    let menor=arraynum[pos1];
    for(let i=pos1;i<pos2;i++){
        if(arraynum[i] < arraynum[i+1]){
            menor =arraynum[i];    
         }

    }
    if(arraynum[pos2]<menor){
        menor=arraynum[pos2];
    }
    return menor;
}

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3,numbers));
