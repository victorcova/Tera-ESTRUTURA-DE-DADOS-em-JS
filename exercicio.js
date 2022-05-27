console.log('----- EXERCÍCIOS ARRAY: -----');

// Entrada 1: 
// array = [8, 7, 2, 5, 3, 1];
// soma = 10;

// Entrada 2: 
array = [5, 2, 6, 8, 1, 9];
soma = 12;
response = 0;

for (let a = 0; a < array.length; a++) {
    let currentNum = array[a];

    for (let b = 0; b < array.length; b++) {
        let numTeste = array[b];
        let somatorio = currentNum + numTeste;        

        if (array[a] !== array[b]) {
            if (somatorio == soma) {
                response = `Par encontrado (igual a ${soma}): (${array[a]},${array[b]})\n`;
                console.log(response);
            }
        }        
    }        
}

if (response === 0) {
    console.log(`Nenhuma soma dos elementos do array foi igual a ${soma}.`)
}

console.log('---------------');