import { leerTeclado } from '../entradaTeclado'

export const pcirculo = async () => {
    let radio: number
    let resultado: number
    let pi= 3.14159
    radio =  parseInt( await leerTeclado('\n Introduzca el radio'))
    resultado= 2*pi*radio
    console.log(`\n El perimetro del circulo es ${resultado.toFixed(2)}`)
}