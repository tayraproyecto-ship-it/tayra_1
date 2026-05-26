let nombre = localStorage.getItem("usuario");

document.getElementById("saludo").innerHTML =
    "Hola " + nombre + " 🌿";

/* ABRIR PAGINA */

function abrirHierba(hierba){

    localStorage.setItem("hierba", hierba);

    window.location.href = "detalle.html";
}

/* BUSCAR */

function buscarHierba(){

    let input =
        document.getElementById("buscador").value.toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        let texto =
            card.innerText.toLowerCase();

        if(texto.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";
        }

    });

}