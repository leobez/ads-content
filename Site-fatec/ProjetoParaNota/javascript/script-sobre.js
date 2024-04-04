const BotaoDuracao = document.querySelector("li.botao-content-dur")
const BotaoVagas = document.querySelector("li.botao-content-vag")
const BotaoCarga = document.querySelector("li.botao-content-car")
const BotaoCoord = document.querySelector("li.botao-content-coo")

var ElementoTextoExtra = document.querySelector("div.sobre-content-extras-text")

/*
    í: \xED
    á: \xE1
    ç: \xE7
    ã: \xE3 
*/

BotaoDuracao.addEventListener("click", ExibirDur = () => {
    ElementoTextoExtra.innerHTML = "<p> 6 semestres.</p>"
    ElementoTextoExtra.className = "animacaoContentTextExtra"
})

BotaoVagas.addEventListener("click", ExibirVaga = () => {
    ElementoTextoExtra.innerHTML = "<p>80 vagas semestrais, sendo 40 no per\xEDodo matutino e 40 no per\xEDodo vespertino.</p>"
    ElementoTextoExtra.className = "animacaoContentTextExtra"
})

BotaoCarga.addEventListener("click", ExibirCarga = () => {
    ElementoTextoExtra.innerHTML = "<p>2800 horas, 2400 horas + 240 horas de Est\xE1gio Curricular + 160 horas do Trabalho de Gradua\xE7\xE3o.</p>"
    ElementoTextoExtra.className = "animacaoContentTextExtra"
})

BotaoCoord.addEventListener("click", ExibirCoord = () => {
    ElementoTextoExtra.innerHTML = "<p>Professor Antonio Alfredo Lacerda</p>"
    ElementoTextoExtra.className = "animacaoContentTextExtra"
})
