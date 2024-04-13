/// PILHA

#include <stdio.h>
#include <stdlib.h>

typedef struct node {

    int cod;
    struct node *next;

} Node;

int cod_existe(Node **pilha1, Node **pilha2, Node **pilha3, Node **pilha4, int cod) {

    Node *aux1 = *pilha1;
    int cont1=0;
    while (aux1 != NULL) {
        if (aux1->cod == cod) {
            return 1;
        }
        cont1++;
        aux1 = aux1->next;
    }

    Node *aux2 = *pilha2;
    int cont2=0;
    while (aux2 != NULL) {
        if (aux2->cod == cod) {
            return 1;
        }
        cont2++;
        aux2 = aux2->next;
    }

    Node *aux3 = *pilha3;
    int cont3=0;
    while (aux3 != NULL) {
        if (aux3->cod == cod) {
            return 1;
        }
        cont3++;
        aux3 = aux3->next;
    }

    Node *aux4 = *pilha4;
    int cont4=0;
    while (aux4 != NULL) {
        if (aux4->cod == cod) {
            return 1;
        }
        cont4++;
        aux4 = aux4->next;
    }

    if (cont1 == 3 && cont2 == 3 && cont3 == 3 && cont4 == 3) {
        return 2;
    }

    return 0;
}

void push_container(Node **pilha1, Node **pilha2, Node **pilha3, Node **pilha4) {

    int cod=0;
    printf("\n\n Qual o codigo do container que deseja adicionar: ");
    scanf("%d", &cod);

    if (cod_existe(pilha1, pilha2, pilha3, pilha4, cod) == 1) {
        printf("\n Codigo invalido! \n");
    } else if (cod_existe(pilha1, pilha2, pilha3, pilha4, cod) == 2) {
        printf("\n Impossivel empilhar! \n");
    } else {

        // Achar qual area tem menos containeres

        int vet[4] = {0};

        Node *aux1 = *pilha1;
        while (aux1 != NULL) {
            aux1 = aux1->next;
            vet[0]++;
        }

        Node *aux2 = *pilha2;
        while (aux2 != NULL) {
            aux2 = aux2->next;
            vet[1]++;
        }

        Node *aux3 = *pilha3;
        while (aux3 != NULL) {
            aux3 = aux3->next;
            vet[2]++;
        }

        Node *aux4 = *pilha4;
        while (aux4 != NULL) {
            aux4 = aux4->next;
            vet[3]++;
        }

        int menor=0;
        int pos = 0;
        for (int a=0; a<4; a++) {
            if (a == 0) {
                menor = vet[0];
                pos = a;
            } else {
                if (vet[a] < menor) {
                    menor = vet[a];
                    pos = a;
                }
            }
        }

        Node *new_node = malloc(sizeof(Node));
        if (new_node == NULL) {printf("\n Erro de memoria \n"); return;}

        new_node->cod = cod;

        if (pos == 0) {
            new_node->next = *pilha1;
            (*pilha1) = new_node;
            printf("\n -- Container adicionado na pilha 1! -- \n");
        }

        if (pos == 1) {
            new_node->next = *pilha2;
            (*pilha2) = new_node;
            printf("\n -- Container adicionado na pilha 2! -- \n");
        }

        if (pos == 2) {
            new_node->next = *pilha3;
            (*pilha3) = new_node;
            printf("\n -- Container adicionado na pilha 3! -- \n");
        }

        if (pos == 3) {
            new_node->next = *pilha4;
            (*pilha4) = new_node;
            printf("\n -- Container adicionado na pilha 4! -- \n");

        }
    }

}


void pop_container (Node **pilha1, Node **pilha2, Node **pilha3, Node **pilha4) {

    int cod=0;
    printf("\n\n Qual o codigo do container que deseja remover: ");
    scanf("%d", &cod);

   if (cod_existe(pilha1, pilha2, pilha3, pilha4, cod) == 0) {
        printf("\n Codigo invalido! \n");

   } else {
        // Se n for o primeiro
        if ( (*pilha1)->cod != cod && (*pilha2)->cod != cod && (*pilha3)->cod != cod && (*pilha4)->cod != cod ) {
            printf("\n Impossivel retirar! \n");
            return;
        }

        if ( (*pilha1)->cod == cod ) {
            Node *to_remove = (*pilha1);
            if (to_remove->next == NULL) {
                (*pilha1) = NULL;
            } else {
                (*pilha1) = (*pilha1)->next;
            }
            printf("\n Container removido da pilha 1! \n");
            free(to_remove);
            return;
        }

        if ( (*pilha2)->cod == cod ) {
            Node *to_remove = (*pilha2);

            if (to_remove->next == NULL) {
                (*pilha2) = NULL;
            } else {
                (*pilha2) = (*pilha2)->next;
            }
            printf("\n Container removido da pilha 2! \n");
            free(to_remove);
            return;
        }

        if ( (*pilha3)->cod == cod ) {
            Node *to_remove = *pilha3;
            if (to_remove->next == NULL) {
                (*pilha3) = NULL;
            } else {
                (*pilha3) = (*pilha3)->next;
            }
            printf("\n Container removido da pilha 3! \n");
            free(to_remove);
            return;
        }

        if ( (*pilha4)->cod == cod ) {
            Node *to_remove = *pilha4;
            if (to_remove->next == NULL) {
                (*pilha4) = NULL;
            } else {
                (*pilha4) = (*pilha4)->next;
            }
            printf("\n Container removido da pilha 4! \n");
            free(to_remove);
            return;
        }
   }
}


void exibir(Node *pilha1, Node *pilha2, Node *pilha3, Node *pilha4) {

    printf("\n\n PILHA 1: ");
    Node *aux1 = pilha1;
    while (aux1 != NULL) {
        printf("\n cod: %d ... Endereco: %p", aux1->cod, aux1);
        aux1 = aux1->next;
    }

    printf("\n\n PILHA 2: ");
    Node *aux2 = pilha2;
    while (aux2 != NULL) {
        printf("\n cod: %d ... Endereco: %p", aux2->cod, aux2);
        aux2 = aux2->next;
    }

    printf("\n\n PILHA 3: ");
    Node *aux3 = pilha3;
    while (aux3 != NULL) {
        printf("\n cod: %d ... Endereco: %p", aux3->cod, aux3);
        aux3 = aux3->next;
    }

    printf("\n\n PILHA 4: ");
    Node *aux4 = pilha4;
    while (aux4 != NULL) {
        printf("\n cod: %d ... Endereco: %p", aux4->cod, aux4);
        aux4 = aux4->next;
    }

    printf("\n\n");
}

int main() {

    /// 4 areas que cabem no maximo 3 containeres

    Node *pilha1 = malloc(sizeof(Node));
    Node *pilha2 = malloc(sizeof(Node));
    Node *pilha3 = malloc(sizeof(Node));
    Node *pilha4 = malloc(sizeof(Node));

    pilha1 = NULL;
    pilha2 = NULL;
    pilha3 = NULL;
    pilha4 = NULL;

    while (1) {
        int resp=-1;
        printf("\n Voce deseja: ");
        printf("\n [0] - Sair");
        printf("\n [1] - Adicionar um container");
        printf("\n [2] - Remover um container");
        printf("\n [3] - Exibir a estrutura \n\n  > ");


        scanf("%d", &resp);

        if (resp < 0 && resp > 3) {
            printf("\n Resposta invalida");
        } else {
            if (resp == 0) {
                break;
            }

            if (resp == 1) {
                push_container(&pilha1, &pilha2, &pilha3, &pilha4);
            }

            if (resp == 2) {
                pop_container(&pilha1, &pilha2, &pilha3, &pilha4);
            }

            if (resp == 3) {
                exibir(pilha1, pilha2, pilha3, pilha4);
            }
        }
    }

    free(pilha1);
    free(pilha2);
    free(pilha3);
    free(pilha4);

    return 0;
}

