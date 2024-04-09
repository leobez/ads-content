# VM Monitor

### Gerenciamento de máquinas virtuais com MQTT

Durante o terceiro semestre foi efetuado uma pesquisa em combinação com um projeto e o tema escolhido foi "MQTT", dessa forma
foi necessário criar uma implementação prática desse protocolo.

O projeto consiste em um conjunto de máquinas virtuais que estariam conectadas a um broker MQTT enviando métricas do sistema como: CPU, Memory, disk etc

E então esse mesmo broker era conectado a uma instancia de influxDB que coletava essas métricas e as envia para uma instância do grafana que por sua vez
exibia essas informações de maneira organizada.  