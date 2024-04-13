import menu
import crud_tipo
import crud_produto
import validacao

def Menu_Cadastro():
    while True:
        escolha_menu_cadastro = None
        print("--" * 25)
        print("MENU: CADASTRO")
        print ("""
        [0] - Sair
        [1] - Tipo
        [2] - Produto
        """)
        
        while True:
            escolha_menu_cadastro = input("OPÇÃO: ")
            if validacao.validarInteiroInicioFim(0, 2, escolha_menu_cadastro):
                escolha_menu_cadastro = int(escolha_menu_cadastro)
                break
            else:
                print("OPÇÃO INVALIDA!")

        if escolha_menu_cadastro == 0:
            return menu.Menu_Principal()
        if escolha_menu_cadastro == 1:
            return cadastro_tipo()
        if escolha_menu_cadastro == 2:
            return cadastro_produto()

def cadastro_tipo():
    while True:
        escolha_menu_cadastro_tipo = None
        print("--" * 25)
        print("MENU: CADASTRO DE TIPO")
        print ("""
        [0] - SAIR
        [1] - INCLUIR
        [2] - EXCLUIR
        [3] - CONSULTAR
        """)

        while True:
            escolha_menu_cadastro_tipo = input("OPÇÃO: ")
            if validacao.validarInteiroInicioFim(0, 3, escolha_menu_cadastro_tipo):
                escolha_menu_cadastro_tipo = int(escolha_menu_cadastro_tipo)
                break
            else:
                print("OPÇÃO INVALIDA!")

        if escolha_menu_cadastro_tipo == 0:
            return Menu_Cadastro()
        if escolha_menu_cadastro_tipo == 1:
            return crud_tipo.incluir_tipo()
        if escolha_menu_cadastro_tipo == 2:
            return crud_tipo.excluir_tipo()
        if escolha_menu_cadastro_tipo == 3:
            return crud_tipo.consultar_tipo()

def cadastro_produto():
    while True:
        escolha_menu_cadastro_produto = None
        print("--" * 25)
        print("MENU: CADASTRO DE PRODUTO")
        print ("""
        [0] - SAIR
        [1] - INCLUIR
        [2] - EXCLUIR
        [3] - CONSULTAR
        """)

        while True:
            escolha_menu_cadastro_produto = input("OPÇÃO: ")
            if validacao.validarInteiroInicioFim(0, 3, escolha_menu_cadastro_produto):
                escolha_menu_cadastro_produto = int(escolha_menu_cadastro_produto)
                break
            else:
                print("OPÇÃO INVALIDA!")

        if escolha_menu_cadastro_produto == 0:
            return Menu_Cadastro()
        if escolha_menu_cadastro_produto == 1:
            return crud_produto.incluir_produto()
        if escolha_menu_cadastro_produto == 2:
            return crud_produto.excluir_produto()
        if escolha_menu_cadastro_produto == 3:
            return crud_produto.consultar_produto()
