import styles from './style.module.scss'
import Iframe from 'react-iframe'
import globoLogo from '../../assets/images/globo.webp'
import multishowLogo from '../../assets/images/multishow.webp'
import globonewsLogo from '../../assets/images/globonews.webp'

export function SegundaAula() {

  const cards = [
    {channel: globoLogo, video: 'https://www.youtube.com/embed/bpOSxM0rNPM', time: '22:40 - 23:34', title: 'Ilha de Ferro', description: 'Ilha de Ferro'},
    {channel: multishowLogo, video: 'https://globoplay.globo.com/assine/mais-canais/?f_cpnt=trilho.assista_ao_vivo.3&f_label=video.jojo_nove_e_meia.7339131.2&f_area=home', time: '22:46 - 23:20', title: 'Jojo Nove E Meia', description: 'Miá Mello - Artista Fora da Caixa'},
    {channel: globonewsLogo, video: 'https://globoplay.globo.com/assine/mais-canais/?f_cpnt=trilho.assista_ao_vivo.3&f_label=video.jornal_das_dez.7339101.3&f_area=home', time: '22:00 - 23:59', title: 'Jornal das Dez', description: ''}
  ]

  return(
    <main className={ styles["segunda-aula-main"] }>
      <h1>Segunda Aula</h1>
      <h2>Site escolhido: Globoplay</h2>
      <ul>
        <h2>Primeiro Componente - Card</h2>
        <li>
          {
            cards.map(card => (
              <div className={ styles["card-container"] }>
                <a href={ card.video }>
                  <div className={ styles["channel-thumbnail"] }>
                    <img src={ card.channel} alt="Canal" />
                    {/* <video width="275">
                      <source>{ card.video }</source>
                    </video> */}
                    <iframe width="275" src={ card.video } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className={ styles["card-text"]} >
                    <p>{ card.time }</p>
                    <h3>{ card.title }</h3>
                    <p>{ card.description }</p>
                  </div>
                </a>
              </div>
            ))
          }
        </li>

        <h2>Primeiro Componente - Header</h2>
        <li>
          <header>
            <img src="" alt="Logo" />
            <ul>
              <li>Agora na TV</li>
              <li>Novelas</li>
              <li>Séries</li>
              <li>Filmes</li>
              <li>Originais</li>
              <li>Explore</li>
            </ul>
          </header>
        </li>

        <li>

        </li>
      </ul>
    </main>
  )
}                         