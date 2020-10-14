import { leerTeclado } from '../entradaTeclado'

export const ptriangulo = async () => {
    let l1: number
    let l2: number
    let l3: number
    l1 =  parseInt( await leerTeclado('\n Introduzca el primer lado')) 
    l2 =  parseInt( await leerTeclado('\n Introduzca el segundo lado'))
    l3 =  parseInt( await leerTeclado('\n Introduzca el tercer lado'))
    console.log(`\n El perimetro del triangulo es: \n ${l1 + l2 + l3}`)
}