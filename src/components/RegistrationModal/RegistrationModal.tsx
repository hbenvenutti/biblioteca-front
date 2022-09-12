import React, { useState } from 'react';
import Modal from 'react-modal';
import { useModals } from '../../hooks/useModals';
import { Container } from './styles';

export const RegistrationModal = () => {
  const {isRegistrationModalOpen, closeRegistrationModal} = useModals()
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  

  const handleSubmit = (event: any) => {
    console.log(password);
    console.log(email);
    console.log(name);
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay" 
      className="registration-modal" 
      isOpen={isRegistrationModalOpen} 
      onRequestClose={closeRegistrationModal}
    >

      <Container>
        <strong>Cadastro</strong>
        {/* <div className='content'> */}
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' id='email'/>
            </div>

            <div className='section'>
              <div className='input-group'>
                <label htmlFor="name">Nome</label>
                <input onChange={(e) => setName(e.target.value)} type='text' id='name'/>
              </div>

              <div className='input-group'>
                <label htmlFor="last-name">Sobrenome</label>
                <input onChange={(e) => setLastName(e.target.value)} type='text' id='last-name'/>
              </div>
            </div>

            <div className='section'>
              <div className='input-group'>
                <label>Senha</label>
                  <input onChange={(e) => setPassword(e.target.value)} type="text" id='password'/>
              </div>
              
              <div className='input-group'>
                <label>Confirme a senha</label>
                <input 
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  type="password"
                  id='password-confirmation'
                />
                
              </div>
            </div>

            <ul>
              <li>A senha deve conter no mínimo 8 caracteres.</li>
              <li>A senha deve conter no mínimo 1 letra maiúscula.</li>
              <li>A senha deve conter no mínimo 1 número.</li>
              <li>A senha deve conter no mínimo 1 símbolo (#@$).</li>
              <li>A senha não deve conter sequências (123 | abc).</li>
            </ul>
            <div className='button-container'>
              
              <button type='submit' className='send'>Enviar</button>
            </div>
          </form>
        {/* </div> */}
      </Container>
    </Modal>
  )
}
