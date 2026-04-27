function Desplegar() {

    var menu = document.getElementsByClassName("links")//Variable para traer el menu del html(en este caso se llama links)
    var boton = document.getElementsByClassName("boton-menu")//Variable para traer el boton del html(en este caso se llama boton-menu)
    //Si el menu esta activo se muestra la X y si no lo esta se muestra el simbolo de las tres rayas
    if (menu[0].classList.contains("active")) {
        boton[0].innerText = "≡";
    }
    else {
        boton[0].innerText = "X";
    }
    //El metodo toggle se encarga de agregar o quitar la clase active dependiendo de si esta o no esta en el elemento
    menu[0].classList.toggle("active")
}