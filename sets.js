// Criando um conjunto vazio
// const emptySet = new Set(); 

// Criando um conjunto a partir de um array
const set = new Set([45,68,92]);

// Verificando se existe elemento
console.log('No SET há a chave 68?\n',set.has(68));
// Verificando se existe elemento
console.log('No SET há a chave 1?\n',set.has(1)); // false

// Percorrendo um conjunto
console.log('Percorrendo um SET com o loop FOR/OF:\n',)
for(const item of set) {    
    console.log('CHAVE: ',item);
}

// Inserindo um elemento
set.add(4);
console.log('Adicionando ao SET a chave 4:\n',set);

// Removendo um elemento
set.delete(4);
console.log('Removendo do SET a chave 4:\n',set);

// Removendo todos os elementos
set.clear();
console.log('Removendo todos os valores do SET:\n',set);