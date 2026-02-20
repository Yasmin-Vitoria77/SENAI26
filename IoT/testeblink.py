from machine import Pin, ADC, PWM
from utime import sleep

led = Pin("LED", Pin.OUT)

while True:
    led.toggle()      
    sleep(0.1)