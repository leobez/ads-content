import validacao
import cadastro
nome_do_arquivo = "TipoProduto.txt"

def incluir_tipo():
    print("--" * 25)
    print("INCLUSÃO DE TIPO")
    print("\n")

    # VARIAVEIS: 
    # codigo_tipo       -> int 
    # descricao_tipo    -> string

    # -------------- DIGITE O CÓDIGO DO TIPO -------------- #
    while True:
        while True:
            codigo_tipo = input("DIGITE O CÓDIGO: ")
            if validacao.validarInteiro(codigo_tipo):
                codigo_tipo = int(codigo_tipo)
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
                            return cadastro.cadastro_tipo()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        if verificar_codigo_tipo(codigo_tipo):
            print("CÓDIGO JÁ EXISTE NA BASE DE DADOS!")
            return cadastro.cadastro_tipo()
        else:
            break

    # -------------- DIGITE A DESCRIÇÃO DO TIPO -------------- #
    while True:
        descricao_tipo = str(input("DIGITE A DESCRIÇÃO: "))
        if validacao.validarString(descricao_tipo):
            break
        else:
            print("DIGITE UMA DESCRICAO VALIDA!\n")

    # -------------- COLOCAR codigo_tipo e descricao_tipo dentro do nome_do_arquivo -------------- #
    with open(nome_do_arquivo, "a") as arquivo:
        arquivo.write(f"{codigo_tipo};{descricao_tipo}\n")
        print(f"""
        CÓDIGO      : {codigo_tipo} 
        DESCRIÇÃO   : {descricao_tipo}
        INCLUSÃO EFETUADA COM SUCESSO! 
        """)

    return cadastro.cadastro_tipo()

def excluir_tipo():
    print("--" * 25)
    print("EXCLUSÃO DE TIPO")
    print("\n")

    # VARIAVEIS: 
    # codigo_tipo -> int

    # -------------- DIGITE O CÓDIGO -------------- #
    while True:
        while True:
            codigo_tipo = input("DIGITE O CODIGO: ")
            if validacao.validarInteiro(codigo_tipo):
                codigo_tipo = int(codigo_tipo)
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
                            return cadastro.cadastro_tipo()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        if verificar_codigo_tipo(codigo_tipo):
            break
        else:
            print("CÓDIGO NÃO EXISTE NA BASE DE DADOS...")
            return cadastro.cadastro_tipo()


    # -------------- TRAZER OS DADOS REFERENTES AO codigo_tipo -------------- #
    dados = trazer_dados(codigo_tipo)

    print("\n")
    print(f"""DESEJA EXCLUIR O DADO: 
    
    [AVISO: AO DELETAR UM TIPO, TODOS OS PRODUTOS ASSOCIADOS A ESSE TIPO TAMBEM SERÃO DELETADOS]

    CÓDIGO      : {dados[0]}
    DESCRIÇÃO   : {dados[1]}
    """)
    
    # -------------- DESEJA EXCLUIR? -------------- #
    while True:
        deseja_excluir = input("[1] - SIM \n[2] - NÃO\n -> ")
        if validacao.validarInteiroInicioFim(1, 2, deseja_excluir):
            break
    
    deseja_excluir = int(deseja_excluir)

    if deseja_excluir == 1:
        try:
            deletar_dado(dado=dados, nome_do_arquivo=nome_do_arquivo)
        except Exception as erro:
            print(f"ERRO: {erro}")
        else:
            print("DADOS DELETADOS COM SUCESSO!")

        # -------------- EXCLUIR PRODUTOS REFERENTES AO TIPO -------------- #
        # trazer_dados referente ao produto daquele tipo
        #
        #
        #

        lista_de_produtos = trazer_dados_produto(codigo_tipo=codigo_tipo)

        for produto in lista_de_produtos:
            print(f"DELETANDO PRODUTO: {produto[0]};{produto[1]};{produto[2]};{produto[3]}")
            deletar_dado(dado=produto, nome_do_arquivo="Produto.txt")

    return cadastro.cadastro_tipo()

def consultar_tipo():
    print("--" * 25)
    print("CONSULTA DE TIPO")
    print("\n")

    # VARIAVEIS: 
    # codigo_tipo -> int

    # -------------- DIGITE O CÓDIGO -------------- #
    while True:
        while True:
            codigo_tipo = input("DIGITE O CODIGO: ")
            if validacao.validarInteiro(codigo_tipo):
                codigo_tipo = int(codigo_tipo)
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
                            return cadastro.cadastro_tipo()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")
        

        if verificar_codigo_tipo(codigo_tipo):
            break
        else:
            print("CÓDIGO NÃO EXISTE NA BASE DE DADOS...")
            return cadastro.cadastro_tipo()


    # -------------- TRAZER OS DADOS REFERENTES AO codigo_tipo -------------- #
    dado_escolhido = trazer_dados(codigo=codigo_tipo)

    print("\n")
    print("|" + ("-" * 41) + "|")
    print(f"|{'CÓDIGO':^10}|{'DESCRIÇÃO':^30}|")
    print("|" + ("-" * 41) + "|")
    print(f"|{dado_escolhido[0]:^10}|{dado_escolhido[1]:^30}|")
    print("|" + ("-" * 41) + "|")
    print("\n")

    return cadastro.cadastro_tipo()

def verificar_codigo_tipo(codigo):

    # Retorna TRUE caso o código exista na base de dados 'nome_do_arquivo'.
    # Retorna False caso o código não exista na base de dados.

    lista_de_codigos = []
    codigo = int(codigo)

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if indice_linha > 0:
                linha_separada = linha.split(";")
                for indice_dado, dado in enumerate(linha_separada):
                    if indice_dado == 0:
                        lista_de_codigos.append(int(dado))

    if codigo in lista_de_codigos:
        return True
    else:
        return False

def trazer_dados(codigo):

    # Retorna o codigo e a descricao do tipo referente ao codigo
    
    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if indice_linha > 0:
                nova_linha = linha.split(";")
                for indice_palavra, palavra in enumerate(nova_linha):
                    if indice_palavra == 0:
                        if int(palavra) == codigo:
                            descricao = nova_linha[1].strip()
                            return str(codigo), descricao

def deletar_dado(dado, nome_do_arquivo):

    # Reescreve o nome_do_arquivo linha por linha, 
    # com exceção da linha que contenha os dados que devem ser deletados.

    dado_completo = ';'.join(dado)
    linha_a_ser_deletada = None

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if str(linha).strip() == dado_completo:
                linha_a_ser_deletada = indice_linha

    with open(nome_do_arquivo, "w+") as arquivo:
        for indice_linha, linha in enumerate(linhas):
            if indice_linha == linha_a_ser_deletada:
                pass
            else:
                arquivo.write(linha)

# -- EXTRA -- #

def trazer_dados_produto(codigo_tipo):
    nome_do_arquivo = "Produto.txt"
    
    lista_de_dados_tipo_especifico = []

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
    
    for indice_linha, linha in enumerate(linhas):
        if indice_linha > 0:
            linha_separada = linha.rstrip().split(';')
            if int(linha_separada[0]) == int(codigo_tipo):
                lista_de_dados_tipo_especifico.append(linha_separada)
            
    return lista_de_dados_tipo_especifico

