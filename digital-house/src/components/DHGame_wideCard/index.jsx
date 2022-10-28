export function DHGame_wideCard(props) {
  return (
    <li className="wide-card">
      <img className="wide-card-image" src={ props.item.picture }></img>
      <div className="wide-card-text">
        <div className="wide-card-description">
          <h3 className="wide-card-title">{ props.item.name }</h3>
          <div className="wide-card-platforms"> { props.item.plataforms }</div>
          <div className="wide-card-categories">{ props.item.categories }</div>
        </div>
        <div className="wide-card-price">{ props.item.price }</div>
      </div>
    </li>
  )
}