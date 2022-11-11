import './style.scss'

export function DHGameWideCard(props) {

  return (
    <li className="wide-card">
      <img className="wide-card-image" src={props.item.picture}></img>
      <div className="wide-card-text">
        <div className="wide-card-description">
          <h3 className="wide-card-title">{props.item.name}</h3>
          <p className="wide-card-platforms"> {props.item.plataforms}</p>
          <p className="wide-card-categories">{props.item.categories.join(", ")}</p>
        </div>
        <p className="wide-card-price">
          {parseInt(props.item.price)}
          <span className="wide-card-cents">,00</span>
        </p>
      </div>
    </li>
  )
}

// <span>R$<b>20<b/>,00</span>