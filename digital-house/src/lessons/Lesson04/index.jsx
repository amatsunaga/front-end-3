import './style.scss'
import youtubeImage from './../../assets/images/youtube-home.png'
import batataGif from './../../assets/images/batata.gif'

export function QuartaAula() {

  const componentsFound = [
    {
      id: 1,
      title: "Video Component",
      image: youtubeImage,
      text: 'Lorem ipsum, dolor sit amet consectetur.'
    },
    {
      id: 2,
      title: 'Input Component',
      image: batataGif,
      text: 'Lorem ipsum, dolor sit amet consectetur.'
    }
  ]

  return (
    <div className="quarta-aula-component">
      <h1 className="main-title">Componentes identificados</h1>

      <ul className="components-found">
        
        {
          componentsFound.map((component) => (
            <li key={ component.id }>
              <img src={ component.image } />
              <h1>{ component.title }</h1>
              <p>{ component.text }</p>
            </li>
          ))
        }
        

      </ul>

    </div>
  )
}