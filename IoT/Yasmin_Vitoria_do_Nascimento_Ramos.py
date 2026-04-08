from machine import Pin
from utime import sleep

led_r = Pin(15, Pin.OUT)
led_g = Pin(17, Pin.OUT)
led_b = Pin(16, Pin.OUT)
up_btn = Pin(14, Pin.IN)
down_btn = Pin(18, Pin.IN)
velocidade = 0
ultimo_estado_botao = 0 

#aumentar = pull up / diminuir = pull down
while True:
    estado_botao = down_btn.value()
    desligar = up_btn.value()
    
    #Não existe leitura do não clicado - isso aqui é PULL DOWN (qnd eu clico manda 1!)
    if estado_botao == 0:
        print("Aperte o botão para aumentar a velocidade")
        
    #A velocidade é gradativa - vai acumulando    
    elif estado_botao == 1 and ultimo_estado_botao == 0:
        velocidade + 1
        led_b(1)
        print("Velocidade do ventilador: ", velocidade)
        
    elif estado_botao == 1 and ultimo_estado_botao == 1:
        velocidade + 1
        led_b(0)
        led_g(1)
        print("Velocidade do ventilador: ", velocidade)

    elif estado_botao == 1 and ultimo_estado_botao == 2:
        velocidade + 1
        led_b(0)
        led_g(0)
        led_r(1)
        print("Velocidade do ventilador: ", velocidade)
        
    elif estado_botao == 1 and ultimo_estado_botao == 3:
        velocidade =0
        led_r(0)
        print("Velocidade do ventilador: ", velocidade)
        
    else: 
        desligar == 0
        print("Ventilador desligado")
        
