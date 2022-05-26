console.log('----- TREINAMENTO TERA FILAS: -----');

// CONCEITO FIFO: FIRT IN FIRST OUT -> O PRIMEIRO A ENTRAR É O PRIMEIRO A SAIR (PEPS).

export class QueueNode { // Queue = Fila
    constructor(value){
        this.value = value; // capta o valor do nó da fila
        this.next = null; // capta o valor do proximo nó da fila
    }
}

export class Queue { // classe que contém os nós
    constructor(){
        this.first = null; // capta que é o primeiro nó da lista
        this.last = null; // capta que é o ultimo nó da lista
    }

    // Uma fila tem 2 métodos principais: ENFILEIRAMENTO(queue) e DESENFILEIRAMENTO(dequeue)

    // ENFILEIRAMENTO - QUEUE:
    queue(value){
        const node = new QueueNode(value); // Criamos o nó.

        // Mas quando um novo nó entra ele deve ir para última posição. Logo temos que verificar a posição:
        if (this.last !== null) {
            this.last.next = node; // atualizamos o ultimo nó
        }

        // E dizemos que agora o ultimo nó recebe tal valor
        this.last = node;

        // Precisamos também verificar se este é o primeiro nó que ta sendo inserido na nossa fila
        if (this.first === null) {
            this.first = this.last; // Se é o primeiro nó da fila, este é igual ao meu ultimo
        }

        return this; // agora é só retornar a lista.
    }

    // DESENFILEIRAMENTO - DEQUEUE:
    dequeue(){ //Perceba que não precisa ter agumento, pois como é FIFO a regra é clara: sairá sempre o primeiro elemento da lista.

        // primeiro precisamos saber se a lista está vazia, pois se vazia não precisamos remover nada.
        if (this.first === null) {
            return null;
        }

        // Caso a lista não esteja vazia, temos que retornar o primeiro item da lista (first)
        // Também temos que alterar a referencia para o próximo item da fila (next) se tornar o primeiro
        
        // Nessa lógica é importante saber se essa fila tem apenas uma posição.
        // Se houver apenas uma posição é só remover e não precisa atualizar as posições, apenas anulá-las.

        const firstNode = this.first; // capta o primeiro nó (que é o que precisamos retornar)
        this.first = this.first.next // E vamos alterar quem é o primeiro nó atribuindo-o como o próximo

        // Agora precisamos saber se apos remover o item se a lista ficou vazia
        // Se isso acontecer precisamos anular o último item

        if (this.first === null) {
            this.last = null;            
        }

        return firstNode; // retornamos o primeiro nó
    }




}




console.log('---------------');