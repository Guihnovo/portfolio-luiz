import React, { useEffect } from 'react'
import balance from "../image/balance.png"
import {Container, ContainerText, Header, Profissao, Who, Simbol, Icons} from '../Styles/header'
import Whatsapp from "../image/whatsapp_luiz2.svg";
import Instagram from "../image/instagram_luiz.svg";
import fire_photo from "../image/fire_photo.jpg"

export default function Topo() {

  function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
     }
      linksInternos.forEach((link) => { 
      link.addEventListener('click', scrollToSection);
    });
  }
  
  useEffect (() => {
    initScrollSuave()
  }, [])
 
  return (
  
    <Container>
          <Header>
            <section>
              <nav onClick={() => initScrollSuave()}>
                <ul className="js-menu">
                  <li className="Sobre"><a href="#sobre">Eventos</a></li>
                  <li><a href="#servicos">Serviços</a></li>
                  <li><a href="#footer">Contato</a></li>
                </ul>
              </nav>
            </section>
            <div>
              <h1>Luiz Neto</h1>
              <h2>Fotográfo</h2>
            </div>
          </Header>
          <ContainerText>
              <div>
                <img src={fire_photo} alt="Moça fazendo pirofagia"></img>
              </div>
              <Icons>
                <a href="https://api.whatsapp.com/send?phone=554399612-4217&text=Olá.." target="_blank" > 
                  <img src={Whatsapp} alt="Whatsapp"/>
                </a>
                <a href="https://www.instagram.com/luneto_decanon" target="_blank">
                  <img src={Instagram} alt="Instagram"/>
                </a>
              </Icons>  

          </ContainerText>
    </Container>
  )
}
