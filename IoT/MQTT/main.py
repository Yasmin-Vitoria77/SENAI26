from config import * #importando um arquivo
from wifi_connect import conectar_wifi
from umqtt.simple import MQTTClient
import time

if not conectar_wifi(WIFI_SSID, WIFI_PASS):
    print("Sem WiFi — encerrando.")
else:
    cliente = MQTTClient(CLIENT_ID, BROKER_IP, port=BROKER_PORT)
    cliente.connect()
    print("Conectado ao broker!")

    contador = 0
    while True:
        mensagem = f"Teste sem sensor {contador}"
        cliente.publish(TOPIC_PUB, mensagem)
        print(f"Publicado: {mensagem}")
        contador += 1
        time.sleep(3)