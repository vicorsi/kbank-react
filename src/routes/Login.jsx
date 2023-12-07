// Importa o hook useState do React e os componentes LoginView e SignUp da pasta de visualizações de login
import { useState } from "react";
import LoginView from "../views/Login/LoginView";
import SignUp from "../views/Login/SignUpView";

// Componente funcional Login
export default function Login() {
	// Estado para controlar qual visualização está sendo exibida ('login' ou 'signup')
	const [view, setView] = useState("signup");

	// Estados para armazenar os dados do formulário de cadastro (signup) e do formulário de login
	const [dadosSign, setDadosSign] = useState({
		nome: "",
		email: "",
		senha: "",
		confirmarSenha: "",
		cpf: "",
		telefone: "",
	});

	const [dadosLogin, setDadosLogin] = useState({
		email: "",
		senha: "",
	});

	// Função para lidar com mudanças nos campos de entrada dos formulários
	const handleInputChange = (view, field, value) => {
		// Verifica se a visualização é 'signup' (cadastro) ou 'login'
		if (view === "signup") {
			// Atualiza o estado com os dados do formulário de cadastro
			setDadosSign({
				...dadosSign,
				[field]: value,
			});
		} else {
			// Atualiza o estado com os dados do formulário de login
			setDadosLogin({
				...dadosLogin,
				[field]: value,
			});
		}

		// Exibe os dados nos consoles para fins de depuração (pode ser removido em produção)
		console.log(dadosLogin);
		console.log(dadosSign);
	};

	// Função para lidar com o evento de login
	const login = () => {
		// Alerta temporário para indicar que o login foi acionado
		alert("logado");
	};

	// Função para lidar com o evento de cadastro
	const sign = () => {
		// Alerta temporário para indicar que o cadastro foi acionado
		alert("cadastrado");
	};

	// Condicional para renderizar a visualização apropriada com base no estado 'view'
	if (view === "login") {
		// Retorna o componente LoginView com propriedades e funções associadas ao login
		return (
			<LoginView
				onButtonClicked={login}
				onViewChange={() => setView("login")}
				dadosLogin={dadosLogin}
				onInputChange={handleInputChange}
			/>
		);
	} else {
		// Retorna o componente SignUp com propriedades e funções associadas ao cadastro
		return (
			<SignUp
				onButtonClicked={sign}
				onViewChange={() => setView("sign")}
				dadosSign={dadosSign}
				onInputChange={handleInputChange}
			/>
		);
	}
}
