/* 
    AREA_CALCULO: Area do documento onde ocorre a entrada de dados.
    AREA_RESULTADO: Area do documento onde ocorre a saída de dados.
*/ 
const AREA_CALCULO = document.querySelector(".content-calculo")
const AREA_RESULTADO = document.querySelector(".usable-area")

/*
    AVISO: Paragrafo que será exibido em casos de entrada de dados inválida.
    Seu valor será mudado no decorrer do programa.
*/  
const AVISO = document.createElement("p")
AVISO.setAttribute("id", "aviso")
AVISO.style.color = "red"
AVISO.style.fontWeight = "800"

/* 
    BOTAO_APAGAR: Botão que apagará o conteudo das seguintes areas do programa
        -> AREA_RESULTADO
        -> AVISO
        -> #dados -> Se trata da textarea presente na AREA_CALCULO
*/
const BOTAO_APAGAR = document.querySelector(".apagar")
BOTAO_APAGAR.addEventListener("click", () => {
    AREA_RESULTADO.innerHTML = ""
    if (AREA_CALCULO.lastChild == AVISO) AREA_CALCULO.removeChild(AVISO)
    document.querySelector("#dados").value = ""
})

/*
    BOTAO_CALCULAR: Botão que irá acionar a função principal do programa.
*/ 
const BOTAO_CALCULAR = document.querySelector(".calcular")
BOTAO_CALCULAR.addEventListener("click", gerarResultado)

/*
    gerarResultado: Função principal.

    Nos comentário estão os passos que a função segue afim de chegar ao resultado final.
*/
function gerarResultado() {

    // Resetar AREA_RESULTADO e AREA_CALCULO
    AREA_RESULTADO.innerHTML = ""
    if (AREA_CALCULO.lastChild == AVISO) AREA_CALCULO.removeChild(AVISO)

    // Receber o input do usuario e o tamanho deste.
    var Dados = document.querySelector("#dados").value
    var Tamanho = Dados.trim().length

    // Validar o input
    var val = validarDados(Dados, Tamanho)

    if (val == 1) {
        AVISO.innerText = "VALOR INVALIDO DETECTADO!"
        return AREA_CALCULO.append(AVISO);
    }

    try {
        let ListaNumerosString = construirNumeros(Dados, Tamanho) 

        if (ListaNumerosString === 1) {
            AVISO.innerText = "APENAS UM NUMERO DETECTADO"
            return AREA_CALCULO.append(AVISO);
        }

        // Converter os numero de String para Number
        var ListaNumeros = ListaNumerosString.map(function(x){return Number(x)})

        for (let x of ListaNumeros) {
            if (isNaN(x)) {
                AVISO.innerText = "VALORES INVALIDOS"
                return AREA_CALCULO.append(AVISO);
            }
        }

        // Organizar a lista de números em ordem crescente
        ListaNumeros.sort(function(a, b) { return a > b ? 1 : -1});

    } catch (error) {
        AVISO.innerText = "VALORES INVALIDOS"
        return AREA_CALCULO.append(AVISO);
    }


    // Efetuar os Calculos 
    let Amplitude           = calcularAmplitude(ListaNumeros);
    let VarianciaAmostral   = calcularVarianciaAmostral(ListaNumeros);
    let DesvioPad           = calcularDesvioPadrao(VarianciaAmostral);
    let CoeficienteVar      = calcularCoeficienteVariacao(ListaNumeros, DesvioPad);


    // Criar uma div para cada um dos elementos que serão exibidos ao usuario
    const DivAmplitude          = document.createElement("div")
    const DivVarianciaAmostral  = document.createElement("div")
    const DivDesvioPad          = document.createElement("div")
    const DivCoeficienteVar     = document.createElement("div")

    /* 
        ObjetoDivs: Uma lista de objetos, onde cada objeto é uma coleção de:
            -> text     : Texto que será exibido na div
            -> elemento : Div que foi criada anteriormente
            -> valor    : Valor resultante do calculo efetuado 
            -> extra    : nome que será atribuido ao "class" dessa div. Será utilizado como informação extra para exibir o conteudo "extra" presente em cada div.
    */
    let ObjetoDivs = [
        {
            text: "AMPLITUDE", 
            elemento: DivAmplitude, 
            valor: Amplitude, 
            extra: 'e1',
        },
        {
            text: "VARIÂNCIA AMOSTRAL", 
            elemento: DivVarianciaAmostral, 
            valor: VarianciaAmostral, 
            extra: 'e2'
        },
        {
            text: "DESVIO PADRÃO AMOSTRAL", 
            elemento: DivDesvioPad, 
            valor: DesvioPad, 
            extra: 'e3'
        },
        {
            text: "COEFICIENTE DE VARIAÇÃO", 
            elemento: DivCoeficienteVar, 
            valor: CoeficienteVar, 
            extra: 'e4'
        },
    ]
    
    // Exibir os calculos efetuados, dentro dos elemento criados para o usuario. 

    // time: variavel usada para medir o tempo da animação de aparição de cada div.
    let time = 0.60
    for (let o of ObjetoDivs) {

        // Colocar o tempo da animação da div
        o.elemento.style.animationDuration = `${time}s`
        time += 0.22

        // Colocar o nome da classe da div
        o.elemento.setAttribute("class", `${o.extra}`)

        // Criar um elemento hr, que será colocado dentro da div
        const hr = document.createElement("hr")

        // Criar um paragrafo que recebe o texto.
        const PTexto = document.createElement("p")
        PTexto.innerText = `${o.text}`
        PTexto.style.fontWeight = "900"

        // Criar um paragrafo que recebe o resultado
        const PResultado = document.createElement("p")
        PResultado.style.color = "green"
        PResultado.style.fontWeight = "800"

        // Criar um botão que irá exibir o conteudo extra
        const botaoExtra = document.createElement("button")
        botaoExtra.setAttribute("class", "btn-extra")
        botaoExtra.innerText = "Exibir"
        botaoExtra.addEventListener("click", () => {
            return exibirExtra(o.elemento, o.extra)
        })

        if (o.extra == "e4") {
            if (isNaN(o.valor)) {
                PResultado.innerText = `${o.valor}`
            } else {
                PResultado.innerText = `${Number(o.valor).toFixed(3)} <---> ${(o.valor*100).toFixed(2)}%`  
            }
        } else {
            if (isNaN(o.valor)) {
                PResultado.innerText = `${o.valor}`
            } else {
                PResultado.innerText = `${Number(o.valor).toFixed(3)}`
            }
        }

        /* 
            Adicionar todos os elementos criados:
                -> PTexto       : Paragrafo contendo o texto
                -> hr           : linha horizontal
                -> PResultado   : Paragrafo contendo o resultado da conta
                -> botaoExtra   : Botão que irá exibir o conteudo adicional
        */
        o.elemento.append(PTexto, hr, PResultado, botaoExtra)
        AREA_RESULTADO.append(o.elemento)
    }

    // Colocar a parte da "AREA_RESULTADO" em visão do usuario
    AREA_RESULTADO.scrollIntoView({behavior: "smooth"})

    return 0
} 

/********************************************************
 * 
 * As funções a seguir servem o proposito de ajudar na 
 * entrada de dados: uma faz a validação e a outra 
 * constroi os valores que serão utilizados para efetuar 
 * os calculos.
 * 
*********************************************************/

function validarDados(dados, size) {

    let VALORES_VALIDOS = [",", ";", " ", ".", "-"]

    if (size == 0) return 1
    if (dados[0] == "," || dados[0] == ";") return 1      
    if (dados[size-1] == "," || dados[size-1] == ";") return 1      

    for (let c=0; c<size; c++) {
        if (isNaN(dados[c])) {
            if (!VALORES_VALIDOS.includes(dados[c])) {
                return 1
            }
        }
    }

    return 0
}

function construirNumeros(dados, size) {
    // Entrada: dados em forma bruta, lista das posições dos separadores
    // Validar que existem apenas "-" entre os numeros e este não esta no final de cada
    
    let numeros = []
    let num = ""
    let flagNeg=0

    for (let c=0; c<size; c++) {

        if (dados[c] == "-") flagNeg=1
        if (dados[c] == " " || dados[c] == "," || dados[c] == ";") {

            // Nesse estado, o numero ja deve estar completo
            // Verificar o sinal de negativo
            if (flagNeg == 1) {
                if (num[num.length-1] == "-") {
                    return 1
                }
            }

            if (num.trim() != "") {
                numeros.push(num)
                num=""
                flagNeg=0
            }

        } else {
            num += `${dados[c]}`
        }
    }

    numeros.push(num)

    return numeros
}

/********************************************************
 * 
 * As funções a seguir servem o proposito de efetuar os 
 * calculos necessarios referente ao tema do projeto.
 * 
*********************************************************/

function calcularAmplitude(array) {
    if (array.length == 1) {return `Dados insuficientes!`}

    // Subtrair o ultimo elemento do primeiro
    let amplitude = array[array.length-1] - array[0]

    // Deixar o resultado com 2 casas decimais
    amplitude = amplitude.toFixed(2)

    return amplitude
}

function calcularVarianciaAmostral(array) {

    if (array.length == 1) {return `Dados insuficientes!`}

    // SOMA_QUAD   : A soma do quadrado de todos os elementos
    // SOMA        : A soma de todos os elementos
    let SOMA_QUAD = 0;
    let SOMA = 0
    for (let c=0; c<array.length; c++) {
        SOMA_QUAD += array[c]**2 
        SOMA += array[c]
    }

    // Fazer : SOMA_QUAD - ( (SOMA**2) / quantidade de elementos)
    // Dividir tudo por quantidade de elementos - 1

    let varianciaAmostral = ((SOMA_QUAD-((SOMA**2)/array.length))/(array.length-1))

    // Em caso do resultado ser NaN: O motivo (provavelmente) será porque o usuario digitou apenas um número
    if (isNaN(varianciaAmostral) || array.length == 1) {
        return `Dados insuficientes!`
    }

    return varianciaAmostral
}

function calcularDesvioPadrao(variancia) {

    // Raiz quadrada da variancia amostral
    let desvipad = Math.sqrt(variancia)

    // Em caso do resultado ser NaN: O motivo (provavelmente) será porque o usuario digitou apenas um número
    if (isNaN(desvipad)) {
        return `Dados insuficientes!`
    }

    return desvipad
}

function calcularCoeficienteVariacao(array, desvio) {
    
    if (array.length == 1) {return `Dados insuficientes!`}

    // Calcular a média aritmética
    let media = 0;
    for (let c=0; c<array.length; c++) {
        media += array[c]
    }
    media = media / array.length

    // Calcular coeficiente = desvio padrão / média aritimética
    let coeficiente_variacao = desvio / media
    
    return coeficiente_variacao

}

/********************************************************
 * 
 * As funções a seguir são sobre o conteudo Extra que 
 * será exibido ao apertar o botão extra construido 
 * dentro de cada div de resultado
 * 
*********************************************************/

/*
    exibirExtra : Recebe como argumento o elemento que contem o botão que foi apertado, e 
    a sua classe (CSS) que será utilizada como identificador nessa função

    Sua função é alterar a div cujo botaoExtra foi pressionado, criando uma nova div
    que contem as informações extras escolhidas.

*/
function exibirExtra(elemento, extra) {

    // Criar um botao para fechar
    const botaoFechar = document.createElement("button")
    botaoFechar.innerText = "Fechar"
    botaoFechar.setAttribute("class", "btn-extra")

    botaoFechar.addEventListener("click", () => {
        CONTAINER_EXTRA.setAttribute("class", "CSlowDisappear")

        // Timeout para remover o elemento apenas quando a animação dela terminar
        // Tempo da animação: 0.5s
         
        setTimeout(() => {
            elemento.removeChild(CONTAINER_EXTRA)
        }, 0);

        return voltarBotaoExtra(elemento, extra)
    })

    // Colocar o botão de fechar no lugar do botão de exibir
    elemento.replaceChild(botaoFechar, elemento.children[3])

    // Criar o container que vai receber as informações extras
    const CONTAINER_EXTRA = document.createElement("div")
    CONTAINER_EXTRA.setAttribute("class", "container-extra")

    // Definir oque vai ser o conteudo
    let CONTEUDO_EXTRA = {
        titulo: "",
        texto: "",
        formula: ""
    }

    if (extra == "e1") {CONTEUDO_EXTRA = ExtraAmp()}
    if (extra == "e2") {CONTEUDO_EXTRA = ExtraVar()}
    if (extra == "e3") {CONTEUDO_EXTRA = ExtraDesvPad()}
    if (extra == "e4") {CONTEUDO_EXTRA = ExtraCoefVar()}

    // Colocando o conteudo dentro dos seus respectivos elementos
    const EXTRA_TITULO = document.createElement("h1")
    EXTRA_TITULO.innerText = CONTEUDO_EXTRA.titulo

    const EXTRA_TEXTO = document.createElement("p")
    EXTRA_TEXTO.innerText = CONTEUDO_EXTRA.texto

    const EXTRA_FORMULA = document.createElement("p")
    EXTRA_FORMULA.innerText = `Fórmula: `

    if (extra == "e2") {
        var EXTRA_FORMULA_CONTENT = document.createElement("img")
        EXTRA_FORMULA_CONTENT.setAttribute("src", `Imagens/${CONTEUDO_EXTRA.formula}.png`)
    } else {
        var EXTRA_FORMULA_CONTENT = document.createElement("p")
        EXTRA_FORMULA_CONTENT.innerText = CONTEUDO_EXTRA.formula
        EXTRA_FORMULA_CONTENT.style.fontWeight = "600"
    }

    
    CONTAINER_EXTRA.append(EXTRA_TITULO, EXTRA_TEXTO, EXTRA_FORMULA, EXTRA_FORMULA_CONTENT)


    // Adicionando o container de info. extras a div
    elemento.append(CONTAINER_EXTRA)

    // Fazer com que o elemento em questão sempre fique em envidencia dentro do elemento pai 
    elemento.scrollIntoView()

    return 0
}

/*
    voltarBotaoExtra : recebe como argumento o elemento cujo botão foi pressionado e a sua classe no CSS, que será usada como identificador aqui.
    
    Quando o botaoExtra foi inicialmente pressionado, foi substituido pelo botaoFechar. O objetivo dessa função é faze-lo retornar ao seu estado de botaoExtra.
*/
function voltarBotaoExtra(elemento, extra) {
    const botaoExtra = document.createElement("button")
    botaoExtra.setAttribute("class", "btn-extra")
    botaoExtra.innerText = "Exibir"
    elemento.replaceChild(botaoExtra, elemento.children[3])
    botaoExtra.addEventListener("click", () => {
        return exibirExtra(elemento, extra)
    })
}

function ExtraAmp() {
    let total = {
        titulo: "Amplitude",
        texto: "A amplitude é definida como sendo a diferença entre o maior e o menor valor do conjunto de dados. Note que a amplitude como medida de dispersão é limitada. Essa medida só depende dos valores extremos, ou seja, não é afetada pela dispersão dos valores internos",
        formula: "At = n° maior - n° menor"
    }
    return total
}

function ExtraVar() {
    let total = {
        titulo: "Variância amostral",
        texto: "A variância amostral é uma medida de dispersão que mostra o quão distante cada valor desse conjunto está do valor central (médio). Quanto menor é a variância, mais próximos os valores estão da média; mas quanto maior ela é, mais os valores estão distantes da média.",
        formula: `var`
    }
    return total
}

function ExtraDesvPad() {
    let total = {
        titulo: "Desvio Padrão amostral",
        texto: "O desvio padrão amostral de um conjunto de dados é igual à raiz quadrada da variância amostral.",
        formula: "Dp = 	\u221A variância"
    }
    return total
}

function ExtraCoefVar() {
    let total = {
        titulo: "Coeficiente de variação",
        texto: "O coeficiente de variação é definido como a razão entre o desvio padrão e a média.",
        formula: "Cv = DP / MA"
    }
    return total
}
