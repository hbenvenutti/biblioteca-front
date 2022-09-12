import React from 'react';
import { RegisterContent } from './styles';

interface RegisterPageProps {
  onChange1: (email: string) => void;
  onChange2: (name: string) => void;
  onChange3: (lastName: string) => void
  onChange4: (password: string) => void;
  onChange5: (passwordConfirmation: string) => void;
  onSubmit: () => void;
}

export const RegisterPage = (props: RegisterPageProps) => {
  return (
    <RegisterContent>
      <strong>Cadastro</strong>

      <div className='input-group'>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => {props.onChange1(e.target.value)}} type='email' id='email'/>
      </div>

      <div className='section'>
        <div className='input-group'>
          <label htmlFor="name">Nome</label>
          <input onChange={(e) => {props.onChange2(e.target.value)}} type='text' id='name'/>
        </div>

        <div className='input-group'>
          <label htmlFor="last-name">Sobrenome</label>
          <input onChange={(e) => {props.onChange3(e.target.value)}} type='text' id='last-name'/>
        </div>
      </div>

      <div className='section'>
        <div className='input-group'>
          <label htmlFor="password">Senha</label>
          <input onChange={(e) => {props.onChange4(e.target.value)}} type="password" id='password'/>
        </div>
        
        <div className='input-group'>
          <label htmlFor="password-confirmation">Confirme a senha</label>
          <input onChange={(e) => {props.onChange5(e.target.value)}} type="password" id='password-confirmation'/>
        </div>
      </div>

      <div className='button-container'>
        <button onClick={props.onSubmit} className='send'>Enviar</button>
      </div>
    </RegisterContent>
  )
}
