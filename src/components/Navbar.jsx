// Importa os elementos necessários do React e dos pacotes externos
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Definição de itens de navegação (apenas um item 'Início' por padrão)
const navigation = [{ name: "Início", href: "/", current: true }];

// Função utilitária para concatenar classes condicionalmente
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

// Componente funcional principal para a barra de navegação
export default function Navbar() {
	return (
		// Componente Disclosure para lidar com a visibilidade responsiva
		<Disclosure as="nav" className="bg-white">
			{({ open }) => (
				<>
					{/* Contêiner principal da barra de navegação */}
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							{/* Botão de menu para dispositivos móveis */}
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">
										Abrir menu principal
									</span>
									{open ? (
										<XMarkIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									) : (
										<Bars3Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>

							{/* Logotipo da empresa */}
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="h-8 w-auto"
										src="/images/bank-logo.svg"
										alt="Logo da Korsi Bank"
									/>
								</div>

								{/* Itens de navegação para dispositivos maiores */}
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "text-gray-800 font-semibold"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm"
												)}
												aria-current={
													item.current
														? "page"
														: undefined
												}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>

							{/* Ícone de perfil e menu suspenso */}
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<Menu as="div" className="relative ml-3">
									{/* Botão do perfil do usuário */}
									<div>
										<Menu.Button className="relative flex rounded-full bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-1.5" />
											<span className="sr-only">
												Abrir menu do usuário
											</span>
											<img
												className="h-8 w-8 rounded-full"
												src="/images/empty-avatar.png"
												alt="Imagem do usuário (em branco)"
											/>
										</Menu.Button>
									</div>

									{/* Transição para o menu suspenso do perfil */}
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										{/* Itens do menu suspenso do perfil */}
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											{localStorage.session ==
												"logged" && (
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? "bg-gray-100"
																	: "",
																"bg-red-500 block px-4 py-2 text-sm text-white"
															)}
														>
															Entrar
														</a>
													)}
												</Menu.Item>
											)}
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					{/* Painel de navegação para dispositivos móveis */}
					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={
										item.current ? "page" : undefined
									}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
