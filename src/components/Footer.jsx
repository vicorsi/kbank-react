// Definição do componente funcional Footer
export default function Footer() {
	// Retorna o JSX que representa o rodapé da aplicação
	return (
		// Elemento de rodapé com classes de estilo
		<footer className="text-white text-bold text-center bg-red-400 px-4 py-10">
			{/* Parágrafo informando para entrar em contato com o atendimento */}
			<p>
				Para mais informações, entre em contato com nosso atendimento:
			</p>
			{/* Parágrafo contendo o número de contato */}
			<p>(00) 1122334-4556</p>
			{/* Parágrafo exibindo o ano atual e informações sobre o banco */}
			<p>&copy; 2023 Korsi Bank - CNPJ XX.XXX.XXX/YYYY-ZZ</p>
		</footer>
	);
}
