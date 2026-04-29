from machine import Pin
from utime import sleep

sensor_presenca = Pin (16, Pin.IN)

while True:
    leitura_sensor = sensor_presenca.value()
    
    if(leitura_sensor == 1):
        print("Presença detectada!")
    else:
        print("Nenhum movimento detectado...")
    sleep(0.5)





