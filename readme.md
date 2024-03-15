# Teste de Performance com k6

[![wakatime](https://wakatime.com/badge/user/68660678-6b86-4b78-98df-f5f41a37e1bc/project/018e4295-c0cb-4fbd-b353-ac8c8fcd19d8.svg)](https://wakatime.com/badge/user/68660678-6b86-4b78-98df-f5f41a37e1bc/project/018e4295-c0cb-4fbd-b353-ac8c8fcd19d8)

## 💼 Sobre o projeto

Este repositório foi criado para o curso de `Testes de Performance em JavaScript com k6`.

## ✅ Objetivo

Criação de um testes de performance em JavaScript com k6.

### Primeiros Passos

#### Instalando o k6 (windows)

`winget install k6 --source winget`

#### Executando o k6

1. Crie e inicialize um novo script com o comando `k6 new script.js`

2. Execute os testes do k6 com o seguinte comando `k6 run script.js`

    - Adicionando VUs (teste de carga com mais de um usuário virtual), caso não esteja especificado no arquivo `k6 run --vus 10 --duration 30s script.js`

#### Gerando o Results

1. Para gerar o result, você primeiro precisa definir as métricas e em seguida executar o comando

    - Por exemplo, para gerar um results com os valores de mediana, p95 e p99.9, é necessário acidionar a flag `--summary-trend-stats="med,avg,p(95),p(99.9)"`

    - Para gerar uma saída externa, é necessário acidionar a flag `--out json=test.json`

        - As saídas internas disponíveis incluem:
            - Amazon CloudWatch
            - Cloud
            - CSV `--out csv=test.csv`
            - Datadog
            - Dynatrace
            - Elasticsearch
            - Grafana Cloud Prometheus
            - InfluxDB `--out influxdb=http://localhost:8086/k6`
            - JSON `--out json=test.json`
            - Netdata
            - New Relic
            - Prometheus
            - TimescaleDB
            - StatsD

## 💻 Tecnologias e Ferramentas

![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![k6](https://img.shields.io/static/v1?style=for-the-badge&message=k6&color=7D64FF&logo=k6&logoColor=FFFFFF&label=)

## 👨🏽‍💻 Autor

Bruno Dórea

![https://www.linkedin.com/in/brunohfdorea/](https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=)
[![https://www.brunodorea.com.br](https://img.shields.io/static/v1?style=for-the-badge&message=brunodorea.com.br&color=262626&label=%3Cb/%3E&labelColor=dd9208)](https://www.brunodorea.com.br)

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
