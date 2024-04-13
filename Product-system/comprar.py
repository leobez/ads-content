import validacao
import menu
nome_do_arquivo = "TipoProduto.txt"

def Menu_Comprar():
    while True:

        print("--" * 25)
        print(f"{'MENU: COMPRAR [SAIR - 000]':^50}")
        print("--" * 25)
        print ("LISTA DE TIPOS:")

        lista_de_tipos_completa = compra_trazer_tipos() 

        # -------------- DIGITE O CÓDIGO DO TIPO -------------- #
        while True:
            compra_tipo = input("QUAL TIPO DESEJA: ")
            if validacao.validarInteiro(input_usuario=compra_tipo):
                compra_tipo = int(compra_tipo)
                break
            else:
                print("CÓDIGO INVALIDO!")
                # -------------- DESEJA CONTINUAR? -------------- #
                while True:
                    deseja_continuar = None
                    deseja_continuar = input("DESEJA DIGITAR OUTRO CÓDIGO? [1 - SIM] [2 - NÃO] \n -> ")
                    if validacao.validarInteiroInicioFim(inicio=1, fim=2, input_usuario=deseja_continuar):
                        deseja_continuar = int(deseja_continuar)
                        if deseja_continuar == 1:
                            break
                        if deseja_continuar == 2:
                            return menu.Menu_Principal()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        # -------------- 000 -> VOLTA AO MENU PRINCIPAL -------------- #
        if compra_tipo == 000:
            print("Retornando ao MENU...")
            return menu.Menu_Principal()

        # --------- Armazena o codigo e a descrição do produto escolhido em escolha_usuario --------- #
        escolha_usuario = []
        for elemento in lista_de_tipos_completa:
            for chave, valor in elemento.items():
                if chave == "codigo":
                    if int(valor) == compra_tipo:
                        escolha_usuario.append(elemento["codigo"])
                        escolha_usuario.append(elemento["descricao"])

        # --------- Exibe o menu referente ao tipo escolhido --------- #
        print("\n")
        print(f"MENU: -> {escolha_usuario[1].upper()}") # -> Exibe a descrição do tipo
        lista_de_dicionarios_dados = compra_trazer_produtos(escolha_usuario[0]) # -> Exibe o menu


        # Coloca todas códigos de produtos referentes ao tipo escolhido dentro de
        # lista_de_codigos_possiveis 
        lista_de_codigos_possiveis = []
        for dicionario_dados in lista_de_dicionarios_dados:
            for chave, valor in dicionario_dados.items():
                if chave == "codigo":
                    lista_de_codigos_possiveis.append(valor)

        # -------------- DIGITE O CÓDIGO DO PRODUTO -------------- #
        while True:
            input_produto_usuario = input("DIGITE O CÓDIGO DESEJADO: -> ")  
            if input_produto_usuario == "000":
                print("Retornando ao MENU...")
                return True
            if validacao.validarString(input_produto_usuario):
                break
            else:
                print("CÓDIGO INVALIDO!\n")

        if input_produto_usuario not in lista_de_codigos_possiveis:
            print("CÓDIGO NÃO ESTA PRESENTE NO MENU!")
            return True

        # -------------- DIGITE A QUANTIDADE -------------- #
        while True:
            quantidade_produto = input("QUANTAS UNIDADES DESEJA: ")
            if validacao.validarInteiro(quantidade_produto):
                quantidade_produto = int(quantidade_produto)
                break
            else:
                print("QUANTIDADE INVALIDA!")

        # -------------- EXIBE A ESCOLHA DO USUARIO -------------- #
        print(f"""
        PRODUTO         : {trazer_informacao_especifica_produto(input_produto_usuario, 2)}  
        QUANTIDADE      : {quantidade_produto}  
        VALOR UNITÁRIO  : R$ {trazer_informacao_especifica_produto(input_produto_usuario, 3)}
        VALOR TOTAL     : R$ {(float((trazer_informacao_especifica_produto(input_produto_usuario, ordem=3))) * int(quantidade_produto)):.2f}
        """)

        # -------------- CONFIRAMAÇÃO DO USUARIO -------------- #
        while True:
            verificacao = input("ESTA CORRETO? \n[1] - SIM \n[2] - NÃO\n -> ")
            if validacao.validarInteiroInicioFim(1, 2, verificacao):
                verificacao = int(verificacao)
                break
            else:
                print("DIGITE UMA OPÇÃO VALIDA!\n")

        # -------------- GUARDA AS INFORMÇÕES DENTRO DO ARQUIVO nome_do_arquivo -------------- #
        if verificacao == 1:
            nome_do_arquivo = "compras.txt"

            codigo_tipo = trazer_informacao_especifica_produto(input_produto_usuario, 0)
            codigo_produto = trazer_informacao_especifica_produto(input_produto_usuario, 1)
            descricao = trazer_informacao_especifica_produto(input_produto_usuario, 2)
            valor_unitario = trazer_informacao_especifica_produto(input_produto_usuario, 3)
            quantidade = int(quantidade_produto)

            try:
                file = open(nome_do_arquivo, "r")
                file.close()
            except:
                with open(nome_do_arquivo, "a") as arquivo:
                    arquivo.write(f"codigo_tipo;codigo_produto;descricao;valor_unitario;quantidade\n")
            finally:
                with open(nome_do_arquivo, "a") as arquivo:
                    arquivo.write(f"{codigo_tipo};{codigo_produto};{descricao};{valor_unitario};{quantidade}\n")
                    print("PRODUTO ADICIONADO AO CARRINHO COM SUCESSO!")

def compra_trazer_tipos():

    # Exibe ao usuário as informações contidas no nome_do_arquivo
    # Retorna uma lista contendo essas informações

    dicionario_dados = {}
    lista_de_dados = list()
    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            linha_separada = linha.strip().split(';')
            if indice_linha != 0:
                for indice_palavras, palavras in enumerate(linha_separada):
                    if indice_palavras == 0: 
                        dicionario_dados["codigo"] = palavras
                    else:
                        dicionario_dados["descricao"] = palavras
                        lista_de_dados.append(dicionario_dados.copy())

    print("|" + ("-" * 41) + "|")
    print(f"|{'CÓDIGO':^10}|{'DESCRIÇÃO':^30}|")
    print("|" + ("-" * 41) + "|")
    for dado in lista_de_dados:
        print(f"|{dado['codigo']:^10}|{dado['descricao']:^30}|")
    print("|" + ("-" * 41) + "|")

    return lista_de_dados

def compra_trazer_produtos(codigo):

    # Exibe ao usuário as informações de PRODUTO referente ao codigo de tipo escolhido.
    # Retorna uma lista contendo essas informações.

    nome_do_arquivo = "Produto.txt"

    lista_de_dados_completos = list()
    dicionario_dados = {}
    lista_de_dicionarios_dados = list()

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            linha_separada = linha.strip().split(';')
            if indice_linha != 0:
                for indice_palavras, palavras in enumerate(linha_separada):
                    if indice_palavras == 0:
                        if palavras == codigo:
                            lista_de_dados_completos.append(linha.strip().split(";"))

    for dado_completo in lista_de_dados_completos:
        for indice_dado, dado in enumerate(dado_completo):
            if indice_dado == 0:
                dicionario_dados['tipo'] = dado
            if indice_dado == 1:
                dicionario_dados['codigo'] = dado
            if indice_dado == 2:
                dicionario_dados['descricao'] = dado
            if indice_dado == 3:
                dicionario_dados['valor'] = dado
                lista_de_dicionarios_dados.append(dicionario_dados.copy())

    print("\n")
    print("|" + ("-" * 88) + "|")
    print(f"|{'TIPO':^15}|{'CÓDIGO':^15}|{'DESCRIÇÃO':^35}|{'VALOR':^20}|")
    print("|" + ("-" * 88) + "|")
    for dicionario in lista_de_dicionarios_dados:
        print(f"|{dicionario['tipo']:^15}|{dicionario['codigo']:^15}|{dicionario['descricao']:^35}|{dicionario['valor']:^20}|")
    print("|" + ("-" * 88) + "|")
    print("\n")

    return lista_de_dicionarios_dados

def trazer_informacao_especifica_produto(codigo_produto, ordem):

    # Retorna um dado especifico do produto, de acordo com seu código e ordem na base de dados.

    # ORDEM: 
    # 0->tipo 
    # 1->produto 
    # 2->descricao
    # 3->valor    

    # Exemplo: codigo_produto = 1-1, ordem = 2 
    #       Nesse caso irá retornar a iformação de ordem 2, ou seja, a descrição referente 
    #       ao produto de código 1-1. 
    

    nome_do_arquivo = "Produto.txt"

    informacao_especifica = ""

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            linha_separada = linha.strip().split(';')
            if indice_linha != 0:
                for indice_palavras, palavras in enumerate(linha_separada):
                    if indice_palavras == 1:
                        if palavras == codigo_produto:
                            informacao_especifica = linha_separada[ordem]

    return informacao_especifica