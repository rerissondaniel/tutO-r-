   
tutorials = {
	dp:
	{
		title: "Programação Dinâmica",

		text: "Muitos algoritmos eficientes seguem o paradigma da programação dinâmica. Como em um algoritmo recursivo, cada instância do problema é resolvida a partir da solução de instâncias menores, ou melhor, de subinstâncias da instância original. A característica distintiva da programação dinâmica é a tabela que armazena as soluções das várias subinstâncias. O consumo de tempo do algoritmo é, em geral, proporcional ao tamanho da tabela. Para que o paradigma da programação dinâmica possa ser aplicado, é preciso que o problema tenha estrutura recursiva: a solução de toda instância do problema deve conter soluções de subinstâncias da instância. Essa estrutura recursiva pode, em geral, ser representada por uma recorrência e a recorrência pode ser traduzida em um algoritmo recursivo. O algoritmo recursivo é tipicamente ineficiente porque refaz, muitas vezes, a solução de cada subinstância. Uma vez escrito o algoritmo recursivo, entretanto, é fácil construir uma tabela para armazenar as solução das subinstância e assim evitar que elas sejam recalculadas. A tabela é a base de um algoritmo de programação dinâmica.",

		problems: [
			{
				name: "Codeforces - Hard problem",
				url: "http://codeforces.com/problemset/problem/706/C"
			},
			{
				name: "Codeforces - Ilya and Escalator",
				url: "http://codeforces.com/problemset/problem/518/D"
			},
			{
				name: "Codeforces - Good Sequences",
				url: "http://codeforces.com/contest/264/problem/B"
			}
		],

		references: [
			"https://www.ime.usp.br/~pf/analise_de_algoritmos/aulas/dynamic-programming.html",
			"https://www.geeksforgeeks.org/dynamic-programming/",
			"https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/"
		]
	},

	greedy:
	{
		title: "Algoritmos Gulosos",

		text: "Para resolver um problema, um algoritmo guloso escolhe, em cada iteração, o objeto mais apetitoso que vê pela frente. (A definição de apetitoso é establecida a priori.)  O objeto escolhido passa a fazer parte da solução que o algoritmo constrói. Um algoritmo guloso é míope: ele toma decisões com base nas informações disponíveis na iteração corrente, sem olhar as consequências que essas decisões terão no futuro. Um algoritmo guloso jamais se arrepende ou volta atrás:  as escolhas que faz em cada iteração são definitivas. Embora algoritmos gulosos pareçam óbviamente corretos, a prova de sua correção é, em geral, muito sutil. Para compensar, algoritmos gulosos são muito rápidos e eficientes (é preciso dizer, entretanto, que os problemas que admitem soluções gulosas são um tanto raros).",

		problems: [
			{
				name: "Codeforces - Odd Sum",
				url: "http://codeforces.com/problemset/problem/797/B"
			},
			{
				name: "Codeforces - Convert to Ones",
				url: "http://codeforces.com/problemset/problem/997/A"
			},
			{
				name: "Codeforces - Kayaking",
				url: "http://codeforces.com/problemset/problem/863/B"
			}
		],

		references: [
			"https://www.ime.usp.br/~pf/analise_de_algoritmos/aulas/guloso.html",
			"https://en.wikipedia.org/wiki/Greedy_algorithm",
			"https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/"
		]
	},

	math:
	{
		title: "Matemática",

		text: "",

		problems: [
			{
				name: "Codeforces - Archer",
				url: "https://codeforces.com/problemset/problem/312/B"
			},
			{
				name: "Codeforces - k-Factorization",
				url: "https://codeforces.com/problemset/problem/797/A"
			},
			{
				name: "Codeforces - Jeff and Furik",
				url: "https://codeforces.com/problemset/problem/351/B"
			}
		],

		references: [
			"https://www.topcoder.com/community/data-science/data-science-tutorials/mathematics-for-topcoders/",
			"https://artofproblemsolving.com/community/c90633h1291397"
		]
	}
};