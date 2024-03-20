import Card from '../elementos/Card'
import styles from './Projects.module.css'
import ButtonB from '../elementos/ButtonB'
import ButtonA from '../elementos/ButtonA'
import portfolio01 from '../../Image/portfolio01.png'
import portfolio02 from '../../Image/portfolio02.png'
import portfolio03 from '../../Image/portfolio03.png'


function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>

            <Card
                img={portfolio01}
                title="Landing Page"
                tech="Figma, HTML, CSS"
                desc="Desafio em desenvolver uma landing page"
                repo="https://github.com/fernandotg1/Desafio-1-Landing-Page"
                site="https://ftg-desafio1dnc.netlify.app/"
            />

            <Card
                img={portfolio02}
                title="Consumo de API"
                tech="HTML, CSS e JavaScript com consumo de API por Fetch"
                desc="Desafio em consumir uma API para CEP e previsão do tempo com base em latitude e longitude"
                repo="https://github.com/fernandotg1/Desafio-2-Consumo-API"
                site="https://ftg-desafioapi.netlify.app/"
            />

            <Card
                img={portfolio03}
                title="Landing Page CCXP"
                tech="Figma, HTML, CSS e JavaScript"
                desc="Demo CCXP com o uso de HTML, CSS e Media Query, e Javascript para contagem"
                repo="https://github.com/fernandotg1/CCXP"
                site="https://ftg-ccxpdemo.netlify.app/"
            />


            <ButtonA link='https://github.com/fernandotg1?tab=repositories' text='Ver repositório completo' />
        </div>
    )
} export default Projects