#include <stdio.h>
#include <stdlib.h>

void somarMatrizes(float **m1, float **m2, int lin, int col) {
    for (int a=0; a<lin; a++) {
        for (int b=0; b<col; b++) {
            printf("\t %.2f \t", m1[a][b]+m2[a][b]);
        }
        printf("\n\n");
    }
}

int main ( ) {

    int linha, coluna;

    printf("\nQUANTAS LINHAS: ");
    scanf("%d", &linha);
    printf("QUANTAS COLUNAS: ");
    scanf("%d", &coluna);

    float **matriz1;
    float **matriz2;

    matriz1 = (float **) malloc(linha*sizeof(float));
    if (matriz1==NULL) {printf("NULL");exit(1);}

    matriz2 = (float **) malloc(linha*sizeof(float));
    if (matriz2==NULL) {printf("NULL");exit(1);}

    for (int a=0; a<linha; a++) {
        matriz1[a] = (float *) malloc(coluna*sizeof(float));
        if (matriz1[a]==NULL) {printf("NULL");exit(1);}

        matriz2[a] = (float *) malloc(coluna*sizeof(float));
        if (matriz2[a]==NULL) {printf("NULL");exit(1);}
    }


    for (int a=0; a<linha; a++) {
        for (int b=0; b<coluna; b++) {
            float val;
            printf("\nMATRIZ 1 [%d][%d]: ",a,b);
            scanf("%f", &val);
            matriz1[a][b] = val;
        }
    }

    printf("\n");

    for (int a=0; a<linha; a++) {
        for (int b=0; b<coluna; b++) {
            float val;
            printf("\nMATRIZ 2 [%d][%d]: ",a,b);
            scanf("%f", &val);
            matriz2[a][b] = val;
        }
    }


    printf("\nEXIBINDO SOMA: \n\n");
    somarMatrizes(matriz1, matriz2, linha, coluna);


    for (int a=0; a<linha; a++) {
        free(matriz1[a]);
        free(matriz2[a]);
    }
    free(matriz1);
    free(matriz2);


}
