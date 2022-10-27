import './style.scss'
import globoLogo from '../../assets/images/globo.webp'
import multishowLogo from '../../assets/images/multishow.webp'
import globonewsLogo from '../../assets/images/globonews.webp'

export function Lesson02() {

  const cards = [
    {channel: globoLogo, video: 'https://www.youtube.com/embed/bpOSxM0rNPM', time: '22:40 - 23:34', title: 'Ilha de Ferro', description: 'Ilha de Ferro'},
    {channel: multishowLogo, video: 'https://globoplay.globo.com/assine/mais-canais/?f_cpnt=trilho.assista_ao_vivo.3&f_label=video.jojo_nove_e_meia.7339131.2&f_area=home', time: '22:46 - 23:20', title: 'Jojo Nove E Meia', description: 'Miá Mello - Artista Fora da Caixa'},
    {channel: globonewsLogo, video: 'https://globoplay.globo.com/assine/mais-canais/?f_cpnt=trilho.assista_ao_vivo.3&f_label=video.jornal_das_dez.7339101.3&f_area=home', time: '22:00 - 23:59', title: 'Jornal das Dez', description: ''}
  ]

  return(
    <main className="segunda-aula-main">
      <h1 className="main-title">Segunda Aula</h1>
      <h2 className="secondary-title">Site escolhido: Globoplay</h2>
      <ul>
        <h2 className="secondary-title">Primeiro Componente - Card</h2>
        <li>
          {
            cards.map(card => (
              <div className="card-container">
                <a href={ card.video }>
                  <div className="channel-thumbnail">
                    <img src={ card.channel} alt="Canal" />
                    <iframe width="275" src={ card.video } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" scrolling="no" allowfullscreen></iframe>
                  </div>
                  <div className="card-text" >
                    <p>{ card.time }</p>
                    <h3>{ card.title }</h3>
                    <p>{ card.description }</p>
                  </div>
                </a>
              </div>
            ))
          }
        </li>

      </ul>
    </main>
  )
}                         