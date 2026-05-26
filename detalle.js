let hierba = localStorage.getItem("hierba");

let titulo =
    document.getElementById("titulo");

let descripcion =
    document.getElementById("descripcion");

let imagen =
    document.getElementById("imagen");

/* DATOS */

if(hierba == "muna"){

    titulo.innerHTML = "Muña";

    descripcion.innerHTML =
        "La muña es una planta medicinal andina utilizada para el dolor de estómago, gases y soroche.";

    imagen.src = "muña.png";
}

if(hierba == "eucalipto"){

    titulo.innerHTML = "Eucalipto";

    descripcion.innerHTML =
        "El eucalipto ayuda a combatir la gripe, tos y problemas respiratorios.";

    imagen.src = "eucalipto.png";
}

if(hierba == "manzanilla"){

    titulo.innerHTML = "Manzanilla";

    descripcion.innerHTML =
        "La manzanilla sirve para relajar el cuerpo y aliviar dolores estomacales.";

    imagen.src = "manzanilla.png";
}

if(hierba == "romero"){

    titulo.innerHTML = "Romero";

    descripcion.innerHTML =
        "El romero mejora la memoria y ayuda a la circulación sanguínea.";

    imagen.src = "romero.png";
}

/* VOLVER */

function volver(){

    window.location.href = "hierbas.html";
}