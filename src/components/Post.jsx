import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/kaioferr.png"/>
                    <div className={styles.authorInfo}> 
                        <strong>Kaio Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='07 de dezembro às 14:13' dateTime='2024-07-12 14:08:27'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Fala galeraa 👋</p>
                <p>Hoje foi dia de apresentar mais um projeto na faculdade. Foi um sucesso! 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#faculdade</a>{' '} 
                    <a href="">#frontend</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>

        </article>
    );
}