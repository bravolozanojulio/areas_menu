// Importaremos los menus creados 

import { menuPral } from './view/menus/menuPral'
import { menuPral2 } from './view/menus/menuPral2'
import { menuPral3 } from './view/menus/menuPral3'



// Importaremos la funciones creadas para realizar lo calculos 

import {ptriangulo} from  './view/functions/ptriangulo'
import {prectangulo} from './view/functions/prectangulo'
import {pcirculo} from './view/functions/pcirculo'

import {atriangulo} from  './view/functions/atriangulo'
import {arectangulo} from './view/functions/arectangulo'
import {acirculo} from './view/functions/acirculo'




// A continuacion, procederemos a desarrollar la funcion principal de nuestra aplicacion

// Utilizaremos el menu principal, y utilizando el "Case" para programar que debe hacer cada opción

const main = async () => {
    let n: number
    let b: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Usted ha seleccionado la opción calcular perimetro: \n")
                b = await menuPral2()
                switch(b){
                            case 1:
                                console.log("\n Usted va a calcular el perimetro de un triangulo")
                                await ptriangulo()
                                break
                            case 2:
                                console.log("\n Usted va a calcular el perimetro de un rectangulo")
                                await prectangulo()
                                break
                            case 3:
                                console.log("\n Usted va a calcular el perimetro de un circulo")
                                await pcirculo()
                                break
                }
                break
              case 2:
                    console.log("Usted ha seleccionado la opción calcular area \n ")
                    b = await menuPral3()
                    switch(b){
                             case 1:
                                 console.log("\n Usted va a calcular el area de un triangulo")
                                 await atriangulo()
                                 break
                            case 2:
                                 console.log("\n Usted va a calcular el area de un rectangulo")
                                 await arectangulo()
                                 break
                            case 3:
                                  console.log("\n Usted va a calcular el area de un circulo")
                                  await acirculo()
                                 break
                    }
                    break
            case 0:
                console.log('\n Gracias por utilizar nuestro programa ')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}


// Ejecutamos la funcion

main()



