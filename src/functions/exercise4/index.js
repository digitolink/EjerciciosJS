const numbers = [11,12,13,14]

function swap(pos1,pos2,arraynum){
    const temp=arraynum[pos1];
    arraynum[pos1]=arraynum[pos2];
    arraynum[pos2]=temp;

}

swap(0,3,numbers);
console.log(numbers);

swap(1,2,numbers);
console.log(numbers);