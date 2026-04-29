from machine import Pin
from utime import sleep

led = Pin(15, Pin.OUT)
pir = Pin (16, Pin.IN)

while True:
    leitura_sensor = pr.value()
    
    if(leitura_sensor == 1):
        print("Movimento!")
        led.value(1)
    else:
        print("Nada ainda...")
        led.value(0)
    sleep(0.5)






