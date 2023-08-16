import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/matheus_boarini/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/boarini'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/matheus-boarini-816706225/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>matheusandre06@hotmail.com</p>
            <p>Matheus Boarini © 2023</p>
        </div>
    )
}

export default Footer