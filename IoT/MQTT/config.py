#DOTENV do Thonny

WIFI_SSID = "WIFI_IOT" # nome da rede WiFi da sala
WIFI_PASS = "Ac1ce2ss5@IOT" # senha da rede (ajuste conforme necessário)
BROKER_IP = "10.132.112.5" # IP do seu notebook (veja com ipconfig)
# -> Máquina do Marlon é o Broker - IP da máquina dele
BROKER_PORT = 1883
CLIENT_ID = "yasmin_min" # identificador único do seu dispositivo
# -> A gente no raspy
TOPIC_PUB = "senai/yasmin/hello"