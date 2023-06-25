# Prova de Programação Orientada a Objeto - Noturno

# Prof. Francesco Artur Perrotti – Fatec Americana

O circuito regional de corrida de kart está aceitando inscrições das equipes interessadas. Como nesta temporada há muitos participantes, a organização da corrida precisa agora de um controle mais eficiente do que nos outros anos e por isso precisa de um sistema para melhorar o controle das equipes. Cada etapa da competição é formada por várias baterias com 10 pilotos em cada uma. Os melhores colocados em cada bateria participam das etapas seguintes. Faça um sistema para controlar a primeira etapa da competição. Crie duas classes, uma para as baterias e outra para as equipes participantes. A classe das baterias precisa armazenar os seguintes atributos: Categoria (string), número da bateria (inteiro), número de equipes (no máximo 10), o número da equipe vencedora e a lista de equipes.  Para as equipes, crie uma classe com os seguintes atributos: número da equipe, nome ou marca da equipe, o nome do piloto e a classificação depois da corrida (posição de chegada - valor inteiro). Note que do ponto de vista do usuário do sistema, apenas a classe das baterias é visível. A classe das equipes serve apenas para alimentar a lista de equipes na classe das baterias.
O programa deve também declarar a interface ItBateria que será implementada pela classe de baterias. 

Esta interface declara os seguintes métodos:
- void inscreverEquipe(int NumeroEquipe, String Nome, String Piloto): Cria uma nova equipe no sistema e a inclui na lista de equipes da bateria. Note que cada bateria só pode permitir até 10 equipes. Se ocorrer uma tentativa de inscrever mais do que 10 equipes o método deve lançar uma exceção. Crie uma exceção específica para este caso. Quando uma equipe é incluída, a classificação fica zerada. Este atributo será atualizado por outro método.

- int buscarEquipe(int NumeroEquipe): Recebe o número da equipe via parâmetro e retorna seu índice na lista de equipes. Se não encontrar o número da equipe na lista, o método deve retornar o valor -1.

- void desclassificar(int index): Se o kart está fora das especificações da sua categoria ou se o piloto comete alguma infração grave durante a prova, a equipe é desclassificada. Nesse caso a classificação da equipe recebe o valor -1. O parâmetro index é o índice da equipe na lista de equipes. Se o índice for inválido deve ser lançada uma exceção. Para este método pode ser criada uma exceção específica ou utilizada uma exceção já existente no Java. 

- void classificar(int índex, int posicao): Registra a classificação da equipe indicada pelo índice depois da prova, mas apenas se a equipe não tiver sido desclassificada antes. Se o índice for inválido deve ser lançada a mesma exceção que no método anterior. A posição só pode ser um valor entre 1 e a quantidade de equipes na bateria. Qualquer outro valor deve ser ignorado pelo método. Se a posição informada for 1 (primeiro colocado) o método deve também atualizar o atributo que armazena a equipe vencedora na bateria.

- void listarEquipes():  Lista todas as equipes na saída padrão. A listagem deve incluir o número da equipe, seu nome, o piloto e a classificação na prova. Se a equipe tiver sido desclassificada deve aparecer a palavra “Desclassificada” no lugar da classificação. Não é preciso ordenar a listagem pela classificação. No topo da listagem imprima os dados da bateria, incluindo o número da equipe vencedora.

O método main da aplicação deve testar todos os métodos acima incluindo pelo menos 3 equipes no sistema e capturar as exceções lançadas pelos métodos.
