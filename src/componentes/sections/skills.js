import styles from './Skills.module.css'
import javascript from '../../image/skill/javascript.svg'
import html from '../../image/skill/html.svg'
import css from '../../image/skill/css.svg'
import react from '../../image/skill/react.svg'
import python from '../../image/skill/python.svg'
import mssql from '../../image/skill/mssql.svg'

function Skills(){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={python}/>
                <img src={mssql}/>
            </div>
        </div>
    )
}

export default Skills