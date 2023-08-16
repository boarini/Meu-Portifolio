import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return(
        <div id="Presentation" className={styles.presentation}>
            <p><strong>Bem-vindo ao meu Portifólio</strong></p>
            <h1>Olá, eu sou o Matheus Boarini!</h1>
            <h4>Aficionado por tudo que tem a ver com tecnologia! Estou focado em me tornar <br/>
                um Desenvolvedor Full Stack, e ...
            </h4>
            <ButtonA link='http://github.com/boarini' text='Conecte-se comigo!'/>
          
        </div>
    )
}

export default Presentation