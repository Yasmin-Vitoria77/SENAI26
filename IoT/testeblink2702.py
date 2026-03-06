from machine import Pin, ADC, PWM
from utime import sleep

ledVermelho = Pin(18, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(16, Pin.OUT)

ledVermelho.value(0) 
ledAmarelo.value(0) 
ledVerde.value(0) 

while True:
    #Semáfaro Abriu
    ledVerde.value (1)
    ledAmarelo.value(0)
    ledVermelho.value(0)
    sleep(2)
    
    #Amarelo
    ledVerde.value(0)
    ledAmarelo.value(1)
    ledVermelho.value(0)
    sleep(1)
    
    #Fechou
    ledVerde.value(0)
    ledAmarelo.value(0)
    ledVermelho.value(1)
    sleep(2)