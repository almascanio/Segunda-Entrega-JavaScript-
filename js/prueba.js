const nombreJugadores = []; 

let cantidad = 3; 

do {
    let objeto = {};
    let ingresaUnNombre = prompt("Ingresa por favor tu nombre, para empezar a jugar");
    objeto.ingresaUnNombre = ingresaUnNombre.toUpperCase();

    
    /*let eligeTuAtaque = prompt("ingresa tu ATAQUE")
    objeto.eligeTuAtaque = eligeTuAtaque
    nombreJugadores.unshift(objeto)*/
    
    let usuario = function(){
        return prompt("Escribe un numero para elegir como empezar, del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");
    }

    let eligeTuAtaque = usuario();

    while (eligeTuAtaque >= "3"){
        switch (eligeTuAtaque){
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
        eligeTuAtaque = usuario();
    }

} while (nombreJugadores.length != cantidad)

console.log(nombreJugadores);

//Variables, ciclo while y function 

/*let usuario = function(){
    return prompt("Escribe un numero para elegir como empezar, del 0 al 2: (0 = Piedra, 1 = Papel, 2 = Tijera)");
}

let jugador = usuario();

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
}*/