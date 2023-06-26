# Exercicio pode ser encontrado (AQUI)[https://pooperrotti.fandom.com/pt-br/wiki/Exerc%C3%ADcios_e_exemplos]

Classe Ponto (Projeto Cartesiano): Crie um novo projeto chamado Cartesiano e implemente nele a classe Ponto. Esta classe representa um ponto no plano cartesiano. Tem como atributos as coordenadas X e Y do ponto (double).
Mantenha os atributos protegidos e implemente getters e setters para acesso aos atributos.
Implemente três construtores para a classe: o construtor padrão, um parametrizado e um Copy constructor. O construtor padrão inicia o ponto na origem (0,0).
Implemente também os seguintes métodos públicos:

- void setXY(double newX, double newY): Atribui novos valores para as coordenadas X e Y.

- void assign(Ponto pt): Copia o valor dos atributos de pt para os atributos do objeto.

- double deltaX(double vX): Retorna o delta X para o valor informado (vX - X).

- double deltaY(double vY): Retorna o delta Y para o valor informado (vY - Y).

- double distance(double posX, double posY): Calcula e retorna a distância do ponto até a posição informada pelos parâmetros. Use os métodos deltaX e deltaY para calcular a distância.

- void desloc(double dX, double dY): Desloca o ponto adicionando os valores informados às coordenadas do ponto.

- void escale(double factor): Faz o escalonamento do ponto multiplicando as coordenadas pelo fator de escalonamento informado no parâmetro.


Classe Ponto (Projeto Cartesiano) Para a classe Ponto do exercício anterior, implemente os seguintes métodos:

- double distance (Ponto pt): sobrecarga do método distance. Retorna a distância do ponto até o ponto informado no parâmetro.

- double distance ( ): sobrecarga do método distance. Retorna a distância do ponto até a origem do plano cartesiano.

- String toString ( ): retorna uma representação do ponto em forma de string no formato "(x, y)".


Classe Segmento (Projeto cartesiano) No projeto Cartesiano, acrescente a classe Segmento. Esta classe representa um segmento de reta através dos dois pontos nas extremidades do dito cujo. Para representá-los, use dois objetos da classe Ponto como atributos da classe Segmento. Faça também três construtores: padrão, parametrizado e clone. O construtor padrão deve iniciar o segmento com os pontos (0,0) e (0,1). O construtor parametrizado deve receber as coordenadas x e y dos dois pontos para iniciar o segmento e finalmente o construtor clone inicia o segmento copiando as coordenadas dos pontos de outro segmento já existente.
Para esta classe faça os seguintes métodos públicos:

- void assign(Segmento sg): Copia o valor dos atributos de sg para os atributos do objeto.

- void desloc(double dX, double dY): Desloca o segmento com os valores informados.

- void escale(double factor): Faz o escalonamento do segmento pelo fator de escalonamento informado no parâmetro.

- String toString ( ): retorna uma representação do segmento em forma de string no formato "[(x1,y1),(x2,y2)]".

- double length( ): retorna o comprimento do segmento.

- public boolean isValid(): Informa se o segmento é válido ou não. Para este método, um segmento é válido se os dois pontos estão instanciados e são diferentes entre si.

- public Ponto midPoint(): retorna o ponto médio do segmento.


Resolução exercício 5

6) Classe Circulo (Projeto cartesiano) Ainda no projeto Cartesiano, acrescente a classe Circulo. Esta classe é descendente da classe Ponto. Para esta representação, o circulo é descrito por um ponto (centro) e o raio (double). Implemente os três construtores de praxe: padrão, parametrizado e clone. Para o construtor padrão inicie o círculo com centro em (0,0) e raio 1.

Faça também os seguintes métodos públicos:

    void assign(Circulo cl): Copia o valor dos atributos de cl para os atributos do objeto.
    void escale(double factor): Faz o escalonamento do círculo pelo fator de escalonamento informado no parâmetro.
    String toString ( ): retorna uma representação do círculo em forma de string no formato "(cx,cy):raio".
    public boolean isValid(): Informa se o círculo é válido ou não. Para este método, um círculo é válido se o raio é maior que zero.
    double perimeter( ): retorna o perímetro do círculo.
    double area( ): retorna a área do círculo.

7) Classe Poligono (Projeto cartesiano) Para o projeto Cartesiano, acrescente a classe Poligono. Esta classe mantém uma lista de pontos (da classe Ponto) que representam os vértices do polígono. Para este projeto, um polígono pode ter no máximo 50 vértices. O polígono é criado sem vértices e depois eles são adicionados usando o método apropriado. Para esta classe faça os seguintes métodos:

    public boolean ptExist(Ponto pt): retorna true se o ponto já existe na lista de vértices ou false se não existe.
    public boolean addVertex(Ponto pt): Adiciona um novo vértice no final da lista. Retorna true se o vértice foi adicionado com sucesso ou false se houve algum erro. São condições de erro:
        O ponto já existe na lista.
        O polígono já tem 50 vértices.
    public boolean isValid(): Informa se é um polígono válido ou não. Para este método, um polígono é válido se tiver pelo menos 3 vértices.
    public double perimeter(): retorna o perímetro do polígono. Se não é um polígono válido, deve retornar -1.
    public Ponto geoCenter(): retorna o ponto que é o centro geométrico do polígono. O centro geométrico pode ser calculado fazendo a média de todos os vértices.
    public double distance(Poligono plg): retorna a distância entre o centro geométrico do polígono no objeto e o centro geométrico do polígono informado no parâmetro.
    public void desloc(double dx, double dy): desloca o polígono com os valores informados.
    public void escale(double factor): faz o escalonamento do polígono usando o fator informado.