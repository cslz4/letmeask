import { useHistory } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { AuthAside } from '../components/AuthAside'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss'

export function Home() {
  const history = useHistory()
  const { signInWithGoogle, user } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  return (
    <div id='page-auth'>
      <AuthAside />
      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Letmeask logo' />
          <button className='create-room' onClick={handleCreateRoom}>
            <img src={googleIconImg} alt='' />
            Crie sua sala com o Google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input type='text' placeholder='Digite o código da sala' />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}