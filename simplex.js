window.addEventListener("load", () => {
	return main();
})

function main() {
	const div_main = document.querySelector("main");
	const div_form_container = div_main.querySelector("div.form-container");
	div_form_container.append(carregarFormObjetivo(), carregarFormRestricoes(), carregarBotao());
}

function aplicarEstilo(tipo_html, classe, id, name, For, type, text) {
	let temp;
	temp = document.createElement(`${tipo_html}`);
	temp.setAttribute("class", `${classe}`);
	temp.setAttribute("id", `${id}`);
	temp.setAttribute("name", `${name}`);
	temp.setAttribute("for", `${For}`);
	temp.setAttribute("type", `${type}`);
	temp.textContent = `${text}`;
	return temp;
}

function carregarFormObjetivo() {
	var div_form_container_objetivo;
	var div_container_objetivo_titulo;
	var label_objetivo;
	var input_objetivo;

	div_form_container_objetivo = aplicarEstilo(
		"div", 
		"div-form-container-objetivo", 
		"", 
		"", 
		"", 
		"", 
		"");

	div_container_objetivo_titulo = aplicarEstilo(
		"div",
		"div-container-objetivo-titulo",
		"", 
		"", 
		"", 
		"",
		"Função Objetivo");

	label_objetivo = aplicarEstilo(
		"label", 
		"label-objetivo", 
		"label-objetivo", 
		"", 
		"objetivo", 
		"", 
		"Digite a quantidade de variáveis: ");

	input_objetivo = aplicarEstilo(
		"input", 
		"input-objetivo", 
		"objetivo", 
		"", 
		"", 
		"number",
		"");

	div_form_container_objetivo.append(div_container_objetivo_titulo, label_objetivo, input_objetivo);

	return div_form_container_objetivo;
}

function carregarFormRestricoes() {
	var div_form_container_restricoes;
	var div_container_restricoes_titulo;
	var label_restricoes;
	var input_restricoes;

	div_form_container_restricoes = aplicarEstilo(
		"div", 
		"div-form-container-restricoes", 
		"", 
		"", 
		"", 
		"", 
		"");

	div_container_restricoes_titulo = aplicarEstilo(
		"div",
		"div-container-restricoes-titulo",
		"", 
		"", 
		"", 
		"",
		"Função Restrições");

	label_restricoes = aplicarEstilo(
		"label", 
		"label-restricoes", 
		"label-restricoes", 
		"", 
		"restricoes", 
		"", 
		"Digite a quantidade de restrições: ");

	input_restricoes = aplicarEstilo(
		"input", 
		"input-restricoes", 
		"restricoes", 
		"", 
		"", 
		"number",
		"");

	div_form_container_restricoes.append(div_container_restricoes_titulo, label_restricoes, input_restricoes);

	return div_form_container_restricoes;
}

function carregarBotao() {
	const div_form_container = document.querySelector("div.form-container");

	var button_submit_form_info;

	button_submit_form_info = aplicarEstilo(
		"button",
		"button-submit-form-info",
		"",
		"",
		"",
		"",
		"Enviar"
	);

	button_submit_form_info.addEventListener("click", () => {
		// Checar se essa a div-container-tabela ja existe e deleta-la caso ja exista.
		const div_container_tabela = document.querySelector("div.div-container-tabela");
		if (div_container_tabela !== null) div_form_container.removeChild(div_container_tabela);
	
		const num_objetivo 		= Number(document.querySelector("input.input-objetivo").value);
		const num_restricoes 	= Number(document.querySelector("input.input-restricoes").value);

		// Validacao
		if (isNaN(num_objetivo) || isNaN(num_restricoes)) return window.alert("Input inválido"); 
		if (!isNaN(parseFloat(num_objetivo)) && num_objetivo.toString().includes(".")) return window.alert("Input inválido"); 
		if (!isNaN(parseFloat(num_restricoes)) && num_restricoes.toString().includes(".")) return window.alert("Input inválido"); 
		if (num_objetivo > 10 || num_restricoes > 10) return window.alert("Input inválido");
		if (num_objetivo <= 0 || num_restricoes <= 0) return window.alert("Input inválido");

		return div_form_container.append(carregarTabelas(num_objetivo, num_restricoes));
	})

	return button_submit_form_info;
}

function carregarTabelas(num_objetivo, num_restricoes) {

	var div_container_tabela;
	var div_tabela;
	var button_calcular_tabela;

	div_container_tabela = aplicarEstilo(
		"div",
		"div-container-tabela",
		"",
		"",
		"",
		"",
		"",
	);

	div_tabela = aplicarEstilo(
		"div",
		"div-tabela",
		"",
		"",
		"",
		"",
		"",
	);

	div_tabela.style.gridTemplateColumns 	= `repeat(${num_objetivo+1}, 100px)`
	div_tabela.style.gridTemplateRows 		= `repeat(${num_restricoes+1}, 50px)`

	for (var a=0; a<(num_restricoes+1); a++) {

		for (var b=0; b<(num_objetivo+1); b++) {

			const temp = aplicarEstilo(
				"div",
				`div-elemento-tabela-${a}-${b}`,
				"",
				"",
				"",
				"",
				""
			);
			temp.style.display = "flex"
			temp.style.alignItems = "center";
			temp.style.justifyContent = "center";
			temp.style.border = "2px solid black";
			
			let temp_fixed_X;
			if (b != num_objetivo) {
				temp_fixed_X = aplicarEstilo(
					"p",
					`p-${a}-${b}`,
					"",
					"",
					"",
					"",
					`X${b+1}`
				);
			} else {
				temp_fixed_X = aplicarEstilo(
					"p",
					`p-${a}-${b}`,
					"",
					"",
					"",
					"",
					"<="
				);
			}

			const temp_input = aplicarEstilo(
				"input",
				`input-${a}-${b}`,
				"",
				"",
				"",
				"number",
				""
			);

			temp_input.style.flexBasis="80%";
			temp.append(temp_fixed_X, temp_input);
			div_tabela.append(temp);
		}
	}

	button_calcular_tabela = aplicarEstilo(
		"button",
		"button-calcular-tabela",
		"",
		"",
		"",
		"",
		"Calcular",
	);
	
	button_calcular_tabela.addEventListener("click", () => {

		var valores_tabela = []

		// Validacao
		for (var a=0; a<(num_restricoes+1); a++) {
			var linha = [];
			for (var b=0; b<(num_objetivo+1); b++) {

				const input_temp = document.querySelector(`input.input-${a}-${b}`);
				if (input_temp.value === "") return window.alert("Input inválido"); 

				const value_temp = Number(input_temp.value)				
				if (isNaN(value_temp)) return window.alert("Input inválido"); 

				linha.push(value_temp);
			}
			valores_tabela.push(linha);
		}	
		return calcularSimplex(valores_tabela);
	})

	div_container_tabela.append(div_tabela, button_calcular_tabela);

	return div_container_tabela;
}

function calcularSimplex(valores_tabela) {
	console.log(valores_tabela);
}
