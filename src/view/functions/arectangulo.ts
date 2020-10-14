import { leerTeclado } from '../entradaTeclado'

export const arectangulo = async () => {
    let base: number
    let altura: number
    base =  parseInt( await leerTeclado('\n Introduzca la base')) 
    altura =  parseInt( await leerTeclado('\n Introduzca la altura'))
    console.log(`\n El area del rectangulo es: \n ${base * altura}`)
}