# Programação Orientada a Objeto 
Prof. Francesco Artur Perrotti – Fatec Americana

Um estacionamento que vende carros usados deseja informatizar seu sistema de controle de carros. O estacionamento só vende carros próprios e também carros de terceiros em consignação. O seu trabalho é criar uma hierarquia de classes para fazer esse controle sem duplicação de código.
As classes para os carros devem conter as seguintes características: Para todos os carros é preciso registrar a placa, o ano de fabricação e o modelo do carro. Também é necessário um atributo que informe se o carro está disponível ou não. Os carros próprios devem ter registrado o valor de compra (quanto foi pago pelo carro) e a data da compra. Para os carros consignados o sistema deve armazenar o nome do proprietário e o valor que ele deseja receber pelo carro. Depois que o carro é vendido, seja próprio ou consignado, deve ficar marcado como vendido (não disponível) e deve ter o nome do vendedor armazenado. 

Os seguintes métodos devem estar disponíveis:
- public boolean disponivel(): Retorna true se o carro está disponível, ou seja, ainda não foi vendido. Retorna false se o carro já foi vendido. Quando é criada uma instancia de um carro, ele começa disponível e o nome do vendedor fica em branco.

- public void imprimeDados(): Imprime todos os atributos do carro na saída padrão. Deve informar também se o carro está disponível ou se foi vendido. Caso o carro já tenha sido vendido, informar também o nome do vendedor.

- public boolean oferta(double valor): Retorna true se o valor ofertado para o carro é aceitável. Um valor é aceitável se for pelo menos 10% maior que o preço de compra para os carros próprios ou 5% maior que o valor desejado pelo proprietário para os carros consignados.

- public boolean venderCarro(String vendedor, double valorVenda): Vende o carro. O carro passa a ser marcado como vendido (não disponível) e o nome do vendedor é armazenado. Retorna false (e não faz nada) se:
1) O valor de venda não é aceitável. 
2) O carro já tinha sido vendido antes.

Para testar a hierarquia criada, crie instâncias dos carros no método main da aplicação e use todos os métodos implementados.  


