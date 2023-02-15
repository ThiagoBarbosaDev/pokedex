/* eslint-disable react/jsx-max-depth */
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
            <span className={ styles.texts }>{' thiago3510@gmail.com'}</span>
          </span>
          <span>
            <a
              href="https://wa.me/61981007636?text=Olá!%20:)%20me%20chamo%20Thiago%20Barbosa.%20Sou%20desenvolvedor%20fullstack,%20com%20coração%20em%20frontend,%20posso%20ajudar?”"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className={ styles['contact-icon'] } />
              <span className={ styles.texts }>{'  (61) 98100 7636'}</span>
            </a>
          </span>
        </div>
        <span className={ styles.me }>Thiago Barbosa</span>
        <div className={ styles.medias }>
          <a
            href="https://www.linkedin.com/in/thiagobarbosawebdev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={ styles.socials } />
          </a>
          <a href="https://github.com/ThiagoBarbosaDev" target="_blank" rel="noreferrer">
            <FaGithub className={ styles.socials } />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
