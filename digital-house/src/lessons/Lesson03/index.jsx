import './style.scss'
import batataGif from '../../assets/images/batata.gif'

export function TerceiraAula() {

  const components = [
    {name: 'Component Card 1', description: 'Teste 1', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'},
    {name: 'Component Card 2', description: 'Teste 2', image: batataGif},
    {name: 'Component Card 3', description: 'Teste 3', image: ''},
    {name: 'Component Card 4', description: 'Teste 4', image: ''},
    {name: 'Component Card 5', description: 'Teste 5', image: ''}
  ]


  return (
    <div className="terceiraAula">
      <h1>Lista de componentes encontrados em um sistema</h1>
      <ul>
          {
            components.map(component => (
                <li>
                  <img src={ component.image } alt="" />
                  <h2>{ component.name }</h2>
                  <p>{ component.description }</p>
                </li>
            ))
          }
      </ul>
    </div>
  )
}