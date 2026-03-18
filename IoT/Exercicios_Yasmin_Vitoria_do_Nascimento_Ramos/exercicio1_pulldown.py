from machine import Pin
from utime import sleep

botao_down = Pin(15, Pin.IN)
led = Pin(14, Pin.OUT)

while True:
    leitura_botao = botao_down.value()
    
    if leitura_botao == 1:
        led.on()
        print(leitura_botao)
    else:
        led.off()
        print(leitura_botao)
    
    sleep(0.5)


