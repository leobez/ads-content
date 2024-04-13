#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char formaPagamento[20];
    float valorPedido;
} Pagamento;

typedef struct {
    char sabor[20];
    float tamanho;
    int quantidade;
} Item;

typedef struct {
    char logradouro[30];
    int numero;
    char bairro[30];
    char complemento[30];
} Endereco;

typedef struct {
    int numPedido;
    char nomeCliente[40];
    char telefone[20];
    Endereco endereco;
    Item itens[10];
    Pagamento pagamento;
} Pedido;

Pagamento cadastroPagamento (char formaPagamento[], float valorPedido) {
    Pagamento P;
    strcpy(P.formaPagamento, formaPagamento);
    P.valorPedido = valorPedido;
    return P;
}

Item cadastroItem (char sabor[], float tamanho, int quantidade) {
    Item I;
    strcpy(I.sabor, sabor);
    I.tamanho = tamanho;
    I.quantidade = quantidade;
    return I;
}

Endereco cadastroEndereco (char logradouro[], int numero, char bairro[], char complemento[]) {
    Endereco E;
    strcpy(E.logradouro, logradouro);
    E.numero = numero;
    strcpy(E.bairro, bairro);
    strcpy(E.complemento, complemento);
    return E;
}

Pedido cadastroPedido (
    Pedido  *ped,
    int     numPedido,
    char    nomeCliente[],
    char    telefone[],
    Endereco endereco,
    Item    itens[],
    int     qtd_itens,
    Pagamento pagamento) {

    ped->numPedido = numPedido;
    strcpy(ped->nomeCliente, nomeCliente);
    strcpy(ped->telefone, telefone);
    ped->endereco = endereco;

    for (int a=0; a<qtd_itens; a++) {
        ped->itens[a] = itens[a];
    }

    ped->pagamento = pagamento;
    Pagamento P;
}

void exibirPedido (Pedido *P, int qtdItens) {
    printf("\n--------- CLIENTE -----------\n");
    printf("NUM. PEDIDO     : %d \n", P->numPedido);
    printf("NOME CLIENTE    : %s \n", P->nomeCliente);
    printf("TELEFONE        : %s \n\n", P->telefone);

    printf("--------- ENDERECO ----------\n");
    printf("LOGRADOURO      : %s \n", P->endereco.logradouro);
    printf("NUMERO          : %d \n", P->endereco.numero);
    printf("BAIRRO          : %s \n", P->endereco.bairro);
    printf("COMPLEMENTO     : %s \n\n", P->endereco.complemento);

    printf("---------- ITENS ------------\n");
    for (int c=0; c<qtdItens; c++) {
        printf("SABOR           : %s    \n", P->itens[c].sabor);
        printf("TAMANHO         : %.2f  \n", P->itens[c].tamanho);
        printf("QUANTIDADE      : %d    \n\n", P->itens[c].quantidade);
    }

    printf("-------- PAGAMENTO ----------\n");
    printf("FORMA PAG.      : %s    \n", P->pagamento.formaPagamento);
    printf("VALOR PEDIDO    : %.2f  \n\n", P->pagamento.valorPedido);
}

int main() {

    int qtd_pedido = 0;

    printf("\nQuantos pedidos: ");
    scanf("%d", &qtd_pedido);

    // Alocando espaço
    Pedido **pedidos;
    pedidos = (Pedido **) malloc(qtd_pedido*sizeof(Pedido *));
    if (pedidos == NULL) {printf("NULL");exit(1);}

    for (int a=0; a<qtd_pedido; a++) {
        pedidos[a] = (Pedido *) malloc(sizeof(Pedido));
        if (pedidos[a] == NULL) {printf("NULL");exit(1);}
    }

    for (int a=0; a<qtd_pedido; a++) {

        // Pedido
        int numPedido;
        char nomeCliente[40];
        char telefone[20];

        printf("\nNumero do pedido: ");
        scanf("%d", &numPedido);
        printf("Nome do cliente: ");
        scanf("%s", &nomeCliente);
        fflush(stdin);

        printf("Telefone: ");
        scanf("%s", &telefone);
        fflush(stdin);

        // Endereco
        char logradouro[30];
        int numero;
        char bairro[30];
        char complemento[30];
        Endereco end;
        printf("\nLogradouro: ");
        scanf("%s", &logradouro);
        fflush(stdin);

        printf("Numero: ");
        scanf("%d", &numero);

        printf("Bairro: ");
        scanf("%s", &bairro);
        fflush(stdin);

        printf("Complemento: ");
        scanf("%s", &complemento);
        fflush(stdin);

        end = cadastroEndereco(logradouro, numero, bairro, complemento);

        // Pedido
        int qtdItens=0;
        printf("\nQuantos itens: ");
        scanf("%d", &qtdItens);
        Item itens[qtdItens];
        for (int b=0; b<qtdItens; b++) {
            char sabor[20] = {'\0'};
            float tamanho;
            int quantidade;

            printf("\nSabor do item [ %d ]: ", b);
            scanf("%s", &sabor);
            fflush(stdin);

            printf("Tamanho do item [ %d ]: ", b);
            scanf("%f", &tamanho);

            printf("Quantidade do item [ %d ]: ", b);
            scanf("%d", &quantidade);

            itens[b] = cadastroItem(sabor, tamanho, quantidade);
        }

        // Pagamento
        char formaPagamento[30];
        float valorPedido;
        Pagamento pag;
        printf("\nForma de pagamento: ");
        scanf("%s", &formaPagamento);
        fflush(stdin);
        printf("Valor do pedido: ");
        scanf("%f", &valorPedido);
        pag = cadastroPagamento(formaPagamento, valorPedido);

        // Cadastro final do pedido
        cadastroPedido(pedidos[a], numPedido, nomeCliente, telefone, end, itens, qtdItens, pag);

        // Exibindo
        printf("\n\nExibindo o pedido cadastrado [ %d ]: \n", a);
        exibirPedido(pedidos[a], qtdItens);
    }

    for (int a=0; a<qtd_pedido; a++) {
        free(pedidos[a]);
    }
    free(pedidos);

    return 0;
}

