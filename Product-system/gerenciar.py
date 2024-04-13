import validacao
import menu
import crud_tipo
import crud_produto
import comprar
nome_do_arquivo = "compras.txt"

def Menu_Gerenciar():
    while True:
        escolha_menu_gerenciar = None
        print("--" * 25)
        print("MENU: GERENCIAR")
        print ("""
        [0] - Sair
        [1] - Venda dos TIPOS
        [2] - Venda dos PRODUTOS
        [3] - Venda TOTAL
        """)

        while True:
            escolha_menu_gerenciar = input("OPÇÃO: ")
            if validacao.validarInteiroInicioFim(0, 3, escolha_menu_gerenciar):
                escolha_menu_gerenciar = int(escolha_menu_gerenciar)
                break

        if escolha_menu_gerenciar == 0:
            return menu.Menu_Principal()
        if escolha_menu_gerenciar == 1:
            return vendaTipos() 
        if escolha_menu_gerenciar == 2:
            return vendaProdutos() 
        if escolha_menu_gerenciar == 3:
            return vendaTotal() 

def vendaTipos():

    print("--" * 25)
    print("GERENCIAR: TIPOS\n")

    while True:

        comprar.compra_trazer_tipos() #-> Exibe todos os tipos

        # -------------- DIGITE O CÓDIGO DO TIPO -------------- #
        while True:
            gerenciar_tipo = input("Digite um codigo de tipo [-1 para sair]: ")

            if gerenciar_tipo == "-1":
                print("RETORNADO AO MENU...")
                return Menu_Gerenciar()

            if validacao.validarInteiro(input_usuario=gerenciar_tipo):
                if crud_tipo.verificar_codigo_tipo(codigo=gerenciar_tipo):
                    gerenciar_tipo = int(gerenciar_tipo)
                    break
                else:
                    print("\nTIPO NÃO EXISTE NA BASE DE DADOS!")
                    return Menu_Gerenciar()
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
                            return Menu_Gerenciar()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        # -------------- TRAZ OS DADOS REFERENTES AO CÓDIGO DO TIPO -------------- #
        items_tipo = crud_tipo.trazer_dados(codigo=gerenciar_tipo)
        descricao_tipo = items_tipo[1]

        lista_de_todos_os_dados = trazer_dados_especificos(dado_especifico=str(gerenciar_tipo), ordem=0)

        # ----- DETERMINA O PRODUTO MAIS VENDIO, QUANTIDADE DE VENDAS, SEU CÓDIGO E TOTAL ERRECADADO ----- #  
        total_arrecadado = 0
        quantidade_produto_mais_vendido = 0
        descricao_produto_mais_vendido = None
        codigo_produto_mais_vendido = None

        if len(lista_de_todos_os_dados) != 0:
            for x in lista_de_todos_os_dados:
                total_arrecadado += (float(x[3]) * int(x[4]))

        for indice_dado, dado in enumerate(lista_de_todos_os_dados):
            if indice_dado == 0:
                quantidade_produto_mais_vendido = int(dado[4])
                descricao_produto_mais_vendido = dado[2]
                codigo_produto_mais_vendido = dado[1]
            else:
                if dado[1] == codigo_produto_mais_vendido:
                    quantidade_produto_mais_vendido += int(dado[4])
                    descricao_produto_mais_vendido = dado[2]
                    codigo_produto_mais_vendido = dado[1]
                else:
                    if int(dado[4]) > quantidade_produto_mais_vendido:
                        quantidade_produto_mais_vendido = int(dado[4])
                        descricao_produto_mais_vendido = dado[2]
                        codigo_produto_mais_vendido = dado[1]
        
        # ----- EXIBE AS INFORMAÇÕES ----- #  

        if float(total_arrecadado) <= 0:
            mensagem_a_ser_exibida = "Nenhum produto foi vendido"
        else:
            mensagem_a_ser_exibida = f"[{descricao_produto_mais_vendido.upper()}] COM CÓDIGO [{codigo_produto_mais_vendido}] FOI O PRODUTO {descricao_tipo.upper()} MAIS VENDIDO, COM [{quantidade_produto_mais_vendido}] UNIDADES VENDIDAS."

        print(f"""
        TIPO                    : {descricao_tipo.upper()}
        TOTAL ADQUIRIDO         : R$ {total_arrecadado:.2f}
        PRODUTO MAIS VENDIDO    : {mensagem_a_ser_exibida}

        """)

def vendaProdutos():

    print("--" * 25)
    print("GERENCIAR: PRODUTOS\n")  

    while True:

        trazer_produtos() #-> Exibe todos os produtos 

        # -------------- DIGITE O CÓDIGO DO PRODUTO -------------- #
        while True:
            gerenciar_produto = input("Digite um codigo de produto [-1 para sair]: ")

            if gerenciar_produto == "-1":
                print("RETORNADO AO MENU...")
                return Menu_Gerenciar()

            if validacao.validarString(input_usuario=gerenciar_produto):
                if crud_produto.CodigoExiste(gerenciar_produto):
                    break
                else:
                    print("\nTIPO NÃO EXISTE NA BASE DE DADOS!")
                    return Menu_Gerenciar()
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
                            return Menu_Gerenciar()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        # -------------- TRAZ AS INFORMAÇÕES REFRENTES AO PRODUTO DIGITADO -------------- #
        items_produto = crud_produto.trazer_dados(gerenciar_produto)
        descricao_produto = items_produto[2]

        lista_de_todos_os_dados = trazer_dados_especificos(dado_especifico=gerenciar_produto, ordem=1)
        quantidade_produto_vendido = 0
        valor_produto_arrecadado = 0

        if len(lista_de_todos_os_dados) != 0:
            for x in lista_de_todos_os_dados:
                quantidade_produto_vendido += int(x[4])
                valor_produto_arrecadado += float(x[3]) * int(x[4])

        # -------------- EXIBE AS INFORMAÇÕES REFRENTES AO PRODUTO DIGITADO -------------- #

        print(f"""
        PRODUTO SELECIONADO     : {descricao_produto.upper()}
        QUANTIDADE VENDIDA      : {quantidade_produto_vendido}
        VALOR ADQUIRIDO         : R$ {valor_produto_arrecadado:.2f}
        """)


def vendaTotal():

    print("--" * 25)
    print("GERENCIAR: VENDA TOTAL\n")

    # --------- EXIBE TODOS OS PRODUTOS VENDIDOS E VALOR TOTAL ADIQUIRIDO NA SEÇÃO --------- #

    dicionario_de_compra = {}
    lista_de_compra = []
    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if indice_linha != 0:
                linha_separada = linha.rstrip().split(';')
                for indice_dado, dado in enumerate(linha_separada):
                    if indice_dado == 0:
                        dicionario_de_compra["codigo_tipo"] = dado
                    if indice_dado == 1:
                        dicionario_de_compra["codigo_produto"] = dado
                    if indice_dado == 2:
                        dicionario_de_compra["descricao"] = dado
                    if indice_dado == 3:
                        dicionario_de_compra["valor_unitario"] = dado
                    if indice_dado == 4:
                        dicionario_de_compra["quantidade"] = dado
                lista_de_compra.append(dicionario_de_compra.copy())
    
    print("|" + ("-" * 114) + "|")
    print(f"|{'CÓDIGO TIPO':^15}|{'CÓDIGO PRODUTO':^20}|{'DESCRIÇÃO':^35}|{'VALOR UNITÁRIO':^20}|{'QUANTIDADE':^20}|")
    print("|" + ("-" * 114) + "|")
    for compra in lista_de_compra:
        print(f"|{compra['codigo_tipo']:^15}|{compra['codigo_produto']:^20}|{compra['descricao']:^35}|{compra['valor_unitario']:^20}|{compra['quantidade']:^20}|")
    print("|" + ("-" * 114) + "|")
    
    valor_total = 0
    for compra in lista_de_compra:
        valor_total += float(compra["valor_unitario"]) * int(compra["quantidade"])

    print("\n")
    print(f"VALOR TOTAL ADQUIRIDO: R$ {valor_total:.2f}")
    print("\n")

    return Menu_Gerenciar()

def trazer_dados_especificos(dado_especifico, ordem):

    # Retorna uma lista contendo as informações referentes ao dado_especifico citado
    # Desde que esteja na ordem dentro do nome_do_arquivo

    lista_de_dados = []
    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()

    for indice_linha, linha in enumerate(linhas):
        if indice_linha != 0:
            linha_separada = linha.split(";")
            if linha_separada[ordem] == dado_especifico: 
                lista_de_dados.append(linha_separada)

    return lista_de_dados

def trazer_produtos():

    # Exibe todos os produtos existentes dentro do nome_do_arquivo

    nome_do_arquivo = "Produto.txt"

    dicionario_produtos = {}
    lista_de_produtos = []

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if indice_linha != 0:
                linha_separada = linha.rstrip().split(";")
                for indice_palavra, palavra in enumerate(linha_separada):
                    if indice_palavra == 0:
                        dicionario_produtos["tipo"] = palavra
                    if indice_palavra == 1:
                        dicionario_produtos["codigo"] = palavra
                    if indice_palavra == 2:
                        dicionario_produtos["descricao"] = palavra
                    if indice_palavra == 3:
                        dicionario_produtos["valor"] = palavra
                lista_de_produtos.append(dicionario_produtos.copy())
    
    print("|" + ("-" * 88) + "|")
    print(f"|{'TIPO':^15}|{'CÓDIGO':^15}|{'DESCRIÇÃO':^35}|{'VALOR':^20}|")
    print("|" + ("-" * 88) + "|")
    for produto in lista_de_produtos:
        print(f"|{produto['tipo']:^15}|{produto['codigo']:^15}|{produto['descricao']:^35}|{produto['valor']:^20}|")
    print("|" + ("-" * 88) + "|")

    return True
