#include <stdio.h>
#include <stdlib.h>

#define BOLD  		"\e[1m"
#define COLOR_OFF   "\e[m"
#define GREEN		"\033[32m"
#define RED			"\033[31m"
#define BLUE		"\033[34m"

int esta_correto() {
	while (1) {
		char resposta;

		printf("\n Esta correto? [S/N]: ");
		scanf(" %c", &resposta);
		fflush(stdin);

		if (resposta == 's' || resposta == 'S' ) {
			return 1;
		} else if (resposta == 'n' || resposta == 'N' ) {
			return 0;
		} else {
			printf("\n Resposta invalida... \n");
		}
	}

}

void calcular_simplex_explicativo(double *funcao_objetivo, int qtd_var, int qtd_res, double restricoes[qtd_res][qtd_var+1]) {

	/***************************
			TABELA INICIAL
	****************************/
	printf("\n\n Tabela inicial: \n\n");

	// Cabeçalho...
	int cont_x=1;
	int cont_f=1;
	for (int a=0; a<(qtd_var+qtd_res+2); a++) {
		if (a == 0) {
			printf(" Z \t");
		} else if (a > 0 && a <= qtd_var) {
			printf("  X%d \t", cont_x);
			cont_x++;
		} else if (a > qtd_var && a <= (qtd_var+qtd_res)) {
			printf("  f%d \t", cont_f);
			cont_f++;
		} else {
			printf("  b ");
		}
	}
	printf("\n\n");

	// Criar tabela...
	int linhas = qtd_res+1;
	int colunas = qtd_var+qtd_res+2;

	double tabela[linhas][colunas];

	// Montar conteudo da tabela INICIAL
	for (int a=0; a<linhas; a++) {
		for (int b=0; b<colunas; b++) {
			if (b == 0) {
				// Inserindo os valores de 'Z'.
				// funcao objetivo
				if (a == 0) {
					tabela[a][b] = 1;
				// restricoes
				} else {
					tabela[a][b] = 0;
				}
			} else if (b > 0 && b <= qtd_var) {
				// Inserindo os valores de 'X'.
				// funcao objetivo
				if (a == 0) {
					int temp = funcao_objetivo[b-1];
					if (temp != 0 ) {temp = temp * -1;}
					tabela[a][b] = temp;
				// restricoes
				} else {
					tabela[a][b] = restricoes[a-1][b-1];
				}

			} else if (b > qtd_var && b <= qtd_var+qtd_res) {
				// Inserindo os valores de 'F'.
				// funcao objetivo
				if (a == 0) {
					tabela[a][b] = 0;
				// restricoes
				} else {
					if (b == qtd_var + a) {
						tabela[a][b] = 1;
					} else {
						tabela[a][b] = 0;
					}
				}
			} else {
				// Inserindo os valores de 'b'.
				// funcao objetivo
				if (a == 0) {
					tabela[a][b] = 0;
				// restricoes
				} else {
					tabela[a][b] = restricoes[a-1][qtd_var];
				}
			}
		}
	}

	// Exibindo tabela INICIAL
	for (int a=0; a<linhas; a++) {
		for (int b=0; b<colunas; b++) {
			printf(" %.1lf \t", tabela[a][b]);
		}
		printf("\n");
	}

	/* AS ITERAÇÕES COMEÇAM AQUI */

	printf("\n\n Comecando as iteracoes...");
	int iteracao_count = 0;
	int flag_soluc_ilimitada = 0;

	while (1) {
		iteracao_count++;
		printf("\n\n ITERACAO: %d \n", iteracao_count);

		/*
			valor_coluna_pivo = menor negativo encontrado na primeira coluna.
			index_coluna_pivo = coluna no qual esse valor se encontra.
		*/
		double 	valor_coluna_pivo=0;
		int 	index_coluna_pivo=0;

		printf("\n----------------------------------------------------------------------------------");
		printf("\n 1 passo: encontrar o menor valor da primeira linha... ");
		for (int a=1; a<=qtd_var+qtd_res; a++) {
			if (tabela[0][a] < valor_coluna_pivo) {
				valor_coluna_pivo = tabela[0][a];
				index_coluna_pivo = a;
			}
		}
		printf("\n\n Menor valor da primeira linha encontrado: %.2lf na coluna %d.", valor_coluna_pivo, index_coluna_pivo+1);
		printf("\n----------------------------------------------------------------------------------\n");


		/*
			valores_temp = vetor que armazena o resultado da divisão entre o ultimo valor de cada linha abaixo da primeira pelo
			valor de sua respectiva linha na index_coluna_pivo.
		*/

		double valores_temp[4];
		int k=0;

		printf("\n----------------------------------------------------------------------------------");
		printf("\n 2 passo: determinar a linha pivo. Este sera o menor valor positivo encontrado adiante: \n");

		double temp = 0;

		for (int a=1; a<=qtd_res; a++) {

			temp = (double) tabela[a][index_coluna_pivo];

			// (...)
			if (temp > 0 && temp < 0.000000001) {
				temp = 0;
			}

			if (temp != 0) {

				valores_temp[k] = 0;
				valores_temp[k] = (double) (tabela[a][qtd_res+qtd_var+1] / ((double)tabela[a][index_coluna_pivo]));

				printf("\n %.1lf / %.1lf = %.1lf", tabela[a][qtd_res+qtd_var+1], tabela[a][index_coluna_pivo], valores_temp[k]);

			} else {
				valores_temp[k] = 0.0;
				printf("\n %.1lf / %.1lf = NULL", tabela[a][qtd_res+qtd_var+1], tabela[a][index_coluna_pivo]);
			}

			k++;
			printf("\n");
		}

		/*
			menor_valor_pivo = o menor valor encontrado dentre as divisoes realizadas;
			index_linha_pivo = o index deste valor;
		*/
		double 	menor_valor_pivo=0;
		int 	index_linha_pivo=0;

		for (int a=0; a<qtd_res; a++) {
			if (a == 0) {
				if (valores_temp[a] > 0) {
					menor_valor_pivo = valores_temp[a];
					index_linha_pivo = a+1;
				}
			} else {
				if (valores_temp[a] < menor_valor_pivo || menor_valor_pivo == 0) {
					if (valores_temp[a] > 0) {
						menor_valor_pivo = valores_temp[a];
						index_linha_pivo = a+1;
					}
				}
			}
		}

		// Ver se a solucao é ilimitada (caso nao haja valores positivos na coluna)
		int flag_temp=0;
		for (int a=0; a<qtd_res; a++) {
			if (valores_temp[a] > (double)0) {
				flag_temp=1;
				break;
			}
		}

		if (flag_temp == 0) {
			flag_soluc_ilimitada++;
			break;
		}

		printf("\n\n Menor valor positivo encontrado: %.2lf. Portanto a linha pivo e: %d.", menor_valor_pivo, index_linha_pivo+1);
		printf("\n----------------------------------------------------------------------------------\n");

		/*
			nova_linha_pivo = a nova linha pivo sera a linha pivo encontrada com todos os seus valores divididos pelo valor
			encontrado na respectiva linha na index_coluna_pivo;
		*/
		printf("\n----------------------------------------------------------------------------------");
		printf("\n 3 passo: construir a nova linha pivo \n");
		double nova_linha_pivo[colunas];


		for (int a=0; a<colunas; a++) {
			nova_linha_pivo[a] = 0;
		}

		for (int a=0; a<colunas; a++) {
			double val_divis = tabela[index_linha_pivo][a];
			double result = val_divis / tabela[index_linha_pivo][index_coluna_pivo];
			nova_linha_pivo[a] = result;
		}

		printf("\n Nova linha pivo: ");
		for (int a=0; a<colunas; a++) {
			printf("  %.2lf  ", nova_linha_pivo[a]);
		}
		printf("\n----------------------------------------------------------------------------------\n");

		/*
			A nova tabela sera: os elementos da nova linha pivo multiplicados pelo inverso do valor da respectiva linha na posicao
			index_coluna_pivo somado com os valores da linha da tabela anterior.
		*/
		printf("\n----------------------------------------------------------------------------------");
		printf("\n 4 passo: construir todas as novas linhas \n");

		double valor_temp=0;

		for (int a=0; a<linhas; a++) {

			valor_temp = tabela[a][index_coluna_pivo];

			for (int b=0; b<colunas; b++) {
				if (a != index_linha_pivo) {
					double val_temp = (double) ((nova_linha_pivo[b]*(-1*valor_temp))+tabela[a][b]);
					tabela[a][b] = val_temp;
				} else {
					tabela[a][b] = nova_linha_pivo[b];
				}
			}
			printf("\n Nova %d linha: ", a+1);
			for (int b=0; b<colunas; b++) {
				printf(" %.2lf ", tabela[a][b]);
			}
		}
		printf("\n----------------------------------------------------------------------------------\n");

		// Exibindo a nova tabela
		printf("\n----------------------------------------------------------------------------------");
		printf("\n Nova Tabela: \n\n");

		cont_x=1;
		cont_f=1;

		for (int a=0; a<colunas; a++) {
			if (a == 0) {
				printf(" Z \t");
			} else if (a > 0 && a <= qtd_var) {
				printf("  X%d \t", cont_x);
				cont_x++;
			} else if (a > qtd_var && a <= (qtd_var+qtd_res)) {
				printf("  f%d \t", cont_f);
				cont_f++;
			} else {
				printf("  b ");
			}
		}

		printf("\n\n");

		for (int a=0; a<linhas; a++) {
			for (int b=0; b<colunas; b++) {
				printf(" %.1lf \t", tabela[a][b]);
			}
			printf("\n");
		}
		printf("---------------------------------------------------------------------------------- \n");

		// Variaveis basicas
		printf("\n VARIAVEIS BASICAS \n");

		int flag_vb=0;
		int linha_vb;

		for (int a=0; a<colunas; a++) {

			flag_vb=0;
			linha_vb=0;

			for (int b=0; b<linhas; b++) {
				if (tabela[b][a] != 0 && tabela[b][a] != 1) {
					flag_vb = 1;
				}
				if (tabela[b][a] == 1) {
					linha_vb = b;
				}
			}

			if (flag_vb != 1) {
				// É variavel basica
				if (a != 0) {
					if (a > 0 && a<=qtd_var) {
						// X
						printf(" X%d = ", a);
					} else if (a > qtd_var && a<=qtd_res+qtd_var) {
						// f
						printf(" f%d = ", a-qtd_var);
					} else {
						printf("");
					}
					printf(" %.1lf \n", tabela[linha_vb][colunas-1]);
				}
			}
		}

		// Variaveis nao basicas
		printf("\n VARIAVEIS NAO BASICAS ");

		int flag_vnb=0;
		int linha_vnb;

		for (int a=0; a<colunas; a++) {

			flag_vnb=0;
			linha_vnb=0;

			for (int b=0; b<linhas; b++) {

				if (tabela[b][a] != 0 && tabela[b][a] != 1) {
					flag_vnb = 1;
					linha_vnb = b;
					break;
				}

			}

			if (flag_vnb == 1) {
				// NAO E variavel basica
				if (a == 0) {
					// Z
					printf("");

				} else if (a > 0 && a<=qtd_var) {
					// X
					printf("\n X%d = 0", a);

				} else if (a > qtd_var && a<=qtd_res+qtd_var) {
					// f
					printf("\n f%d = 0 ", a-qtd_var);

				} else {
					printf("");
				}
			}
		}
		printf("\n");

		printf("\n Valor de Z encontrado: " BOLD GREEN "%.3f \n" COLOR_OFF, tabela[0][qtd_res+qtd_var+1]);

		// Verificar se necessita mais uma iteração
		int flag=0;
		for (int a=0; a<colunas; a++) {
			if (tabela[0][a] < 0) {
				flag = 1;
			}
		}

		if (flag == 1) {
			printf( BOLD RED "\n Valor encontrado nao e otimo, portanto outra iteracao e necessaria... \n\n" COLOR_OFF);
			system("pause");
		} else {
			printf( BOLD GREEN "\n Valor otimo foi encontrado!" COLOR_OFF);
			break;
		}
	}

	if (flag_soluc_ilimitada != 0) {
		printf("\n----------------------------------------------------------------------------------");
		printf("\n\n A solucao e ilimitada, pois todos os valores da coluna sao negativos ou nulos. \n\n");
		system("pause");
		return;
	}

	printf("\n\n Total de iteracoes necessarias: %d \n\n", iteracao_count);
	system("pause");
}

void calcular_simplex_direto(double *funcao_objetivo, int qtd_var, int qtd_res, double restricoes[qtd_res][qtd_var+1]) {
	
	/***************************
			TABELA INICIAL
	****************************/

	// Criar tabela...
	int linhas = qtd_res+1;
	int colunas = qtd_var+qtd_res+2;

	double tabela[linhas][colunas];

	// Montar conteudo da tabela INICIAL
	for (int a=0; a<linhas; a++) {
		for (int b=0; b<colunas; b++) {
			if (b == 0) {
				// Inserindo os valores de 'Z'.
				// funcao objetivo
				if (a == 0) {
					tabela[a][b] = 1;
				// restricoes
				} else {
					tabela[a][b] = 0;
				}
			} else if (b > 0 && b <= qtd_var) {
				// Inserindo os valores de 'X'.
				// funcao objetivo
				if (a == 0) {
					int temp = funcao_objetivo[b-1];
					if (temp != 0 ) {temp = temp * -1;}
					tabela[a][b] = temp;
				// restricoes
				} else {
					tabela[a][b] = restricoes[a-1][b-1];
				}

			} else if (b > qtd_var && b <= qtd_var+qtd_res) {
				// Inserindo os valores de 'F'.
				// funcao objetivo
				if (a == 0) {
					tabela[a][b] = 0;
				// restricoes
				} else {
					if (b == qtd_var + a) {
						tabela[a][b] = 1;
					} else {
						tabela[a][b] = 0;
					}
				}
			} else {
				// Inserindo os valores de 'b'.
				// funcao objetivo
				if (a == 0) {
					tabela[a][b] = 0;
				// restricoes
				} else {
					tabela[a][b] = restricoes[a-1][qtd_var];
				}
			}
		}
	}


	/* AS ITERAÇÕES COMEÇAM AQUI */

	int iteracao_count = 0;
	int flag_soluc_ilimitada = 0;

	while (1) {
		iteracao_count++;

		/*
			valor_coluna_pivo = menor negativo encontrado na primeira coluna.
			index_coluna_pivo = coluna no qual esse valor se encontra.
		*/
		double 	valor_coluna_pivo=0;
		int 	index_coluna_pivo=0;

		for (int a=1; a<=qtd_var+qtd_res; a++) {
			if (tabela[0][a] < valor_coluna_pivo) {
				valor_coluna_pivo = tabela[0][a];
				index_coluna_pivo = a;
			}
		}


		/*
			valores_temp = vetor que armazena o resultado da divisão entre o ultimo valor de cada linha abaixo da primeira pelo
			valor de sua respectiva linha na index_coluna_pivo.
		*/

		double valores_temp[4];
		int k=0;

		double temp = 0;
		for (int a=1; a<=qtd_res; a++) {

			temp = (double) tabela[a][index_coluna_pivo];

			// (...)
			if (temp > 0 && temp < 0.000000001) {
				temp = 0;
			}

			if (temp != 0) {
				valores_temp[k] = 0;
				valores_temp[k] = (double) (tabela[a][qtd_res+qtd_var+1] / ((double)tabela[a][index_coluna_pivo]));
			} else {
				valores_temp[k] = 0.0;
			}

			k++;
		}

		/*
			menor_valor_pivo = o menor valor encontrado dentre as divisoes realizadas;
			index_linha_pivo = o index deste valor;
		*/
		double 	menor_valor_pivo=0;
		int 	index_linha_pivo=0;

		for (int a=0; a<qtd_res; a++) {
			if (a == 0) {
				if (valores_temp[a] > 0) {
					menor_valor_pivo = valores_temp[a];
					index_linha_pivo = a+1;
				}
			} else {
				if (valores_temp[a] < menor_valor_pivo || menor_valor_pivo == 0) {
					if (valores_temp[a] > 0) {
						menor_valor_pivo = valores_temp[a];
						index_linha_pivo = a+1;
					}
				}
			}
		}

		// verificar se a solucao é ilimitada
		int flag_temp=0;
		for (int a=0; a<qtd_res; a++) {
			if (valores_temp[a] > (double)0) {
				flag_temp=1;
				break;
			}
		}

		// Ver se a solucao é ilimitada (caso nao haja valores positivos na coluna)
		if (flag_temp == 0) {
			flag_soluc_ilimitada++;
			break;
		}


		/*
			nova_linha_pivo = a nova linha pivo sera a linha pivo encontrada com todos os seus valores divididos pelo valor
			encontrado na respectiva linha na index_coluna_pivo;
		*/


		double nova_linha_pivo[colunas];

		for (int a=0; a<colunas; a++) {
			nova_linha_pivo[a] = 0;
		}

		for (int a=0; a<colunas; a++) {

			double val_divis = tabela[index_linha_pivo][a];
			double result = val_divis / tabela[index_linha_pivo][index_coluna_pivo];
			nova_linha_pivo[a] = result;

		}


		/*
			A nova tabela sera: os elementos da nova linha pivo multiplicados pelo inverso do valor da respectiva linha na posicao
			index_coluna_pivo somado com os valores da linha na tabela anterior.
		*/

		double valor_temp=0;
		for (int a=0; a<linhas; a++) {

			valor_temp = tabela[a][index_coluna_pivo];

			for (int b=0; b<colunas; b++) {
				if (a != index_linha_pivo) {
					double val_temp = (double) ((nova_linha_pivo[b]*(-1*valor_temp))+tabela[a][b]);
					tabela[a][b] = val_temp;

				} else {
					tabela[a][b] = nova_linha_pivo[b];
				}
			}
		}

		// Verificar se necessita mais uma iteração
		int flag=0;
		for (int a=0; a<colunas; a++) {
			if (tabela[0][a] < 0) {
				flag = 1;
			}
		}

		if (flag != 1) {
			break;
		} 
	}

	if (flag_soluc_ilimitada != 0) {
		printf("\n----------------------------------------------------------------------------------");
		printf("\n\n A solucao e ilimitada! \n\n");
		system("pause");
		return;
	}

	// Variaveis basicas
	printf("\n VARIAVEIS BASICAS \n");

	int flag_vb=0;
	int linha_vb;

	for (int a=0; a<colunas; a++) {

		flag_vb=0;
		linha_vb=0;

		for (int b=0; b<linhas; b++) {
			if (tabela[b][a] != 0 && tabela[b][a] != 1) {
				flag_vb = 1;
			}
			if (tabela[b][a] == 1) {
				linha_vb = b;
			}
		}

		if (flag_vb != 1) {
			// É variavel basica
			if (a != 0) {
				if (a > 0 && a<=qtd_var) {
					// X
					printf(" X%d = ", a);
				} else if (a > qtd_var && a<=qtd_res+qtd_var) {
					// f
					printf(" f%d = ", a-qtd_var);
				} else {
					printf("");
				}
				printf(" %.1lf \n", tabela[linha_vb][colunas-1]);
			}
		}
	}

	// Variaveis nao basicas
	printf("\n VARIAVEIS NAO BASICAS ");

	int flag_vnb=0;
	int linha_vnb;

	for (int a=0; a<colunas; a++) {

		flag_vnb=0;
		linha_vnb=0;

		for (int b=0; b<linhas; b++) {

			if (tabela[b][a] != 0 && tabela[b][a] != 1) {
				flag_vnb = 1;
				linha_vnb = b;
				break;
			}

		}

		if (flag_vnb == 1) {
			// NAO E variavel basica
			if (a == 0) {
				// Z
				printf("");

			} else if (a > 0 && a<=qtd_var) {
				// X
				printf("\n X%d = 0", a);

			} else if (a > qtd_var && a<=qtd_res+qtd_var) {
				// f
				printf("\n f%d = 0 ", a-qtd_var);

			} else {
				printf("");
			}
		}
	}
	printf("\n");

	printf("\n Valor de Z encontrado: " BOLD GREEN "%.3f \n" COLOR_OFF, tabela[0][qtd_res+qtd_var+1]);
	printf( BOLD GREEN "\n Valor otimo foi encontrado!" COLOR_OFF);

	printf("\n\n Total de iteracoes necessarias: %d \n\n", iteracao_count);
	system("pause");
}

void montar_simplex() {

	/*
		O objetivo dessa funcao e adquirir e armazenar os dados necessarios para a realizacao do simplex.

		Esses dados sao:
			> Funcao objetivo, ou seja, suas variaveis. (x1, x2, x3 etc...)
			> Restricoes, ou seja, suas variaveis. (x1, x2, x3 etc...)
	*/

	system("cls");
	printf("\n |--------------------------------------------------------------------|");
	printf("\n |                                                                    |");
	printf("\n | MENU - Simplex tabelado - MAXIMIZACAO                              |");
	printf("\n |         > Restricoes apenas <=  (menor ou igual)                   |");
	printf("\n |         > Variaveis restritas ao primeiro quadrante                |");
	printf("\n |                                                                    |");
	printf("\n |--------------------------------------------------------------------|");
	printf("\n");
	
	while (1) {

		/****************************************
		 *
		 * 		FUNCAO OBJETIVO
		 *
		****************************************/
		printf(BOLD BLUE"\n -- FUNCAO OBJETIVO -- \n" COLOR_OFF);
		int qtd_var;
		printf("\n Quantas variaveis? : ");
		scanf("%d", &qtd_var);

		if (qtd_var < 0) {
			printf("\n erro \n");
			return;
		}

		double funcao_objetivo[qtd_var];

		// Obtendo funcao objetivo
		for (int a=0; a<qtd_var; a++) {
			printf("\n Qual o valor da variavel" BOLD BLUE " X%d : " COLOR_OFF, a+1);
			scanf("%lf", &funcao_objetivo[a]);
		}

		// Exibindo funcao objetivo
		printf("\n ... Portanto a sua funcao objetivo e essa: ");
		for (int a=0; a<qtd_var; a++) {
			if (funcao_objetivo[a] >= 0 && a > 0) {printf("+");}
			printf(BOLD BLUE " %.1lfX%d " COLOR_OFF, funcao_objetivo[a], a+1);
		}
		printf("\n\n");

		/****************************************
		 *
		 * 		RESTRICOES
		 *
		****************************************/
		printf(BOLD GREEN"\n -- RESTRICOES -- \n" COLOR_OFF);
		int qtd_res;
		printf("\n Quantas restricoes? : ");
		scanf("%d", &qtd_res);

		if (qtd_res < 0) {
			printf("\n erro \n");
			return;
		}

		double restricoes[qtd_res][qtd_var+1];

		for (int a=0; a<qtd_res; a++) {

			printf("\n -- RESTRICAO" BOLD GREEN " [ %d ]" COLOR_OFF " --\n", a+1);

			for (int b=0; b<qtd_var; b++) {
				printf(" Qual valor deseja atribuir ao" BOLD BLUE " X%d " COLOR_OFF "da restricao" BOLD GREEN " [%d] : " COLOR_OFF, b+1, a+1);
				scanf("%lf", &restricoes[a][b]);
			}

			printf(" Qual o resultado da restricao" BOLD GREEN " [%d] ? : " COLOR_OFF, a+1);
			scanf("%lf", &restricoes[a][qtd_var]);

			// Exibindo como ficou a restricao
			printf("\n Portanto a restricao" BOLD GREEN " %d" COLOR_OFF " ficou: ", a+1);
			for (int b=0; b<qtd_var; b++) {
				if (restricoes[a][b] >= 0 && b > 0) {printf("+");}
				printf(BOLD GREEN " %.1lfX%d " COLOR_OFF, restricoes[a][b], b+1);
			}
			printf("<= " BOLD GREEN "%.1lf" COLOR_OFF, restricoes[a][qtd_var]);
			printf("\n\n");
		}

		/****************************************
		 *
		 * 		EXIBINDO CONTA FINAL
		 *
		****************************************/
		printf("\n Portanto ficamos com a seguinte conta: \n");
		printf("\n Z = ");
		for (int a=0; a<qtd_var; a++) {
			if (funcao_objetivo[a] >= 0 && a > 0) {printf("+");}
			printf(BOLD BLUE " %.1lfX%d " COLOR_OFF, funcao_objetivo[a], a+1);
		}
		printf("\n\n sujeito a: \n\n");
		for (int a=0; a<qtd_res; a++) {
			for (int b=0; b<qtd_var; b++) {
				if (restricoes[a][b] >= 0 && b > 0) {printf("+");}
				printf(BOLD GREEN " %.1lfX%d " COLOR_OFF, restricoes[a][b], b+1);
			}
			printf("<= " BOLD GREEN "%.1lf" COLOR_OFF, restricoes[a][qtd_var]);
			printf("\n");
		}
		printf("\n");
		for (int a=1; a<=qtd_var; a++) {
			printf( BOLD GREEN " X%d " COLOR_OFF, a);
			if (a!=qtd_var){printf(",");}
		}
		printf(" >=" BOLD GREEN " 0 \n" COLOR_OFF);

		if (esta_correto() == 1) {

			int escolha;

			while (escolha != 0 && escolha != 1) {
				printf("\n Escolha uma das opcoes a seguir: ");
				printf("\n [0]: Voce deseja ver o passo a passo da conta");
				printf("\n [1]: Voce quer ver o resultado final direto");
				printf("\n\t > ");
				scanf("%d", &escolha);
				fflush(stdin);

				if (escolha != 0 && escolha != 1) {
					printf("\n Opcao invalida...\n");
				}
			}

			if (escolha == 0) {
				return calcular_simplex_explicativo(funcao_objetivo, qtd_var, qtd_res, restricoes);
			} else {
				return calcular_simplex_direto(funcao_objetivo, qtd_var, qtd_res, restricoes);
			}
		} else {
			printf("\n Reiniciando... \n");
			return;
		}
	}

}

void main () {

	system("cls");

	printf("\n |----------------------------------------|");
	printf("\n | PROJETO DE PROGRAMACAO LINEAR          |");
	printf("\n | Resolucao simplex tabelado             |");
	printf("\n |                                        |");
	printf("\n | Feito por:                             |");
	printf("\n |                                        |");
	printf("\n |     > Leonardo de Souza Bezerra        |");
	printf("\n |                                        |");
	printf("\n |----------------------------------------|");
	printf("\n");

	while (1) {
		int resposta;

		printf("\n |----------------------------------------|");
		printf("\n | MENU                                   |");
		printf("\n |                                        |");
		printf("\n | Voce deseja?                           |");
		printf("\n |     [0] - Sair                         |");
		printf("\n |     [1] - Calcular Simplex (MAX)       |");
		printf("\n |----------------------------------------|");
		printf("\n      > ");

		scanf("%d", &resposta);
		fflush(stdin);

		if (resposta == 0) {
			break;
		} else if (resposta == 1) {
			montar_simplex();
		} else {
			printf("\n Resposta invalida... \n");
		}

		system("cls");
	}
	printf("\n\n\n Saindo... Tenha um bom dia! \n\n");
	exit(0);
}
