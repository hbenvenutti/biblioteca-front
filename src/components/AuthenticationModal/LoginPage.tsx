import React, { useState } from 'react';
import { LoginContent } from './styles';

interface LoginPageProps {
  onChange1: (email: string) => void;
  onChange2: (password: string) => void;
  onSubmit: () => void;
}

export const LoginPage = (props: LoginPageProps) => {
  
  return (
    <LoginContent>
      <strong>Login</strong>
      <div>
        <label htmlFor="email">Email</label>
        <input onChange={(e) => {props.onChange1(e.target.value)}} type='email' id='email'/>
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input onChange={(e) => {props.onChange2(e.target.value)}} type="password" id='password'/>
      </div>

      <div className='button-container'>
        <button className='send' onClick={props.onSubmit}>Enviar</button>
      </div>
    </LoginContent>
  )
}
