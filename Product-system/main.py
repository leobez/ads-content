# INICIE ESSE ARQUIVO PARA INICIAR O PROGRAMA #
import menu

def gerarArquivo_TipoProduto(): 
    try: 
        abrir_arquivo = open("TipoProduto.txt") 
        abrir_arquivo.close()
    except:
        with open("TipoProduto.txt", "a") as arquivo:
            arquivo.write(f"{'Codigo'};{'Descricao'} \n")
            
def gerarArquivo_Produto():
    try: 
        abrir_arquivo = open("Produto.txt") 
        abrir_arquivo.close()
    except:
        with open("Produto.txt", "a") as arquivo:
            arquivo.write(f"{'Tipo'};{'Codigo'};{'Descricao'};{'Valor'} \n")
         
gerarArquivo_TipoProduto()
gerarArquivo_Produto()
menu.Menu_Principal()