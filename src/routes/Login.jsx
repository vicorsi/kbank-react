import React, { useState } from 'react';
import LoginView from '../views/Login/LoginView';
import SignUp from '../views/Login/SignUpView';

export default function Login() {
    const [view, setView] = useState('signup');

    const [dadosSign, setDadosSign] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        cpf: '',
        telefone: ''

    });

    const [dadosLogin, setDadosLogin] = useState({
        email: '',
        senha: ''
    })

    const handleInputChange = (view, field, value) => {
        if (view == 'signup') {
            setDadosSign({
                ...dadosSign,
                [field]: value
            })
            
        } else {
            setDadosLogin({
                ...dadosLogin,
                [field]: value
            })
        }
        console.log(dadosLogin)
        console.log(dadosSign)
    }
    
    const login = () => {
        alert('logado')
    }

    const sign = () => {
        alert('cadastrado')
    } 

    if (view == 'login') {
        return <LoginView onButtonClicked={login} onViewChange={() => setView('signup')} dadosLogin={dadosLogin} onInputChange={handleInputChange}/>
    } else {
        return <SignUp onButtonClicked={sign} onViewChange={() => setView('login')} dadosSign={dadosSign} onInputChange={handleInputChange} />
    }
}