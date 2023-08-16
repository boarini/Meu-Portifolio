import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.png'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>Projetos </h1>
            <Card img ={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para a formação em tecnologia"
            repo="https://github.com/boarini/pprojetolandingpage"
            site="https://testedncmatheus.netlify.app"/>

            <Card img ={portifolio}
            title="Portifolio React"
            tech="React"
            description="Desenvolvimento de um Portifolio em React.JS"
            repo="https://github.com/boarini/Portifolio-react"
            site="portifoliomboarini.netlify.app"/>
            
            <ButtonB text='Acesse meu repositório' link='https://github.com/boarini?tab=repositories'/>
        </div>
    )
}

export default Projects