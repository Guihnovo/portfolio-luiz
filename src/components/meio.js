import React from 'react'
import {Container, Images_events, MessageMusic, Linha, Linha2} from '../Styles/meio'
import psico from '../image/Meio.jpeg'
import image_fantasy1 from '../image/pirofagia.webp'

export default function Meio() {
  return (
    <Container className="js-scroll">
     
      <MessageMusic>
        <h2>
          "Na música eletrônica, 
          a fotografia é uma ferramenta essencial para transmitir a atmosfera e a energia dos eventos, 
          festivais e performances. Ela captura as luzes, as cores, 
          as pessoas e os detalhes que fazem da música eletrônica uma experiência única e memorável."
        </h2>
      </MessageMusic>
      <Images_events>
          <img 
            src={psico} 
            alt='Homem caracterizado com várias cores quentes, 
            mostrando o rosto pintado. Na cabeça, um chapéu com folhas em chamas, na cor laranjado.'>
          </img>
      </Images_events>
    </Container>
  )
}
