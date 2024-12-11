import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Bem-vindo!</h1>
        <form className="login-form">
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
          <button className="login-button">Entrar</button>
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
