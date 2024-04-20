
import { Link } from "react-router-dom";


import styles from "./Footer.module.css";




export default function Footer() {



    return (

        <footer>

            <div className={styles['dev-container']}>

                <div className={styles['dev-logo']} >
                    <img src="/svg/dev-logo-no-background.svg" alt="V.Dimitroff" />
                    <ul className={styles['social-media']}>
                        <li>
                            <Link to="https://github.com/viktor-dimitrov"  target="_blank" rel="noopener noreferrer">
                                <img src="/svg/github-icon.svg" alt="github" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/viktor-g-dimitrov/"  target="_blank" rel="noopener noreferrer">
                                <img src="/svg/linkedin-icon.svg" alt="linkedin" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/profile.php?id=100012229204864&locale=en_EN"  target="_blank" rel="noopener noreferrer">
                                <img src="/svg/dev-facebook.svg" alt="linkedin" />
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </footer>
    )
}