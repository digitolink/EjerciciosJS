const people = [
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


function aFasterThanB (a, b) {
    return (a.time>b.time);
}

function bFasterThanA (a,b) {
    return (b.time>a.time);
}

function swap (idxA, idxB, array) {
    const temporal=array[idxA];
    array[idxA]=array[idxB];
    array[idxB]=temporal;
}

function sort (comparator, array) {
    for ( let currentIdx = 0 ; currentIdx < array.length-1 ; currentIdx++) {
        for ( let nextIdx = currentIdx+1 ; nextIdx < array.length ; nextIdx++ ) {
            if (
                comparator(array[currentIdx], array[nextIdx])
            ) swap (currentIdx, nextIdx, array)
        }
    }
}



sort(aFasterThanB, people)
for (indice in people)
    console.log(people[indice]);
sort(bFasterThanA, people)
for (indice in people)
    console.log(people[indice]);


