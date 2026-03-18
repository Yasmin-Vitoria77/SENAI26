from machine import Pin, ADC, PWM
from utime import sleep

led_vermelho = PWM(Pin(17))
led_verde = PWM(Pin(18))
led_azul = PWM(Pin(19))

led_vermelho.freq(1000)
led_verde.freq(1000)
led_azul.freq(1000)

pot = ADC(28)

botao = Pin(15, Pin.IN, Pin.PULL_UP)

modo = 0
ultimo_estado = 1

def desligar_tudo():
    led_vermelho.duty_u16(0)
    led_verde.duty_u16(0)
    led_azul.duty_u16(0)

while True:
    estado = botao.value()

    if ultimo_estado == 1 and estado == 0:
        modo = (modo + 1) % 3
        sleep(0.2)
       
        ultimo_estado = estado
        brilho = pot.read_u16()
        desligar_tudo()
       
        if modo == 0:
            led_vermelho.duty_u16(brilho)
        elif modo == 1:
            led_verde.duty_u16(brilho)
        elif modo == 2:
            led_azul.duty_u16(brilho)
       
        sleep(0.05)