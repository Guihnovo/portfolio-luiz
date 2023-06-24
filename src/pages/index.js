import React, { useEffect } from 'react'
import Header from "../components/header"
import Sobre from "../components/sobre"
import Meio from '../components/meio'
import Servicos from '../components/servicos'
import Footer from '../components/footer'
import {Estrutura} from './styles'

  
export default function Home() {
     
  function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime]');
    if(sections.length) {
      const windowMetade = window.innerHeight * 0.8;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = (sectionTop - windowMetade) < 0;
          if(isSectionVisible)
            section.classList.add('animate');
          })
      }
      animaScroll();
      window.addEventListener('scroll', animaScroll);
    }
  }
  
  useEffect(() => {
    initAnimacaoScroll()
  }, [])
  
  return (
    <Estrutura>
      <Header/>
      <Sobre/>
      <Meio/>
      <Servicos/>
      {/* <Contato /> */}
      <Footer/>
    </Estrutura>
  )
}
