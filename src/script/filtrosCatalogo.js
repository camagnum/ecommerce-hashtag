const catalogoProdutos = document.getElementById("container-produto");

function esconderMasculinos() {
	const produtosMasculinos = Array.from(
		catalogoProdutos.getElementsByClassName("masculino")
	);
	const produtosFemininos = Array.from(
		catalogoProdutos.getElementsByClassName("feminino")
	);

	for (const produto of produtosMasculinos) {
		produto.classList.add("hidden");
	}

	for (const produto of produtosFemininos) {
		produto.classList.remove("hidden");
	}
}

function esconderFemininos() {
	const produtosMasculinos = Array.from(
		catalogoProdutos.getElementsByClassName("masculino")
	);
	const produtosFemininos = Array.from(
		catalogoProdutos.getElementsByClassName("feminino")
	);

	for (const produto of produtosFemininos) {
		produto.classList.add("hidden");
	}

	for (const produto of produtosMasculinos) {
		produto.classList.remove("hidden");
	}
}

function exibirTodos() {
    const produtosOcultos = Array.from(
		catalogoProdutos.getElementsByClassName("hidden")
    );
    
    for (const produto of produtosOcultos) {
        produto.classList.remove("hidden");
    }
};

export function inicializarFiltros() {
	document
		.getElementById("exibir-feminino")
		.addEventListener("click", esconderMasculinos);
	document
		.getElementById("exibir-masculino")
		.addEventListener("click", esconderFemininos);
	document
		.getElementById("exibir-todos")
		.addEventListener("click", exibirTodos);
}
