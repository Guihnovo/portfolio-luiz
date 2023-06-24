import React from 'react'
import { Container } from '../Styles/footer'
import Whatsapp from "../image/whatsapp_luiz2.svg";
import Instagram from "../image/instagram_luiz.svg";

export default function footer() {
  return (
    <Container id='footer'>
      <h3>@2023-2024 Luiz Henrique Neto</h3>
      <div>
        <a href="https://api.whatsapp.com/send?phone=554399612-4217&text=Olá.." target="_blank" > 
          <img src={Whatsapp} alt="Whatsapp"/>
        </a>
        <a href="https://www.instagram.com/luneto_decanon" target="_blank">
          <img src={Instagram} alt="Instagram"/>
        </a>
      </div>

    </Container>
  )
}
