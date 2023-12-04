export default function LoginView({ dadosLogin, onInputChange, onViewChange , onButtonClicked }) {
    const handleClick = () => {
        onViewChange('signup')
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
                Entre na sua conta
            </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
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
                    onChange={e => onInputChange('login', 'email', e.target.value)}
                    placeholder="Seu e-mail"
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
                    id="password"
                    name="password"
                    type="password"
                    onChange={e => onInputChange('login', 'senha', e.target.value)}
                    autoComplete="current-password"
                    required
                    placeholder="Sua senha"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    disabled={!(dadosLogin.email && dadosLogin.senha)}
                    onClick={onButtonClicked}
                    type="submit"
                    className="ease-in-out duration-300 flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Entrar
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Não possui uma conta?{' '}
                <a onClick={handleClick} href="#" className="font-semibold leading-6 text-red-600 hover:text-red-500">
                Crie uma!
                </a>
            </p>
          </div>
      </div>
    )
}