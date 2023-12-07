// Importa as bibliotecas e componentes necessários do React e de terceiros
import React, { useState, useEffect } from "react";
import axios from "axios";

// Componente funcional Dashboard
export default function Dashboard() {
	// Estado para armazenar o nome do usuário
	const [nome, setNome] = useState("");

	// Efeito useEffect para obter dados da conta ao carregar o componente
	useEffect(() => {
		// Função assíncrona para obter dados da conta do usuário
		const obterDadosDaConta = async () => {
			try {
				// Requisição HTTP GET para obter dados da conta
				const resposta = await axios.get(
					"http://127.0.0.1:8000/api/v1/user/me/"
				);

				// Extrai os dados da resposta
				const dadosConta = resposta.data;

				// Obtém o primeiro nome do usuário ou define como vazio se não existir
				const primeiroNome = dadosConta.first_name || "";

				// Atualiza o estado com o primeiro nome
				setNome(primeiroNome);
			} catch (erro) {
				console.error("Erro ao obter dados da conta:", erro);
			}
		};

		// Chama a função para obter dados da conta
		obterDadosDaConta();
	}, []); // O segundo argumento [] garante que o efeito seja executado apenas uma vez, equivalente a componentDidMount

	// Renderiza a interface do dashboard
	return (
		<div className="wrapper container mx-auto py-14">
			<div className="px-4">
				{/* Título e saudação personalizada com o nome do usuário */}
				<h1
					className="text-4xl lg:text-5xl main-title mb-3 text-red-400"
					style={{ textAlign: "left" }}
				>
					Olá, {nome}
				</h1>
				<p className="mb-10">
					Confira aqui algumas informações da sua conta
				</p>
			</div>
			<div className="flex flex-wrap container mx-auto">
				{/* Blocos de informações sobre a conta do usuário */}
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					{/* Bloco com informações sobre o saldo na conta */}
					{/* ... (código do bloco omitido para brevidade) */}
				</div>
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					{/* Bloco com informações sobre o ROI (Retorno sobre investimento) */}
					{/* ... (código do bloco omitido para brevidade) */}
				</div>
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					{/* Bloco com informações sobre o limite total de crédito */}
					{/* ... (código do bloco omitido para brevidade) */}
				</div>
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					{/* Bloco com informações sobre o total gasto em relação ao limite */}
					{/* ... (código do bloco omitido para brevidade) */}
				</div>
			</div>
		</div>
	);
}
