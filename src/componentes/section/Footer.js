import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://github.com/fernandotg1'><FaGithub size={30} /></a></li>
                <li><a href='www.linkedin.com/in/fernando-tabor-gonçalves-72777466'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>Fernando Gonçalves @ 2024</p>
        </div>
    )
} export default Footer