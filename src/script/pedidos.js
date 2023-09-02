import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./utilidades";

function criarPedidoHistorico(pedidoComData) {
	const elementoPedido = `<p class="text-xl text-bold">${pedidoComData.dataPedido}</p>
        <section id="container-pedidos-${pedidoComData.dataPedido}"></section>
    `;
	const main = document.getElementsByTagName("main")[0];
	main.innerHTML += elementoPedido;

	for (const idProduto in pedidoComData.pedido) {
		desenharProdutoCarrinhoSimples(
			idProduto,
			`container-pedidos-${pedidoComData.dataPedido}`,
			pedidoComData.pedido[idProduto]
		);
	}
}

function renderizarHistoricoPedidos() {
	const historico = lerLocalStorage("historico");
	for (const pedidoComData of historico) {
		criarPedidoHistorico(pedidoComData);
	}
}

renderizarHistoricoPedidos();
