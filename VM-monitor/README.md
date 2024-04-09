# VM monitor

### Monitoramento de máquinas virtuais com MQTT

Durante o terceiro semestre foi efetuado um projeto na disciplina de sistemas operacionais II, e o tema escolhido foi "MQTT". A ideia era entender essa tecnologia e aplicá-la na prática.

Foi definido que esse protocolo seria utilizado para efetuar o monitoramente de computadores. Para fins de praticidade, foram escolhidas computadores virtuais.

<hr>

### Tecnologias utilizadas
- [Linux](https://pt.wikipedia.org/wiki/Linux): sistema operacional utilizado.
- [Arch](https://archlinux.org/): distro utilizada.
- [Telegraf](https://www.influxdata.com/time-series-platform/telegraf/): software agente que coleta informações de um sistema e envia para outro sistema.
- [MQTT](https://mqtt.org/): servidor que permite comunicação de sistemas através de uma comunicação pub/sub.
- [Mosquitto](https://mosquitto.org/): servidor público que foi usado para testar o sistema.
- [Docker](https://www.docker.com/): software que permite criar containers para conjunto de softwares do sistema.
- [InfluxDB](https://www.influxdata.com/): banco de dados com melhores recursos para análise de métricas.
- [Grafana](https://grafana.com/): aplicação que permite exibir informações de forma organizada em grafos.

<hr>

### Projeto
O projeto consiste em algumas etapas:

- Criar instâncias de máquinas virtuais que seriam monitoradas. Para fins de aprendizado, foram utilizados máquinas linux com a distro Arch.
- Instalar e configurar Telegraf em todas as máquinas, que seria responsável por coletar informações do sistema (CPU, Mem, Disk) e envia-las a um broker MQTT.
- Configurar uma instância em nuvem de InfluxDB, que se conectaria ao broker MQTT e capturaria as informações enviadas pelo Telegraf.
- Configurar uma instância em nuvem de Grafana, que exibiria as informações armazenadas pelo influxDB em formato de gráficos.
- Para fins de praticidade, todo o ambiente das máquinas virtuais foram armazenados em containers, que já continham as configurações do Telegraf e do MQTT.

### Imagem do final do sistema
