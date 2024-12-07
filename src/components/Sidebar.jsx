import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2fGVufDB8fDB8fHww"
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/joaopedrovidal.png"/>

                <strong>João Pedro Vidal</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine	size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}