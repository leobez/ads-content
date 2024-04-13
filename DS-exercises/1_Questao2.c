#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void main() {

    int qtd_alunos, qtd_notas;

    printf("\nQuantos Alunos: ");
    scanf("%d", &qtd_alunos);

    printf("\nQuantas notas: ");
    scanf("%d", &qtd_notas);

    char **nomes;
    float **notas;

    nomes = (char **) malloc(qtd_alunos*sizeof(char *));
    if (nomes == NULL) {printf("NULL");exit(1);}

    notas = (float **) malloc(qtd_alunos*sizeof(float *));
    if (notas == NULL) {printf("NULL");exit(1);}

    for (int a=0; a<qtd_alunos; a++) {
        nomes[a] = (char *) malloc(40*sizeof(char));
        if (nomes[a] == NULL) {printf("NULL");exit(1);}

        notas[a] = (float *) malloc(qtd_notas*sizeof(float));
        if (notas[a] == NULL) {printf("NULL");exit(1);}
    }

    float *medias;
    medias = (float *) malloc(qtd_alunos*sizeof(float));
    if (medias == NULL) {printf("NULL");exit(1);}

    for (int a=0; a<qtd_alunos; a++) {
        printf("\nDIGITE O NOME [ %d ]: ", a);
        scanf("%s", nomes[a]);
        fflush(stdin);
        printf("\n NOTAS DO ALUNO [ %s ]", nomes[a]);

        medias[a] = 0;
        for (int b=0; b<qtd_notas; b++) {
            float nota=0;
            printf("\nNOTA [ %d ]: ", b);
            scanf("%f", &nota);
            fflush(stdin);
            notas[a][b] = nota;
            medias[a] += nota;
        }
        medias[a] = medias[a] / qtd_notas;
        printf("\n");
    }

    printf("\n");
    for (int a=0; a<qtd_alunos; a++) {
        printf("%s", nomes[a]);
        for (int b=0; b<qtd_notas; b++) {
            printf("\t%.2f", notas[a][b]);
        }
        printf("\tMEDIA: %.2f", medias[a]);
        printf("\n\n");
    }

    for(int a=0; a<qtd_alunos; a++) {
        free(nomes[a]);
        free(notas[a]);
    }
    free(nomes);
    free(notas);
    free(medias);
}
