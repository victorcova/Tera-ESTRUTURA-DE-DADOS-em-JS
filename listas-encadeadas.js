console.log('----- TREINAMENTO TERA LISTAS ENCADEADAS: -----');

// 1º - Criar o nó:
class LinkedListStore{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

// 2º - Criar uma classe para conter os nós:
class LinkedList {
    constructor(){
        this.root = null; // lista encadeada vazia
    }
    // Operações:
    // 1º - APPEND: Insere um nó no fim da nossa lista encadeada
    append(value){
        const node = new LinkedListStore(value); // inserimos um nó
        
        // Verificar se o ROOT é vazio (caso sim, o nó que acabamos de inserir será o ROOT).
        if (this.root === null) {
            this.root = node;
            return this;
        }
        
        // Mas se o ROOT não for vazio?
        // R: Temos que percorrer a lista e procurar quem é o último elemento da nossa lista encadeada.
        // Como fazer:
        
        let currentNode = this.head(); //currentNode recebe o valor do head que no caso é: null

        while (currentNode !== null) { //se o nó atual for diferente de null
            currentNode = currentNode.next; // vai mudar para o próximo nó
        }

        // Então... ao chegarmos no ultimo nó da nossa lista atribuímos este como o último elemento:
        currentNode.next = newNode;
    }

    // 2º - REMOVE: Remove um nó que contenha um determinado valor
    remove(value){
        // Vamos verificar se a lista está vazia
        if (this.root === null) {
            return null;
        }else if(this.root.value === value){ //caso o valor que procuramos for o primeiro já removemos e definimos o próximo
            const node = this.head;
            this.head = this.head.next;
            return node;
        }
        // Mas e se for qualquer outro nó (que não o primeiro)?
        // R: Aí temos que usar um loop para procurar o valor.
        // Como fazer:
        
        let currentNode = this.head; // currentNode com valor do primeiro nó
        let previousNode = null; // currentNode com valor do primeiro nó

        while (currentNode !== null && currentNode.value != value) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        // Quando sair desse loop alguma condição será verdadeira
        // Temos que saber qual dessas condições foi verdadeira:

        if (currentNode == null) { // Se o nó atual for igual a null: Não conseguimos encontrar o valor procurado dentro da lista
            return null;
        }

        // Caso não for nulo, achamos o valor!
        // Agora temos que alterar a lista já que estamos removendo o nó:
        previousNode.next= currentNode.next;
        return currentNode;
    }



}

console.log('---------------');