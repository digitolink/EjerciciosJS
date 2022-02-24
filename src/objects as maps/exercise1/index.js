const phrase = "No hay bien que por mal no venga";
const counters = {};
function countLetter (letter, countersObject) {
    for(let i=0;i<phrase.length;i++){
        letra=phrase[i];
        if (counters[letra]===undefined)
            countersObject[letra]=1;
        else
            countersObject[letra]=countersObject[letra]+1;
    }
    return countersObject;
}


console.log(countLetter("a",counters));

