def validarInteiroInicioFim(inicio, fim, input_usuario):
    # Retorna True para strings que possuam apenas VALORES NUMÉRICOS e que estejam entre inicio e fim. 
    # Caso contrario retorna False.
    
    if str(input_usuario).isnumeric():
        if int(input_usuario) in range(inicio, fim+1):
            return True
    return False

def validarInteiro(input_usuario):
    # Retorna True para strings que possuam apenas valores NUMÉRICOS. 
    # Caso contrario retorna False.

    if str(input_usuario).isnumeric() :
        return True
    return False

def validarCodigoProduto(input_usuario):

    # Retorna True caso o input_usuario obedeça o formato int-int. Exemplo: 0-0, 0-1, 1-0, 10-10.
    # Caso contrario, retorna False.

    # Transforma o código em lista
    lista_input_usuario = [letra for letra in input_usuario]

    # Verifica se há espaços no código
    for digito in lista_input_usuario: 
        if digito == "" or digito == " ":
            return False

    # Encontra a quantidade de "-" no código
    quantidade_tracos = 0
    possui_traco = False
    indice_traco = None
    for indice_letra, letra in enumerate(lista_input_usuario):
        if letra == "-":
            quantidade_tracos += 1
            indice_traco = indice_letra

    # Verifica se existe apenas 1 "-" no código
    if quantidade_tracos == 1:
        possui_traco = True 
    else:
        return False
    
    # Separa o código em 2 partes, antes e depois do "-"
    antes_traco = []
    depois_traco = []
    if possui_traco:
        for digitos in lista_input_usuario[:indice_traco]: #antes do traco
            antes_traco.append(digitos)
        for digitos in lista_input_usuario[(indice_traco+1):]: #depois do traco
            depois_traco.append(digitos)
    else:
        return False

    # Verifica se ambas as partes são apenas valores NUMÉRICOS
    for digito in antes_traco:
        if digito.isnumeric() == False:
            return False

    for digito in depois_traco:
        if digito.isnumeric() == False:
            return False

    return True

def validarString(input_usuario):
    # Retorna True para strings que possuam um tamanho maior que 0.
    # Caso contrario retorna False.

    if len(input_usuario.strip()) > 0:
        return True
    return False

def validarValor(input_usuario):
    #Retorna True para strings que sejam INTEIROS positivos ou FLOATS positivos, caso contrario retorna False.

    try:
        if isinstance(float(input_usuario), float) and float(input_usuario) >= 0:
            return True
        if isinstance(int(input_usuario), int) and int(input_usuario) >= 0:
            return True
    except:
        return False