import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useState, useEffect } from 'react'


function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Matheus Boarini!', 'Desenvolvedor Full Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div id="Presentation" className={styles.presentation}>
            <p><strong>Bem-vindo ao meu Portifólio</strong></p>
            <h1>Olá, eu sou {text}</h1>
            <h4>Aficionado por tudo que tem a ver com tecnologia! Estou em uma joranada para me tornar <br/>
                um Desenvolvedor Full Stack, e poder criar as melhores experiências digitais! Com uma base<br/>
                em HTML, CSS e JavaScript, estou desenvolvendo interfaces de usuário intuitivas e responsivas.<br/>
                No back end, estou mergulhando no mundo do Python e explorando o Microsoft SQL para dar vida<br/>
                a funcionalidades. 
            </h4>
            <ButtonA link='http://github.com/boarini' text='Conecte-se comigo!'/>
          
        </div>
    )
}

export default Presentation