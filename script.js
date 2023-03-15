var botao = document.getElementById("botao-mudar-cor");
botao.addEventListener("click", mudarCor);

var corAnterior = document.body.style.backgroundColor;

function mudarCor() {
	if (document.body.style.backgroundColor === "red") {
		document.body.style.backgroundColor = corAnterior;
	} else {
		corAnterior = document.body.style.backgroundColor;
		document.body.style.backgroundColor = "red";
	}
}
