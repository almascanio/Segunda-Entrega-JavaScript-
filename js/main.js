//Inicio del juego
alert ("Inicia el juego! (Piedra, papel o tijera). Elige muy bien tu ataque"); 

// Variables, array, objetos, ciclo. 
const nombreJugadores = []; 

let cantidad = 1; 

let jugador = undefined;

let usuario = function (){
    undefined;
}

do {
    let objeto = {};
    let ingresaUnNombre = prompt("Ingresa por favor tu nombre, para empezar a jugar");
    objeto.ingresaUnNombre = ingresaUnNombre.toUpperCase();

    usuario = prompt("Escribe un numero para elegir como empezar, del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");

    let jugador = usuario;

    while (jugador >= "3"){
        switch (jugador){
            case "0":
                console.log("Elegiste piedra");
                break;
            case "1":
                console.log("Elegiste papel");
                break;
            case "2":
                console.log("Elegiste tijera");
                break;
            default:
                console.log("No elegiste ningun valor correcto del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");    
        }
        jugador = usuario();
    } 
    
    objeto.usuario = usuario; 
    nombreJugadores.push(objeto)

} while (nombreJugadores.length != cantidad)

console.log(nombreJugadores);

/*Jugada aleatoria
0 piedra
1 papel
2 tijera*/

let enemigo = Math.floor(Math.random() * 3);

if (enemigo == 0){
    console.log("El enemigo escogio piedra");
} else if (enemigo == 1){
    console.log("El enemigo escogio papel");
} else if (enemigo == 2){
    console.log("El enemigo escogio tijera");
}

/*Resultado del juego 
0 piedra 
1 papel 
2 tijera*/

if (jugador == 0 && enemigo == 0){
    console.log("Empate");
} else if (jugador == 0 && enemigo == 1){
    console.log("Gano el enemigo con Papel a Piedra");
} else if (jugador == 0 && enemigo == 2){
    console.log("Ganaste con Piedra a Tijera");
} else if ( jugador == 1 && enemigo == 1){
    console.log("Empate");
} else if (jugador == 1 && enemigo == 0){
    console.log("Ganaste con Papel a Piedra");
} else if (jugador == 1 && enemigo == 2){
    console.log("Gano el enemigo con Tijera a Papel");
} else if (jugador == 2 && enemigo == 2){
    console.log("Empate")
} else if (jugador == 2 && enemigo == 0){
    console.log("Gano el enemigo con Piedra a Tijera")
} else if (jugador == 2 && enemigo == 1){
    console.log("Ganaste con Tijera a Papel")
} else {
    console.log("Ingresa un numero para poder jugar y ser el ganador")
}

console.log("Termino el juego, gracias por participar");











//if (jugador == enemigo){
    //console.log("Empate, no peleen");
//} else if (jugador == 0 && enemigo == 2){
  //  console.log("Ganaste con piedra");
//} else if (jugador == 1 && enemigo == 0){
  //  console.log("Ganaste con papel"); 
//} else if (jugador == 2 && enemigo == 1){
  //  console.log("Ganaste con tijera");
//} else {
  //  console.log("Perdiste, vuelve a intentarlo, no te rindas");
//}

