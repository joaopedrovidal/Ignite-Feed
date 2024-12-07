import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/joaopedrovidal.png" />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>João Pedro Vidal</strong>
                        <time title="07 de Dezembro às 15:18" datetime="2024-07-12 15:19:30">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom meu amigo. Parabéns!!</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
      </div>  
    );
}