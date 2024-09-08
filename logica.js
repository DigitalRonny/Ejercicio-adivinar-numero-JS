let numSecreto = Math.floor(Math.random() * 10);
let intentos = 10


function adivinarNumero(){
    let obtenerNumero = document.getElementById("miNumero").value

    do {
        if (obtenerNumero == numSecreto) {
            console.log(`Ganaste!, el numero secreto era ${numSecreto}`)
            break
        }
        if (obtenerNumero < numSecreto) {
            console.log("El numero secreto es mas grande")
        }
        if (obtenerNumero > numSecreto) {
            console.log("El numero secreto es mas bajo")
        }
    } while (numSecreto != obtenerNumero && --intentos > 0);
}