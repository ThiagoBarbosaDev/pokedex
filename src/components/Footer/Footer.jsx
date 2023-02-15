import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={ styles.container }>
      <nav className={ styles['socials-container'] }>
        <div className={ styles['contacts-container'] }>
          <span>
            <FaMailBulk className={ styles['contact-icon'] } />
            {' thiago3510@gmail.com'}
          </span>
          <span>
            <FaWhatsapp className={ styles['contact-icon'] } />
            <a href="https://wa.me/61981007636?text=Olá!%20:)%20me%20chamo%20Thiago%20Barbosa.%20Sou%20desenvolvedor%20fullstack,%20com%20coração%20em%20frontend,%20posso%20ajudar?”">
              {'  (61) 98100 7636'}
            </a>
          </span>
        </div>
        <span className={ styles.me }>Thiago Barbosa</span>
        <a href="https://www.linkedin.com/in/thiagobarbosawebdev/">
          <FaLinkedin className={ styles.socials } />
        </a>
        <a href="https://github.com/ThiagoBarbosaDev">
          <FaGithub className={ styles.socials } />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
