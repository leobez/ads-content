import cadastro
import comprar
import gerenciar
import fim
import validacao

def Menu_Principal():
    while True:
        escolha_menu = None
        print("--" * 25)
        print(f"{'MENU'}")
        print("--" * 25)
        print ("""
        [1] - Cadastro
        [2] - Comprar
        [3] - Gerenciar
        [4] - Fim
        """)

        while True:
            escolha_menu = input("OPÇÃO: ")
            if validacao.validarInteiroInicioFim(inicio=1, fim=4, input_usuario=escolha_menu):
                escolha_menu = int(escolha_menu)
                break
            else:
                print("OPÇÃO INVALIDA!")

        if escolha_menu == 1:
            return cadastro.Menu_Cadastro()
        if escolha_menu == 2:
            return comprar.Menu_Comprar()
        if escolha_menu == 3:
            return gerenciar.Menu_Gerenciar()
        if escolha_menu == 4:
            return fim.Menu_fim()