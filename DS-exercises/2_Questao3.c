/// FILA

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node {

    char airline[30];
    int  flight;
    float time;
    struct node *next;

} Node;

void listar_primeiro_aviao(Node *fila) {

    if (fila == NULL) {
        printf("\n Nao ha avioes! \n");
        return;
    }

    printf("\n\n LISTANDO DADOS DO PRIMEIRO AVIAO: ");
    printf("\n AIRLINE: %s", fila->airline);
    printf("\n FLIGHT: %d", fila->flight);
    printf("\n TIME: %.2f", fila->time);
    printf("\n\n");
}

void adicionar_aviao_na_espera(Node **fila) {
    Node *new_node = malloc(sizeof(Node));

    if (new_node == NULL) {
        printf("\n Memoria insuficiente!");
        return;
    }

    char airline[30];
    printf("\n AIRLINE: ");
    scanf("%s", airline);
    fflush(stdin);
    strcpy(new_node->airline, airline);

    int flight=0;
    printf("\n FLIGHT: ");
    scanf("%d", &flight);
    new_node->flight = flight;

    float time;
    printf("\n TIME: ");
    scanf("%f", &time);
    new_node->time = time;

    new_node->next = NULL;

    printf("\n Foi adicionado! \n");

    if (*fila == NULL) {
        (*fila) = new_node;
        return;
    }

    Node *aux = *fila;
    while (aux->next != NULL) {
        aux = aux->next;
    }
    aux->next = new_node;
}

void autorizar_voo(Node **fila) {

    if (*fila == NULL) {
        printf("\n Nao ha voos! \n");
        return;
    }

    Node *aux = *fila;

    printf("\n AUTORIZANDO VOO: ");
    printf("\n Airline: %s", aux->airline);
    printf("\n flight: %d", aux->flight);
    printf("\n time: %.2f \n", aux->time);

    (*fila) = aux->next;

    free(aux);
}

void listar_numero(Node *fila) {

    Node *aux = fila;

    int count=0;

    while (aux != NULL) {
        count++;
        aux = aux->next;
    }

    printf("\n Numero de avioes aguardando decolagem: %d \n", count);
}

void listar_avioes(Node *fila) {

    printf("\n\n Avioes em espera: ");
    Node *aux = fila;
    while (aux != NULL) {
        printf("\n flight: %d, time: %.2f, airline: %s", aux->flight, aux->time, aux->airline);
        aux = aux->next;
    }

    printf("\n\n");
}

int main() {

    Node *fila = malloc(sizeof(Node));
    if (fila == NULL) {
        printf("\n Memoria insuficiente!");
        exit(1);
    }
    fila = NULL;

    while (1) {
        int resp=-1;
        printf("\n Voce deseja: ");
        printf("\n [0] - Sair");
        printf("\n [1] - Lista numero de avioes aguardando decolagem");
        printf("\n [2] - Autorizar decolagem do primeiro aviao");
        printf("\n [3] - Adicionar aviao para esperar a decolagem");
        printf("\n [4] - Listar todos os avioes em espera");
        printf("\n [5] - Listar as caracteristicas do primeiro aviao \n\n  > ");
        scanf("%d", &resp);

        if (resp < 0 && resp > 5) {
            printf("\n Resposta invalida");
        } else {
            if (resp == 0) {
                break;
            }

            if (resp == 1) {
                listar_numero(fila);
            }

            if (resp == 2) {
                autorizar_voo(&fila);
            }

            if (resp == 3) {
                adicionar_aviao_na_espera(&fila);
            }

            if (resp == 4) {
                listar_avioes(fila);
            }

            if (resp == 5) {
                listar_primeiro_aviao(fila);
            }
        }
    }

    free(fila);

    return 0;
}

