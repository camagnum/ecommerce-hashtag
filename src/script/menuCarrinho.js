import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {};

function abrirCarrinho() {
	document.getElementById("carrinho").classList.add("right-[0px]");
	document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho() {
	document.getElementById("carrinho").classList.remove("right-[0px]");
	document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
	const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
	const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

	botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
	botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function incrementarQuantidadeProduto(idProduto) {
	idsProdutoCarrinhoComQuantidade[idProduto]++;
	atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
	if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
		removerDoCarrinho(idProduto);
		return;
	}
	idsProdutoCarrinhoComQuantidade[idProduto]--;
	atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
	document.getElementById(`quantidade-${idProduto}`).innerText =
		idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {
	const produto = catalogo.find((p) => p.id === idProduto);

	const containerProdutosCarrinho =
		document.getElementById("produtos-carrinho");

	const elementoArticle = document.createElement("article");
	// <article class="flex my-2 bg-slate-100 rounded-lg relative"></article>
	const articleClasses = [
		"flex",
		"my-2",
		"bg-slate-100",
		"rounded-lg",
		"relative",
	];
	for (const articleClass of articleClasses) {
		console.log(articleClass);
		elementoArticle.classList.add(articleClass);
	}

	elementoArticle.classList.add();
	const cartaoProdutoCarrinho = `<button id="excluir-produto-${
		produto.id
	}" class="absolute top-0 right-2">
			<i	class="fa-solid fa-circle-xmark text-slate-900 hover:text-slate-700"></i>
		</button>  
		<img
			src="./assets/img/product-${produto.id}.jpg"
			alt="Carrinho: ${produto.nome}"
			class="h-24 rounded-lg"
		/>
		<div class="p-2 flex flex-col justify-between">
			<p class="text-slate-900 text-sm font-semibold">${produto.nome}</p>
			<p class="text-slate-400 text-xs">Tamanho: M</p>
			<p class="text-green-700 text-lg">$${produto.preco}</p>
		</div>
		<div class="flex text-slate-950 items-end absolute bottom-0 right-2 gap-2 text-lg">
			<button id="decrementar-produto-${produto.id}">-</button>
			<p id="quantidade-${produto.id}">${
		idsProdutoCarrinhoComQuantidade[produto.id]
	}</p>
			<button id="incrementar-produto-${produto.id}">+</button>
		</div>`;
	elementoArticle.innerHTML = cartaoProdutoCarrinho;
	containerProdutosCarrinho.appendChild(elementoArticle);

	document
		.getElementById(`decrementar-produto-${produto.id}`)
		.addEventListener("click", () =>
			decrementarQuantidadeProduto(produto.id)
		);

	document
		.getElementById(`incrementar-produto-${produto.id}`)
		.addEventListener("click", () =>
			incrementarQuantidadeProduto(produto.id)
		);

	document
		.getElementById(`excluir-produto-${produto.id}`)
		.addEventListener("click", () => removerDoCarrinho(produto.id));
}

function renderizarProdutosCarrinho() {
	const containerProdutosCarrinho =
		document.getElementById("produtos-carrinho");
	containerProdutosCarrinho.innerHTML = "";
	for (const idProduto of idsProdutoCarrinhoComQuantidade) {
		desenharProdutoNoCarrinho(idProduto);
	}
}

function removerDoCarrinho(idProduto) {
	delete idsProdutoCarrinhoComQuantidade[idProduto];
	renderizarProdutosCarrinho();
}

export function adicionarAoCarrinho(idProduto) {
	if (idProduto in idsProdutoCarrinhoComQuantidade) {
		incrementarQuantidadeProduto(idProduto);
		return;
	}
	idsProdutoCarrinhoComQuantidade[idProduto] = 1;
	desenharProdutoNoCarrinho(idProduto);
}

