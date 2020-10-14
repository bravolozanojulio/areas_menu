import { leerTeclado } from '../entradaTeclado'

export const prectangulo = async () => {
    let l1: number
    let l2: number
    l1 =  parseInt( await leerTeclado('\n Introduzca el primer lado')) 
    l2 =  parseInt( await leerTeclado('\n Introduzca el segundo lado'))
    console.log(`\n El perimetro del rectangulo es: \n ${2*(l1 + l2)}`)
}