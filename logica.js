let numSecreto = Math.floor(Math.random() * 10);
let intentos = 10


function adivinarNumero(){
    let obtenerNumero = document.getElementById("miNumero").value

    //1 verificar si aún quedan intentos
    if (intentos > 0) {
        if (obtenerNumero == numSecreto) {
            console.log(`Ganaste!, el numero secreto era ${numSecreto}`)
            intentos = 0; //termina el juego
            return; //salimos para que no se sigan reduciendo los intentos
        }
        if (obtenerNumero < numSecreto) {
                console.log("El numero secreto es mas grande")
        }
        if (obtenerNumero > numSecreto) {
            console.log("El numero secreto es mas bajo")
        }
        //2 reducir el numero de intentos
        intentos--
        console.log(`Te quedan ${intentos} intentos`)
    }
    
    //3 verificar si se acabaron los intentos
    if (intentos == 0 && numSecreto != obtenerNumero ) {
        console.log(`Lo siento se acabaron tus intentos, el numero secreto era ${numSecreto}`)
    }
}