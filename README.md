# projeto-simplex

Programa em C que aplica o método simplex tabelado. 

Recebe uma função objetiva e suas restrições. A partir disso encontra a solução ótima, caso esta exista.

- Apenas maximiza as funções.
- Restrições são apenas "<=" (menor ou igual).
- Variáveis restritas ao primeiro quadrante, ou seja, são apenas positivas. 

Para usar, você precisa: 
  - Informar quantas variáveis as funções possuem. 
  - Montar a função objetivo, informando o valor de cada X.
  - Informar quantas restrições esta função tem.
  - Montar cada uma das restrições, informando seus valores de X.
  - Escolher se você deseja ver o valor final direto (valor ótimo), ou ver cada um dos valores encontrados nas iterações.
