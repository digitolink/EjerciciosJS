let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

for(let i=1;i<=numbers.length;i++){
    for(let j=0;j<numbers.length;j++){
            if(numbers[j]<numbers[j+1]){
                let temp=numbers[j];
                numbers[j]=numbers[j+1];
                numbers[j+1]=temp;
            }
    }
}
console.log(numbers);
