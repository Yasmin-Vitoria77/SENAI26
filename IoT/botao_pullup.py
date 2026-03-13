from machine import Pin
from utime import sleep

botao_up = Pin(14, Pin.IN)

while True:
    leitura_botao = botao_up.value()
    
    if leitura_botao == 0:
        print("O botão foi pressionado!(Estado: LOW)")
        print(leitura_botao)
    else:
        print("O botão NÃO foi pressionado! (Estado: HIGH)")
        print(leitura_botao)
    
    sleep(0.5)