import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/joaopedrovidal.png',
      name: 'João Pedro Vidal',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Hoje começo a trabalhar como desenvolvedor web frontend na Data C Sistemas. Estou muito feliz! 🚀' },
      { type: 'link', content: <a href="">jane.design/doctorcare</a> }
    ],
    publishedAt: new Date('2024-12-07 17:03:40')
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/kaioferr.png',
      name: 'Kaio Henrique',
      role: 'Aluno Unifagoc'
    },
    content: [
      { type: 'paragraph', content: 'Eai pessoal!👋' },
      { type: 'paragraph', content: 'Hoje foi dia de apresentar mais um projeto na faculdade. Foi um sucesso! 🚀' },
      { type: 'link', content: <a href="">jane.design/doctorcare</a> }
    ],
    publishedAt: new Date('2024-12-07 17:06:40')
  },
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
  </div>
  )
}



