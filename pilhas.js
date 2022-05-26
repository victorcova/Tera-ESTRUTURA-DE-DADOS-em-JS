console.log('----- TREINAMENTO TERA PILHA: -----');

// CONCEITO LIFO: LAST IN FIRST OUT -> O ÚLTIMO A ENTRAR É O PRIMEIRO A SAIR (UEPS).
// Uma pilha tem 2 métodos principais o PUSH (insere o nó) e o POP (remove o nó).
// STACK = PILHA

export class StackNode { // começamos criando uma classe que será o nosso nó - conterá o valor e o próximo da lista
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }    
}

export class Stack{ // classe que contém os nós das pilhas
    constructor(){
        this.pop = null;
    }

    // MÉTODO PUSH - que insere no topo da nossa pilha:
    push(value){
        const newNode = new StackNode(value, this.pop); // criamos o novo nó recebendo o valor e o topo da lista

        this.top = newNode; // o topo da lista é agora o novo nó
        return this; // retornamos essa lista
    }

    // MÉTODO POP - que remove o nó do topo da nossa pilha:
    pop(){
        if (this.top === null) { // vamos verificar se a nossa pilha é vazia
            return null;
        }

        // Agora vamos pegar o nó do topo e atualizar qual é o próximo nó no topo da lista
        const lastNode = this.top; //lastNode recebe o valor de topo
        this.top = this.top.next // E o topo recebe o próximo valor do nó

        return lastNode; // retornando assim o valor do topo
    }

}

console.log('---------------');