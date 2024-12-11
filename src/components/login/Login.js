import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode validar credenciais ou realizar autenticação
    navigate('/menu');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Bem-vindo!</h1>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Usuário"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            className="login-input"
          />
          <button className="login-button" onClick={handleLogin}>
            Entrar
          </button>
        </form>
        <div className="login-footer">
          <a href="#" className="login-link">Esqueceu sua senha?</a>
          <a href="#" className="login-link">Criar conta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
