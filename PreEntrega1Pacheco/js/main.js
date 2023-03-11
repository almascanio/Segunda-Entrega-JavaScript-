//Inicio del juego
alert ("Inicia el juego! (Piedra, papel o tijera). Elige muy bien tu ataque"); 

//Variables, ciclo while y function 

let usuario = function(){
    return prompt("Escribe un numero para elegir como empezar, del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");
}

let jugador = usuario();

while (jugador >= "3" ){
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

let enemigo = Math.round(Math.random() * 2);

//Jugada aleatoria

if (enemigo == 0){
    console.log("El enemigo escogio piedra");
} else if (enemigo == 1){
    console.log("El enemigo escogio papel");
} else if (enemigo == 2){
    console.log("El enemigo escogio tijera");
}

//Resultado del juego 
if (jugador == enemigo){
    console.log("Empate, no peleen");
} else if (jugador == 0 && enemigo == 2){
    console.log("Ganaste con piedra");
} else if (jugador == 1 && enemigo == 0){
    console.log("Ganaste con papel"); 
} else if (jugador == 2 && enemigo == 1){
    console.log("Ganaste con tijera");
} else {
    console.log("Perdiste, vuelve a intentarlo, no te rindas");
}

console.log("Termino el juego, gracias por participar");

