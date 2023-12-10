import { Link } from "react-router-dom";
import logo from "/logo192.png?url" ;
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={logo} alt="Logo" className={styles.footerLogo} />
        <p>&copy; 2023 Film Chronic. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;