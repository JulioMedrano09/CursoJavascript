import math
print("ejercicio 10")
print("Se realiza un conversor de moneda ")

cantidad = float(input("Ingrese la cantidad de moneda original por favor: \n"))
tasaDeCambio = float(input("Ingrese la tasa de cambio correspondiente por favor: \n"))

def convertMoneda(cantidad, tasaDeCambio):
    return cantidad * tasaDeCambio


cantidadConvertida = convertMoneda(cantidad, tasaDeCambio)
print(f"La cantidad convertida es: {cantidadConvertida} unidades de la moneda destino")


