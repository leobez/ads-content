# Prova de Programação Orientada a Objeto 

# Prof. Francesco Artur Perrotti – Fatec Americana

Uma loja de autopeças quer implementar um controle de estoque de peças e o seu trabalho é fazer esse novo sistema. Para isso você precisa criar uma classe para as peças que registre os seguintes dados: código (inteiro), descrição (string), quantidade em estoque (inteiro) e peso (double). Para a classe das peças, faça métodos que permitam que outra classe leia e altere os atributos das peças sem que seja necessário acesso direto aos atributos (o acesso deve ser através dos métodos implementados). Além da classe para as peças, é preciso também fazer uma classe para armazenar a lista de peças que a loja vende. A quantidade máxima de peças na lista será informada via parâmetro no construtor da classe. Esta classe deve implementar pelo menos os métodos abaixo, mas fique à vontade para acrescentar outros métodos que achar úteis. 

Estes métodos são todos públicos e devem fazer o seguinte:
- int adicionarPeça(Peca pc) Acrescenta uma nova peça na lista de peças. Retorna o índice (posição) da peça na lista se a operação foi realizada com sucesso. Caso a lista já esteja lotada, lance uma exceção para notificar o erro.

- void retirarUnidades(int index, int qtd) Retira do estoque a quantidade indicada da peça com o índice informado, atualizando a quantidade de peças no estoque. Lance exceções se o índice for inválido ou se não existem peças suficientes em estoque para essa operação.

- void acrescentarUnidades(int index, int qtd) Acrescenta ao estoque a quantidade indicada da peça com o índice informado, atualizando a quantidade de peças no estoque. Lance uma exceção se o índice for inválido.

- void imprimirPeca(int index) Imprime os dados da peça com o índice informado. Lance uma exceção se o índice for inválido.

- void relatorioGeral() Imprime os dados de todas as peças na lista.

- void relatorioReposição(int qtdMinima) Imprime os dados de todas as peças cuja quantidade em estoque é menor ou igual que a quantidade mínima informada no parâmetro.

Crie uma nova classe de exceção para o caso de o índice ser inválido. Não esqueça de capturar as exceções no método main.

Importante:
1. Teste os métodos implementados e capture todas as exceções no método main. 
2. Não utilize as classes List<>, ArrayList<> ou qualquer classe de manipulação de listas já pronta do java.
