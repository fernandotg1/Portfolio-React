import styles from './Skills.module.css'
import css from '../../Image/css.svg'
import javascript from '../../Image/js.svg'
import react from '../../Image/react.svg'
import html from '../../Image/html.svg'

function Skills() {
    return (
        <div className={styles.skill} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={css} />
                <img src={javascript} />
                <img src={react} />
                <img src={html} />
            </div>
        </div>
    )
} export default Skills