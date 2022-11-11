import { Lesson05Item } from "../../components/Lesson05Item"
import youtubeImage from './../../assets/images/youtube-home.png'
import batataGif from './../../assets/images/batata.gif'

export function Lesson05() {

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
      },
      {
        id: 3,
        title: 'Input Component',
        image: batataGif,
        text: 'Lorem ipsum, dolor sit amet consectetur.'
      }
    ]
  
    return (
      <div className="quinta-aula-component">

        <h1 className="main-title">Componentes identificados</h1>
          
        <ul className="components-found">
          
          {
            componentsFound.map((component) => (
              <Lesson05Item
                key={component.id}
                item={component} 
              />
            ))
          }
  
        </ul>
  
      </div>
  )
}