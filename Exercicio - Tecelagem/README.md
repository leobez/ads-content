# Prova de Programação Orientada a Objeto

# Prof. Francesco Artur Perrotti – Fatec Americana

Uma tecelagem tem 3 categorias de funcionários: os da administração, os da produção e os vendedores. Os funcionários da administração têm salário fixo. Os da produção são horistas, recebem por hora trabalhada e trabalham em turnos onde parte das horas são diurnas e parte são noturnas. Já os vendedores recebem um valor fixo mais comissão sobre as vendas. Para todos eles, a tecelagem precisa ter registrado o nome, RG e salário base. No caso dos funcionários administrativos o salário base é o salário bruto do funcionário. Para os funcionários da produção, o salário base é o valor por hora que eles recebem e para os vendedores é a parte fixa do salário. 

Faça uma hierarquia de classes que atenda as necessidades da tecelagem, sem duplicação de código e que contenha para todos os funcionários, os métodos abaixo. Não use construtores padrão. Faça construtores que inicializem os objetos com as informações necessárias.

- double salarioLiquido( ): retorna o salário liquido do funcionário. 
- void hollerith( ): imprime o hollerith do funcionário especificando seus dados, seu salário base e tudo o que foi somado ou descontado do salário, finalizando com seu salário líquido. 
- void novoMes( ): zera as informações que são acumuladas durante o mês, iniciando o mês seguinte.

Para os funcionários administrativos:
- void registrarFalta( ): As faltas vão sendo acumuladas durante o mês e depois são descontadas do salário base para calcular o salário líquido. Cada falta desconta 1/30 do salário base. Este método incrementa em um o número de faltas. O método novoMes( ) zera a quantidade de faltas.

Para os funcionários da produção:
- void registrarHorasDiurnas(int horas) e void registrarHorasNoturnas(int horas): O número de horas diurnas e noturnas vão sendo acumulados durante o mês e usados depois para calcular o salário final do funcionário. As horas diurnas são pagas de acordo com o salário base do funcionário. As horas noturnas têm um acréscimo de 30% sobre o valor das horas diurnas. O método novoMes( ) zera a quantidade de horas diurnas e noturnas.

Para os vendedores:
- void registrarVenda(double valor): As vendas de cada vendedor vão sendo acumuladas durante o mês e depois usadas para calcular seu salário líquido. Além do salário fixo, os vendedores recebem 3% de comissão sobre o valor total das vendas durante o mês. O método novoMes( ) zera o total de vendas.

IMPORTANTE: No método main da classe principal crie objetos para os três tipos de funcionários e teste todos os métodos implementados.

OBS: Este exercicio foi modificado com o passar das aulas, então utiliza de mais recursos que não são citados
na questão original, como array e exceções.