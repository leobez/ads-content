import crud_tipo
import validacao
import cadastro
nome_do_arquivo = "Produto.txt"

def incluir_produto():
    print("--" * 25)
    print("INCLUSÃO DE PRODUTO")
    print("\n")

    # VARIAVEIS: 
    # tipo_produto          -> int 
    # codigo_produto        -> string
    # descricao_produto     -> string
    # valor_produto         -> float

    # -------------- DIGITE O CÓDIGO DO TIPO -------------- #
    while True:
        while True:
            tipo_produto = input("DIGITE O TIPO [VALOR INTEIRO]: ")
            if validacao.validarInteiro(tipo_produto):
                tipo_produto = int(tipo_produto)
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
                            return cadastro.cadastro_produto()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        # -------- VERIFICAR SE O CÓDIGO DO TIPO tipo_produto EXISTE NO nome_do_arquivo -------- #
        if crud_tipo.verificar_codigo_tipo(codigo=tipo_produto):
            tipo_escolhido = crud_tipo.trazer_dados(codigo=tipo_produto)
            print(f"TIPO ESCOLHIDO -> ['{tipo_escolhido[1]}']")
            break
        else:
            print("TIPO NÃO EXISTE NA BASE DE DADOS...\n")
            return cadastro.cadastro_produto()

    # -------------- DIGITE O CÓDIGO DO PRODUTO -------------- #
    while True:
        while True:
            codigo_produto = str(input("DIGITE O CODIGO: "))

            if validacao.validarString(codigo_produto):
                if validacao.validarCodigoProduto(input_usuario=codigo_produto):
                    break
                else:
                    print("CÓDIGO DIGITADO É INVALIDO! FORMATO REQUERIDO: int-int")
                    return cadastro.cadastro_produto() 
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
                            return cadastro.cadastro_produto()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        # --------------VERIFICA SE O codigo_produto EXISTE NO nome_do_arquivo -------------- #
        if CodigoExiste(codigo=codigo_produto):
            print("CÓDIGO JA EXISTE NA BASE DE DADOS!\n")
            return cadastro.cadastro_produto()
        else:
            break
    
    # -------------- DIGITE A DESCRIÇÃO DO PRODUTO -------------- #
    while True:
        descricao_produto = str(input("DIGITE A DESCRIÇÃO: "))
        if validacao.validarString(descricao_produto):
            break
        else:
            print("DIGITE UMA DESCRICAO VALIDA!\n")
    
    # -------------- DIGITE O VALOR DO PRODUTO -------------- #
    while True:
        valor_produto = input("DIGITE O VALOR: ")
        if validacao.validarValor(valor_produto):
            valor_produto = float(valor_produto)
            break
        else:
            print("DIGITE UM VALOR VALIDO!\n")

    # ----- COLOCAR tipo_produto, codigo_produto, descricao_produto e valor_produto 
    # dentro do nome_do_arquivo ----- #

    with open('Produto.txt', 'a') as arquivo:
        arquivo.write(f"{tipo_produto};{codigo_produto};{descricao_produto};{valor_produto}\n")
        print(f"""
        TIPO        : {tipo_produto} 
        CÓDIGO      : {codigo_produto}
        DESCRIÇÃO   : {descricao_produto}
        VALOR       : {valor_produto}
        INCLUSÃO EFETUADA COM SUCESSO! 
        """)

    return cadastro.cadastro_produto()

def excluir_produto():
    print("--" * 25)
    print("EXCLUSÃO DE PRODUTO")
    print("\n")

    # VARIAVEIS: 
    # codigo_produto -> string

    # -------------- DIGITE O CÓDIGO DO PRODUTO -------------- #
    while True:
        while True:
            codigo_produto = str(input("DIGITE O CODIGO: "))
            if validacao.validarString(codigo_produto):
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
                            return cadastro.cadastro_produto()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        if CodigoExiste(codigo_produto):
            break
        else:
            print("CÓDIGO NÃO EXISTE NA BASE DE DADOS...")
            return cadastro.cadastro_produto()


    # -------------- TRAZER OS DADOS REFERENTES AO codigo_produto -------------- #
    dados = trazer_dados(codigo=codigo_produto)

    print("\n")
    print(f"""DESEJA EXCLUIR O DADO: 

    TIPO        : {dados[0]}
    CÓDIGO      : {dados[1]}
    DESCRIÇÃO   : {dados[2]}
    VALOR       : {dados[3]}
    """)

    while True:
        deseja_excluir = input("[1] - SIM \n[2] - NÃO\n -> ")
        if validacao.validarInteiroInicioFim(1, 2, deseja_excluir):
            break
    
    deseja_excluir = int(deseja_excluir)

    if deseja_excluir == 1:
        try:
            deletar_dado(dado=dados)
        except Exception as erro:
            print(f"ERRO: {erro}")
        else:
            print("DADOS DELETADOS COM SUCESSO!")

    return cadastro.cadastro_produto()

def consultar_produto():
    print("--" * 25)
    print("CONSULTA DE PRODUTO")
    print("\n")

    # VARIAVEIS: 
    # codigo_produto    -> string

    # -------------- DIGITE O CÓDIGO DO PRODUTO -------------- #
    while True:
        while True:
            codigo_produto = input("DIGITE O CODIGO DO PRODUTO: ")
            if validacao.validarString(codigo_produto):
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
                            return cadastro.cadastro_produto()
                    else:
                        print("DIGITE UM VALOR VALIDO!\n")

        if CodigoExiste(codigo_produto):
            break
        else:
            print("CÓDIGO NÃO EXISTE NA BASE DE DADOS...")
            return cadastro.cadastro_produto()

    # -------------- TRAZER OS DADOS REFERENTES AO codigo_produto -------------- #
    dados = trazer_dados(codigo=codigo_produto)

    print("\n")
    print("|" + ("-" * 88) + "|")
    print(f"|{'TIPO':^15}|{'CÓDIGO':^15}|{'DESCRIÇÃO':^35}|{'VALOR':^20}|")
    print("|" + ("-" * 88) + "|")
    print(f"|{dados[0]:^15}|{dados[1]:^15}|{dados[2]:^35}|{dados[3]:^20}|")
    print("|" + ("-" * 88) + "|")
    print("\n")

    return cadastro.cadastro_produto()

def CodigoExiste(codigo):

    # Retorna True caso o codigo exista no nome_do_arquivo
    # Caso contrário, retorna False

    lista_de_codigos = []
    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if indice_linha > 0:
                linha_separada = linha.split(";")
                for indice_letra, letra in enumerate(linha_separada):
                    if indice_letra == 1:
                        lista_de_codigos.append(str(letra))
                        
    if codigo in lista_de_codigos:
        return True
    else:
        return False

def trazer_dados(codigo):

    # Retorna o tipo, codigo, descricao, valor referente ao codigo

    with open(nome_do_arquivo, "r") as arquivo:
        linhas = arquivo.readlines()
        for indice_linha, linha in enumerate(linhas):
            if indice_linha > 0:
                nova_linha = linha.split(";")
                for indice_palavra, palavra in enumerate(nova_linha):
                    if indice_palavra == 1:
                        if str(palavra) == codigo:
                            tipo = nova_linha[0].strip()
                            descricao = nova_linha[2].strip()
                            valor = nova_linha[3].strip()
                            return tipo, str(codigo), descricao, valor

def deletar_dado(dado):

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
