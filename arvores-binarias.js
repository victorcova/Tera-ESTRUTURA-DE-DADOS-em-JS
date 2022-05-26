console.log('----- TREINAMENTO TERA ÁRVORES BINÁRIAS: -----');

// Numa árvore chamamos de nós os nós que tem filhos (NÓS = NODES)
// Os nós que não tem filhos chamamos de folhas (LEAF)

// IMPORTANTE: Os nós (que qtem filhos) não conhece o nível acima, conhece apenas os seus filhos.
// Por essa lógica, você só acessa uma árvore de cima para baixo, nunca de baixo para cima.

// IMPORTANTE: Uma árvore binária tem apenas 2 filhos. Se passar disso torna-se uma árvore enária (que tem 'n' filhos).


class TreeNode{ // classe que será o nosso nó. Contém: o valor e uma lista de filhos (array vazio)
    constructor(value, next){
        this.value = value;
        this.children = [];
    }
}

class Tree{
    constructor(root){ // classe que representa nossa árvore com um parâmetro root pra saber qual é o nó dessa arvore
        this.root = root; // criamos um nó raiz
    }

    // Agora basta fazer um push (inserção) nos filhos (childrens) de algum nó para inserir quais são seus filhos

    search(value, node){ // para fazer uma busca é necessário saber qual é o valor e nó que vamos pesquisar (do nó para baixo)
        if (node.value === value) { // se o valor do nó for igual ao valor buscado retorna o nó
            return node;
        }

        // Se não, temos que fazer uma RECUSSÃO.
        // Recussão é quando você chama uma função dentro dela mesma.

        // A função search chama dentro dela o search novamente:
        // Neste exemplo a busca percorre toda a árvore (busca não-otimizada)
        for (const n of node.children) {
            const result = search(value, n); // busca nos nós o valor

            if (result !== null) { // Se a busca encontrou algum resultado
                return result; // retorna o resultado
            }            
        }
        return null; // retorna nulo se buscou e não encontrou o valor.
    }
}

// Busca otimizada de elementos na nossa árvore:

class BinaryTreeNode { // fazemos uma classe contendo os dados para a busca
    constructor(value, left, right){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Agora precisamos montar a estrutura da nossa árvore de busca binária
class BinarySearchTree{
    constructor(){
        this.root = null; // criamos o nó raiz (nó principal)
    }

    // Agora vamos criar agora o método de PUSH (inserir) para inserir novos nós, mas ao mesmo tempo balanceando a árvore.
    // Assim: ao inserir um nó, vamos verificar se será o primeiro. Se for será a RAIZ;
    // ... Se não for o nó raiz, vai olhar para o nó raiz, determinar se é menor ou maior;
    // ... Se for menor: insere à esquerda | Se for maior: insere a direita.

    push(value){
        // Pra começar vejamos se a árvore é vazia:
        if (this.root === null) {
            this.root = new BinaryTreeNode(value); // se for null
            return this;
        }

        // Se a árvore não for vazia precisamos ver se o valor que estamos adicionando é maior ou menor e descobrir onde esse nó será inserido
        const newNode = new BinaryTreeNode (value); // novo nó recebendo o valor
        let currentNode = this.root; // o nó atual definindo a raiz

        while (currentNode !== null ) { // loop para verificar se o nosso nó não é nulo
            if (currentNode.value > newNode.value) { // se o nó atual for menor que o valor colocaremos à esquerda
                if (currentNode.left === null) { // contudo, antes de inserir, precisamos saber se esse nó tem algum outro filho à esquerda
                    currentNode.left = newNode; // se não tem mais filhos à esquerda vamos inserir o filho atual                    
                }
                else{ // Se não houver mais filhos à esquerda, vamos ter que percorrer toda as subarvores à esquerda a partir deste nó
                    currentNode = currentNode.left; // volta a percorrer o while até encontrar onde deve inserir
                }
            }
            // agora se o valor for maior colocamos o nó à direita
            else{
                if(currentNode.right === null){ // se o nó atual for nulo
                    currentNode.right = newNode; // retorna o novo nó
                }
                else{ // Se não for nulo temos que buscar nas subarvores à direita
                    currentNode = currentNode.right;
                }
                // (...)
            }            
        }
    }


}

console.log('---------------');