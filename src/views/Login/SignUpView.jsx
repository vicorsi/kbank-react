export default function SignUpView({ dadosSign, onInputChange, onViewChange, onButtonClicked }) {
    const handleClick = () => {
        onViewChange('login')
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-10 w-auto"
                src="/images/bank-logo.svg"
                alt="Logo da Korsi Bank"
            />
            <h2 className="main-title text-4xl lg:text-5xl text-red-500 mt-10 text-center font-bold tracking-tight">
                Crie uma conta. É rápido e simples
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-3" action="#" method="POST">
                <div>
                <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                    Nome
                </label>
                <div className="mt-2">
                    <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    required
                    onChange={e => onInputChange('signup', 'nome', e.target.value)}
                    value={dadosSign.nome}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    E-mail
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="seumelhoremail@email.com"
                    onChange={e => onInputChange('signup', 'email', e.target.value)}
                    value={dadosSign.email}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                    CPF
                </label>
                <div className="mt-2">
                    <input
                    placeholder="000.000.000-00"
                    id="cpf"
                    name="cpf"
                    type="text"
                    required
                    onChange={e => onInputChange('signup', 'cpf', e.target.value)}
                    value={dadosSign.cpf}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
                <div>
                
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
                </label>
                <div className="mt-2">
                    <input
                    placeholder="Sua senha mais forte"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={e => onInputChange('signup', 'senha', e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirmar senha
                </label>
                <div className="mt-2">
                    <input
                    placeholder="Sua senha mais forte"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    onChange={e => onInputChange('signup', 'confirmarSenha', e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                    Telefone
                </label>
                <div className="mt-2">
                    <input
                    placeholder="(00) 00000-0000"
                    id="tel"
                    name="tel"
                    type="text"
                    required
                    onChange={e => onInputChange('signup', 'telefone', e.target.value)}
                    value={dadosSign.telefone}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                onClick={onButtonClicked}
                    type="submit"
                    disabled={!(dadosSign.nome && dadosSign.email && dadosSign.cpf && dadosSign.senha && dadosSign.confirmarSenha && dadosSign.telefone)}
                    className={`ease-in-out duration-300 flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                >
                    Cadastrar
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Já possui uma conta?{' '}
                <a onClick={handleClick} href="#" className="font-semibold leading-6 text-red-600 hover:text-red-500">
                Entrar
                </a>
            </p>
          </div>
      </div>
    )
}