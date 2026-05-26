function mostrarFormulario(){

    document
        .getElementById("inicio")
        .classList.add("hidden");

    document
        .getElementById("formulario")
        .classList.remove("hidden");
}

function guardarNombre(){

    let nombre =
        document.getElementById("nombre").value;

    if(nombre.trim() === ""){

        alert("Ingresa tu nombre");
        return;
    }

    // GUARDAR NOMBRE
    localStorage.setItem("usuario", nombre);

    // ABRIR OTRA PAGINA
    window.location.href = "hierbas.html";
}