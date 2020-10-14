import { leerTeclado } from '../entradaTeclado'

export const acirculo = async () => {
    let pi= 3.14159
    let radio: number
    radio =  parseInt( await leerTeclado('\n Introduzca el radio')) 
    let resultado= Math.pow(radio,2) * pi
    console.log(`\n El area del circulo es: \n ${resultado.toFixed(2)}`)
}