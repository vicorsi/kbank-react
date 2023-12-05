import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    const obterDadosDaConta = async () => {
      try {
        const resposta = await axios.get("http://127.0.0.1:8000/api/v1/user/me/");
        const dadosConta = resposta.data;

        const primeiroNome = dadosConta.first_name || '';

        setNome(primeiroNome);
      } catch (erro) {
        console.error('Erro ao obter dados da conta:', erro);
      }
    };

    obterDadosDaConta();
  }, []);

	return (
		<div className="wrapper container mx-auto py-14">
			<div className="px-4">
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
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
						<div className="flex-auto p-4">
							<div className="flex flex-wrap">
								<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
									<h5 className="text-gray-500 uppercase font-bold text-xs">
										Saldo na conta
									</h5>
									<span className="font-semibold text-xl text-gray-800">
										R$ 4500.00
									</span>
								</div>
							</div>
							<p className="text-sm text-gray-500 mt-4">
								<span className="text-green-500 mr-2">
									<i className="fas fa-arrow-up"></i> 3.48%
								</span>
								<span className="whitespace-no-wrap">
									Desde o mês passado
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
						<div className="flex-auto p-4">
							<div className="flex flex-wrap">
								<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
									<h5 className="text-gray-500 uppercase font-bold text-xs">
										ROI (Retorno sobre investimento)
									</h5>
									<span className="font-semibold text-xl text-gray-800">
										R$ 163.41
									</span>
								</div>
							</div>
							<p className="text-sm text-gray-500 mt-4">
								<span className="text-red-500 mr-2">
									<i className="fas fa-arrow-down"></i> 3.48%
								</span>
								<span className="whitespace-no-wrap">
									Desde o mês passado
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
						<div className="flex-auto p-4">
							<div className="flex flex-wrap">
								<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
									<h5 className="text-gray-500 uppercase font-bold text-xs">
										Limite total (crédito)
									</h5>
									<span className="font-semibold text-xl text-gray-800">
										R$ 6000
									</span>
								</div>
								<div className="relative w-auto pl-4 flex-initial">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
										<i className="fas fa-users"></i>
									</div>
								</div>
							</div>
							<p className="text-sm text-gray-500 mt-4">
								<span className="text-orange-500 mr-2">
									<i className="fas fa-arrow-down"></i> 1.10%
								</span>
								<span className="whitespace-no-wrap">
									Desde o ano passado
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
						<div className="flex-auto p-4">
							<div className="flex flex-wrap">
								<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
									<h5 className="text-gray-500 uppercase font-bold text-xs">
										Total gasto (do limite)
									</h5>
									<span className="font-semibold text-xl text-gray-800">
										47.54%
									</span>
								</div>
								<div className="relative w-auto pl-4 flex-initial">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
										<i className="fas fa-percent"></i>
									</div>
								</div>
							</div>
							<p className="text-sm text-gray-500 mt-4">
								<span className="text-green-500 mr-2">
									<i className="fas fa-arrow-up"></i> 12%
								</span>
								<span className="whitespace-no-wrap">
									Desde o mês passado
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
