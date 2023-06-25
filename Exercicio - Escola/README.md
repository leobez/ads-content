# Prova de Programação Orientada a Objeto

# Prof. Francesco Artur Perrotti – Fatec Americana

Além dos alunos regulares, a faculdade resolveu aceitar também alunos assistentes. Estes alunos podem assistir às aulas, mas não fazem provas e nem recebem diploma. Entretanto, se freqüentarem pelo menos 75% das aulas e ao final do semestre entregarem um resumo da matéria ministrada na disciplina, recebem um certificado de participação. Os alunos regulares, para que sejam aprovados é exigido que freqüentem pelo menos 75% das aulas e façam duas provas, obtendo média igual ou maior que 6,0. Considere que as duas provas têm o mesmo peso na média. Para os alunos regulares, em caso de doença ou algum impedimento previsto no regimento escolar, as faltas podem ser abonadas, desde que o aluno entregue um atestado comprovando o ocorrido. Entretanto, o numero de faltas abonadas durante o semestre não pode ser maior do que 5. 
O seu trabalho é fazer um sistema que controle as notas e freqüência dos alunos regulares e assistentes. Os alunos são cadastrados no sistema no início de semestre e no decorrer do curso as faltas e notas são atualizadas. Para todos os alunos é preciso manter o registro do nome e quantidade de faltas. Para os alunos regulares é armazenado também o RA e as notas das duas provas. Os alunos assistentes não têm RA, mas é necessário armazenar seu RG. Para os assistentes também é preciso saber se entregaram ou não o resumo final da disciplina.
Faça uma hierarquia de classes que permita registrar todas as informações relevantes para cada aluno sem duplicação de código e que contenha os seguintes métodos:

Para todos os alunos:
- void registrarFaltas(int qtd): Adiciona a quantidade faltas informada para o aluno. 

- double frequencia(): Retorna a porcentagem de freqüência do aluno, ou seja, a porcentagem de aulas que ele assistiu em relação ao total de aulas. Considere que o total de aulas é sempre 60.

- boolean aprovado(): Retorna true se o aluno foi aprovado ou false se não foi. Os alunos regulares precisam ter média maior ou igual a 6.0 nas duas provas e pelo menos 75% de freqüência nas aulas. Considere que a disciplina tem 60 aulas no semestre. Para os alunos assistentes é preciso ter pelo menos 75% de freqüência e ter entregado o resumo final.

- void historico(): Imprime todas as informações relacionadas ao aluno, inclusive a freqüência, as notas das provas e a média (para regulares) e se entregou o resumo (para assistentes) e o resultado final (aprovado ou não).

Para os alunos regulares:
- void registrarNotas(double nota1, double nota2): Armazena as notas das provas do aluno.

- double media(): Retorna a média das duas provas.

- void abonarFaltas(int qtd): abona a quantidade de faltas informada. O total de faltas abonadas durante o semestre não pode ser maior que 5.

Para os alunos assistentes:
- void receberResumo( ):  Registra a informação que o aluno entregou o resumo exigido.

IMPORTANTE: No método main da classe principal crie objetos das duas classes e teste todos os métodos implementados.