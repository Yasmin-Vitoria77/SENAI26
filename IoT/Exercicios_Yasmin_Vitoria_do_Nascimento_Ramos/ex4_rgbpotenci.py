from machine import Pin, ADC, PWM
from utime import sleep

led_vermelho = PWM(Pin(17))
led_verde = PWM(Pin(18))
led_azul = PWM(Pin(19))

led_vermelho.freq(1000)
led_verde.freq(1000)
led_azul.freq(1000)

pot = ADC(28)

while True:
    val = pot.read_u16()
    
    led_vermelho.duty_u16(val)
    led_verde.duty_u16(0)
    led_azul.duty_u16(0)
   
    sleep(0.1)