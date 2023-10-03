let edad = parseInt(prompt("Coloque su edad"))

if (edad >= 18) {
    alert("Eres mayor de edad, puedes acceder a la página.")
} else if (edad >= 16 && edad <= 17) {
    alert("Eres menor, puedes ingresar a la página con la autorización de un adulto.")
} else {
    alert("Eres menor de edad, no puedes ingresar a la página.")
}