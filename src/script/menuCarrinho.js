import { catalogo } from "./utilidades";

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

export function adicionarAoCarrinho(idProduto) {
	const produto = catalogo.find((p) => p.id === idProduto);
	const containerProdutosCarrinho =
		document.getElementById("produtos-carrinho");
	const cartaoProdutoCarrinho = `<article class="flex my-2 bg-slate-100 rounded-lg relative">
		<button id="excluir-produto" class="absolute top-0 right-2">
			<i	class="fa-solid fa-circle-xmark text-slate-900 hover:text-slate-700"></i>
		</button>  
		<img
			src="./assets/img/product-${produto.id}.jpg"
			alt="Carrinho: ${produto.nome}"
			class="h-24 rounded-lg"
		/>
		<div class="py-3">
			<p class="text-slate-900 text-sm font-semibold">
				${produto.nome}
			</p>
			<p class="text-slate-400 text-xs">
				Tamanho: M
			</p>
			<p class="text-green-700 text-lg">
				$${produto.preco}
			</p>
		</div>
	</article>
	`;
	containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
