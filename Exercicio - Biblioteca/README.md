# Prova de Programação Orientada a Objeto 
# Prof. Francesco Artur Perrotti – Fatec Americana

A biblioteca da faculdade quer um sistema para controlar o fluxo das publicações do seu acervo, que conta com livros técnicos, livros não técnicos e periódicos (revistas). Todas as publicações precisam ter armazenado o título e a quantidade de cópias (total e disponível). Para os livros (técnicos ou não), também é necessário armazenar o nome do autor. Desconsidere os casos de livros com vários autores. Os periódicos não têm autor, mas precisam armazenar o número do volume, já que são publicações periódicas. Os livros não técnicos podem ser consultados ou emprestados livremente, desde que existam cópias disponíveis. Os periódicos não podem ser emprestados, apenas consultados dentro da biblioteca. Os livros técnicos podem ser emprestados desde que não exista uma reserva feita por algum professor. Quando um professor considera que um livro é útil para sua disciplina ele o reserva para consulta, nesse caso o livro não pode ser emprestado, apenas consultado. 
Crie uma hierarquia de classes para cadastrar as publicações da biblioteca evitando duplicação de código. Os métodos listados abaixo devem estar disponíveis nas classes solicitadas, mas fique a vontade para implementar quaisquer métodos adicionais que julgar necessário.

Para todas as publicações: 
- public void imprimir( ): Imprime todos os dados da publicação, incluindo o número total de cópias e o número de cópias disponíveis.
  
- public boolean disponível( ): retorna true se existem cópias disponíveis ou false se não existem.
  
- public boolean consultar( ): Retira uma cópia para consulta e retorna true se deu tudo certo. Este método decrementa o número de cópias disponíveis. Se não existirem cópias disponíveis este método deve retornar false e não realizar a consulta.
  
- public boolean retornar( ): Retorna uma cópia que foi retirada para consulta, caso existam cópias em consulta, incrementando o número de cópias disponíveis. Se não existirem, ou seja, se o número de cópias disponíveis já é igual ao numero total de cópias, retorna false e não realiza o retorno.
  
Para todos os livros: 
- public boolean emprestar( ): Este método diminui em um a quantidade de livros disponíveis. Se não existirem cópias disponíveis ou se for um livro reservado (no caso dos técnicos), então este método deve retornar false.
  
- public boolean devolver( ): Chamado quando uma cópia do livro é devolvida. Este método aumenta em um a quantidade de livros disponíveis. Retorna false quando não há cópias para devolver.

Para livros técnicos: 
- public void reservar( ): Torna o livro reservado, neste caso nenhuma cópia dele pode ser emprestada, apenas consultada.
  
- public void liberar( ): Libera um livro reservado anteriormente. 


IMPORTANTE: No método main da classe principal crie objetos das três classes e teste todos os métodos implementados.

