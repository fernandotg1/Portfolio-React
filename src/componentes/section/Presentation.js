import ButtonA from '../elementos/ButtonA'
import styles from './Presentation.module.css'

function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation'>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou o Fernando</h1>
            <p>
                Sou formado em Sistemas de Informação e venho acompanhando a tecnologia
                ao longo dos anos com dedicação em áreas de suporte e infraestrutura. Atualmente
                me dedico aos estudos para a migração de área com o objetivo de adentrar nesse
                universo fascinante do desenvolvimento, e assim colocar em prática o aprendizado.
            </p>
            <ButtonA text='Conecte-se comigo' link='https://github.com/fernandotg1' />
        </div>
    )
} export default Presentation