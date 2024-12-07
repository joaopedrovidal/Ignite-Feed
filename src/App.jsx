import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';


export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="João Pedro Vidal" 
        content="Minha primeira publicação nessa rede muito bacana!"
      />
      <Post 
        author="Kaio"
        content="Procuro vaga na área de programação em React"
    /> 
  </div>
  )
}



