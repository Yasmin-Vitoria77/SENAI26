from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led = PWM(Pin(14))
led.freq(1000)

led.duty_u16(0)

while True:
    #Variável guardando o valo real do potenciometro
    valor = potenciometro.read_u16()
    print("Valor original: ", valor)
    sleep(0.5)
    
    #Transfromando/convertendo leitura ADC para porcentagem
    porcentagem_valor = int((valor * 100) / 65535) 
    
    #print("Valor %: ", porcentagem_valor)
    print(f"Valor porcentagem:  {porcentagem_valor}%")
    
    #Convertendo para modelo de mapeamento - FUNÇÃO MAP
    def mapear(leitura_potenciometro, in_min, in_max, out_min, out_max):
        return int((leitura_potenciometro - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
            
    valor_mapeado = mapear(valor, 0, 65535, 0, 255)
    print(f"Valor mapeado: ", valor_mapeado)
     
    led.duty_u16(valor)
    sleep(0.3)