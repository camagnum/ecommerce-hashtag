export const catalogo = [
	{
		id: "1",
		marca: "Zara",
		nome: "Camisa Larga com Bolsos",
		preco: 70,
		nomeArquivoImagem: "product-1.jpg",
		feminino: false,
	},
	{
		id: "2",
		marca: "Zara",
		nome: "Casaco Reto com Lã",
		preco: 85,
		nomeArquivoImagem: "product-2.jpg",
		feminino: true,
	},
	{
		id: "3",
		marca: "Zara",
		nome: "Jaqueta com Efeito Camurça",
		preco: 60,
		nomeArquivoImagem: "product-3.jpg",
		feminino: false,
	},
	{
		id: "4",
		marca: "Zara",
		nome: "Sobretudo em Mescla de Lã",
		preco: 160,
		nomeArquivoImagem: "product-4.jpg",
		feminino: false,
	},
	{
		id: "5",
		marca: "Zara",
		nome: "Camisa Larga Acolchoada de Veludo Cotelê",
		preco: 110,
		nomeArquivoImagem: "product-5.jpg",
		feminino: false,
	},
	{
		id: "6",
		marca: "Zara",
		nome: "Casaco de Lã com Botões",
		preco: 170,
		nomeArquivoImagem: "product-6.jpg",
		feminino: true,
	},
	{
		id: "7",
		marca: "Zara",
		nome: "Casaco com Botões",
		preco: 75,
		nomeArquivoImagem: "product-7.jpg",
		feminino: true,
	},
	{
		id: "8",
		marca: "Zara",
		nome: "Colete Comprido com Cinto",
		preco: 88,
		nomeArquivoImagem: "product-8.jpg",
		feminino: true,
	},
];

export function salvarLocalStorage(chave, informacao) {
	localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
	return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
	localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
	idProduto,
	idContainerHtml,
	quantidadeProduto
) {
	const produto = catalogo.find((p) => p.id === idProduto);

	const containerProdutosCarrinho = document.getElementById(idContainerHtml);

	const elementoArticle = document.createElement("article"); // <article class="flex my-2 bg-slate-100 rounded-lg relative"></article>

	const articleClasses = [
		"flex",
		"mb-2",
		"bg-stone-200",
		"rounded-lg",
		"relative",
	];

	for (const articleClass of articleClasses) {
		elementoArticle.classList.add(articleClass);
	}

	const cartaoProdutoCarrinho = `<img
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
			<p id="quantidade-${produto.id}">${quantidadeProduto}</p>
		</div>`;
	elementoArticle.innerHTML = cartaoProdutoCarrinho;
	containerProdutosCarrinho.appendChild(elementoArticle);
}
