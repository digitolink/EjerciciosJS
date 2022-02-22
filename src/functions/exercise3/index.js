
function power(num, potencia){
    
    res=num*potencia;
    if (potencia===undefined){
        res=num**(1/2);
    }
    else res=num**potencia;
    return res;
}

console.log(power(25))
console.log(power(8,1/3))
console.log(power(2,3))
console.log(power(5,2))