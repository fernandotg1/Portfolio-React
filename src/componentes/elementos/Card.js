import ButtonB from './ButtonB'
import styles from './Card.module.css'

function Card({ img, title, tech, desc, repo, site }) {
    return (
        <div className={styles.card}>
            <a href={site}><img src={img} alt='Erro' /></a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{desc}</p>
                <ButtonB text='Acesse o repositório' link={repo} />
            </section>

        </div>
    )
} export default Card