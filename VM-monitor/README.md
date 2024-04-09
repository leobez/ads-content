# VM monitor

### Monitoramento de máquinas virtuais com MQTT

Durante o terceiro semestre foi efetuado um projeto na disciplina de sistemas operacionais II, e o tema escolhido foi "MQTT". A ideia era entender essa tecnologia e aplicá-la na prática.
Foi definido que esse protocolo seria utilizado para efetuar o monitoramente de computadores. Para fins de praticidade, foram escolhidas máquinas virtuais

### Projeto
<hr>
O projeto consiste em algumas etapas:

- Criar instâncias de máquinas virtuais que seriam monitoradas. Para fins de aprendizado, fomos incentivados a utilizar máquinas linux com a distribuição Arch.
- (working...)

O projeto consiste em um conjunto de máquinas virtuais que estariam conectadas a um broker MQTT enviando métricas do sistema como: CPU, Memory, disk etc
E então esse mesmo broker era conectado a uma instancia de influxDB que coletava essas métricas e as envia para uma instância do grafana que por sua vez
exibia essas informações de maneira organizada.  
