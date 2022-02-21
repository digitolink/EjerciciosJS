const numbers = [0,99,3,121,12,1,2];
let sum = 0;
let average = 0;
let counter=0;

for (let item of numbers){
    sum+=item;
    counter+=1;
}
average=sum/counter;

console.log(average);