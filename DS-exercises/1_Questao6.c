#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char nome[30];
    char dataValidade[20];
    float valorCalorico;
    char vitaminaPredominante;
} Fruta;

void preencherFruta(Fruta *fruta, char nome[], char data[], float vc, char vit) {
    strcpy(fruta->nome, nome);
    strcpy(fruta->dataValidade, data);
    fruta->valorCalorico = vc;
    fruta->vitaminaPredominante = vit;
}

void exibirFruta(Fruta *fruta) {
    printf("\nEXIBINDO FRUTA...");
    printf("\nNome              : %s", fruta->nome);
    printf("\nData de validade  : %s", fruta->dataValidade);
    printf("\nValor calorico    : %.2f", fruta->valorCalorico);
    printf("\nVitamina Pred.    : %c", fruta->vitaminaPredominante);
    printf("\n");
}


int main ( ) {

    Fruta *fruta;
    fruta = (Fruta *) malloc(sizeof(Fruta));

    if (fruta == NULL) {printf("NULL");exit(1);}

    char nome[30];
    char data[20];
    float valorC;
    char vitamina;

    printf("\nNOME DA FRUTA: ");
    scanf("%s", &nome);
    fflush(stdin);

    printf("DATA DE VALIDADE: ");
    scanf("%s", &data);
    fflush(stdin);

    printf("VALOR CALORICO: ");
    scanf("%f", &valorC);
    fflush(stdin);

    printf("VITAMINA PREDOMINANTE: ");
    scanf("%c", &vitamina);

    preencherFruta(fruta, nome, data, valorC, vitamina);
    exibirFruta(fruta);

    free(fruta);
}
