import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
	for (const produto of catalogo) {
		const cartaoProduto = `<div id="card-produto-${produto.id}"
		class="hover:cursor-pointer w-48 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${
			produto.feminino ? "feminino" : "masculino"
		}">
        <img
            src="./public/assets/img/${produto.nomeArquivoImagem}"
            alt="Produto ${produto.id} do Magazine Hashtag"
            class="group-hover:scale-110 duration-300 my-3 rounded-lg"
        />
        <p class="text.sm">${produto.marca}</p>
        <p class="text.sm">${produto.nome}</p>
        <p class="text.sm">$${produto.preco}</p>
        <button id="adicionar-${
			produto.id
		}" class="bg-slate-950 text-slate-200 hover:scale-105 hover:bg-slate-700">
            <i class="fa-solid fa-cart-plus"></i>
        </button>
    </div>`;

		document.getElementById("container-produto").innerHTML += cartaoProduto;
	}

	for (const produto of catalogo) {
		document
			.getElementById(`adicionar-${produto.id}`)
			.addEventListener("click", () => adicionarAoCarrinho(produto.id));
	}
}
