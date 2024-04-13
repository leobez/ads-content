/// PILHA

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node {

    int id;
    char name[30];
    int wait;
    struct node *next;

} Node;

void inserir_processo(Node **pilha) {

    Node *new_node = malloc(sizeof(Node));
    if (new_node == NULL) {
        printf("\n memoria insuficiente! \n");
        return;
    }

    int id=0;
    printf("\n Qual o id do processo que deseja adicionar: ");
    scanf("%d", &id);


    Node *aux = *pilha;
    while (aux != NULL) {
        if (aux->id == id) {
            printf("\n ID INVALIDO! \n");
            free(new_node);
            return;
        }
        aux = aux->next;
    }


    new_node->id = id;

    char nome[30];
    printf("\n Qual o nome do processo que deseja adicionar: ");
    scanf("%s", nome);
    fflush(stdin);
    strcpy(new_node->name, nome);

    int tempo;
    printf("\n Qual o tempo de espera que deseja adicionar: ");
    scanf("%d", &tempo);
    new_node->wait = tempo;

    new_node->next = *pilha;
    (*pilha) = new_node;
}

void remover_processo (Node **pilha) {

    if (*pilha == NULL) {
        printf("\n Nao ha processos... \n");
        return;
    }


    int id=0;
    printf("\n Removendo o processo! \n");

    Node *to_remove = (*pilha);
    (*pilha) = (*pilha)->next;

    free(to_remove);
}

void verificar_processo(Node *pilha) {

    printf("\n Processos cujo tempo >= 20: ");

    Node *aux = pilha;

    while (aux != NULL) {
        if (aux->wait >= 20) {
            printf("\n ID   : %d", aux->id);
            printf("\n NAME : %s", aux->name);
            printf("\n WAIT : %d \n", aux->wait);
        }

        aux = aux->next;
    }
    printf("\n\n");

}

void exibir(Node *pilha) {

    printf("\n\n PROCESSOS: ");
    Node *aux = pilha;
    while (aux != NULL) {
        printf("\n id: %d, wait: %d, name: %s", aux->id, aux->wait, aux->name);
        aux = aux->next;
    }

    printf("\n\n");
}

int main() {

    Node *pilha = malloc(sizeof(Node));
    if (pilha == NULL) {
        printf("\n Memoria insuficiente!");
        exit(1);
    }
    pilha = NULL;

    while (1) {
        int resp=-1;
        printf("\n Voce deseja: ");
        printf("\n [0] - Sair");
        printf("\n [1] - Incluir um processo");
        printf("\n [2] - checar processos cujo 'time' seja >= 20");
        printf("\n [3] - Remover um processo");
        printf("\n [4] - Exibir os processos \n\n  > ");

        scanf("%d", &resp);

        if (resp < 0 && resp > 4) {
            printf("\n Resposta invalida");
        } else {
            if (resp == 0) {
                break;
            }

            if (resp == 1) {
                inserir_processo(&pilha);
            }

            if (resp == 2) {
                verificar_processo(pilha);
            }

            if (resp == 3) {
                remover_processo(&pilha);
            }

            if (resp == 4) {
                exibir(pilha);
            }
        }
    }

    free(pilha);

    return 0;
}

