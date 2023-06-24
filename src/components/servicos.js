import React from 'react'
import { Container, ContainerServices, Groover, ContainerMusicGroover, Title, ContainerEventos, VideoDiv } from '../Styles/servicos'
import ensaio from '../image/ensaio.jpeg'
import video from '../image/video.mp4'
import { Divider } from '@material-ui/core'
import photo from '../image/photo.svg'
import movie from '../image/movie.svg'
import person from '../image/person.svg'
import product from '../image/product.svg'
import music_play from '../image/music-play.svg'



export default function servicos() {
  return (
    <Container id="servicos" data-anime>
      <Title>
        <h2>Serviços</h2>
      </Title>
      <ContainerServices>
        <Groover>
          <a href='https://photos.app.goo.gl/K4SPC49Vb91QYxQu9' target='_blank' rel="noreferrer">
            <h3>
              Presskit para Djs
            </h3>
            <img src={ensaio} alt="Moça fazendo um ensaio"></img>
          </a>
          <VideoDiv>
            <video src={video} width="300" height="350" controls></video>
          </VideoDiv>
        </Groover>
        <Divider orientation='vertical'></Divider>
        <ContainerMusicGroover>
            <h3>          
              <img 
                src={photo} 
                style={{width: '24px', height: '24px', color: 'yellow'}}
              alt="icone de foto">
              </img>Eventos
            </h3>
            <tr style={{width: '100%', borderBottom: '1px solid lightgray', marginTop: '8px'}}></tr>
          <h3>
          <img 
              src={person} 
              style={{width: '24px', height: '24px', color: 'yellow'}}
              alt="icone de pessoa">
            </img>
            Ensaios pessoais
          </h3>
          <h3>
          <img 
              src={music_play} 
              style={{width: '24px', height: '24px', color: 'yellow'}}
              alt="icone musica">
            </img>
            Presskit - especializado para djs</h3>
          <h3>
          <img 
              src={product} 
              style={{width: '24px', height: '24px', color: 'yellow'}}
              alt="icone de produto">
            </img>
            - Produtos</h3>
          <h3><img 
              src={movie} 
              style={{width: '24px', height: '24px', color: 'yellow'}}
              alt="icone de filme">
            </img>
            After movie </h3>
        </ContainerMusicGroover>
      </ContainerServices>
    </Container>
  )
}
