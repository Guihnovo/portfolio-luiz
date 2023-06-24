import React from 'react'
import { Container, TitleEvents, About, ContainerImage, Card} from '../Styles/sobre'
import didieKaipora from '../image/bday-didiekaipóra2.jpeg';
import etrip from '../image/etrip.jpeg';
import jungleWalk from '../image/jungleWalk2.jpeg';
import psicodelicarnival from '../image/psicodelicarnival2.jpeg';

export default function sobre () {

  return (
    <Container id="sobre" className="js-scroll">
      <TitleEvents>Eventos</TitleEvents>
        <About>

          <a href="https://photos.app.goo.gl/gMfULY13BAqJALTQ6" target='_blank'>
            <Card>
              <h6>B-day Didi & Kaipóra</h6>
              <img src={didieKaipora} alt='nome do evento: B-day Didi & Kaipóra'></img>
            </Card>
          </a>
          <a href="https://photos.app.goo.gl/4E1AXsxygm66GfCV7" target='_blank'>
            <Card>
            <h6>Etrip</h6>
              <img src={etrip} alt='nome do evento: etrip'></img>
            </Card>
          </a>
          <a href="https://photos.app.goo.gl/8ZTceX9n8it41TTM9" target='_blank'>
            <Card>
              <h6>Junglewalk</h6>
              <img src={jungleWalk} alt='nome do evento: Junglewalk'></img>
            </Card>
          </a>
          <a href="https://photos.app.goo.gl/yf35yFAgQQfdaC448" target='_blank'> 
            <Card>
              <h6>Psycodelicarnival</h6>
              <img src={psicodelicarnival} alt='nome do evento: Psycodelicarnival'></img>
            </Card>
          </a>

        </About>
        <ContainerImage>
          
        </ContainerImage>  
    </Container>
  )
}
