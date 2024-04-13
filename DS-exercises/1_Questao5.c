#include <stdio.h>
#include <stdlib.h>

void acharMaiorMenor(int v[], int *maior, int *menor) {
    for (int i=0; i<10; i++) {
        if (i == 0) {
            *maior = v[i];
            *menor = v[i];
        } else {
            if (v[i] > *maior) {
                *maior = v[i];
            }
            if (v[i] < *menor) {
                *menor = v[i];
            }
        }
    }
}


void calcularExibirSoma (int v[], int *soma) {
    for (int i=0; i<10; i++) {
        *soma += v[i];
    }
    printf("\nSOMA: %d", *soma);
}


int main ( ) {

    int v[10]= {1,2,3,4,5,6,7,8,9,10}, *maior, *menor;

    maior = (int *) malloc(sizeof(int));
    if (maior == NULL) {printf("NULL");exit(1);}

    menor = (int *) malloc(sizeof(int));
    if (menor == NULL) {printf("NULL");exit(1);}

    acharMaiorMenor(v, maior, menor);
    printf("\nMAIOR: %d", *maior);
    printf("\nMENOR: %d", *menor);

    *maior = 0;
    calcularExibirSoma(v, maior);

    free(maior);
    free(menor);
}
