import {
	desenharProdutoCarrinhoSimples,
	lerLocalStorage,
	apagarDoLocalStorage,
	salvarLocalStorage,
} from "./utilidades";

function desenharProdutosCheckout() {
	const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
	for (const idProduto in idsProdutoCarrinhoComQuantidade) {
		desenharProdutoCarrinhoSimples(
			idProduto,
			"container-produtos-checkout",
			idsProdutoCarrinhoComQuantidade[idProduto]
		);
	}
}

function finalizarCompra(evento) {
	evento.preventDefault();
	const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
	if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
		return;
	}
	const dataAtual = new Date();
	const pedidoFeito = {
		dataPedido: dataAtual,
		pedido: idsProdutoCarrinhoComQuantidade,
	};

	const historicoPedidos = lerLocalStorage("historico") ?? [];
	const historicoPedidosAtualizado = [pedidoFeito, ...historicoPedidos];

	salvarLocalStorage("historico", historicoPedidosAtualizado);
	apagarDoLocalStorage("carrinho");
	window.location.href = window.location.origin + "/pedidos.html";
}

desenharProdutosCheckout();
document.addEventListener("submit", (evt) => finalizarCompra(evt));
