export function DHGame_squareCard(props) {
  return (
    <li className="square-card">
      <img className="square-card-image" src={ props.item.picture }></img>
      <div className="square-card-text">
        <div className="square-card-description">
          <h3 className="square-card-title">{ props.item.name }</h3>
          <div className="square-card-categories">{ props.item.categories }</div>
        </div>
        <div className="square-card-prices">
          <div className="old-price">{ props.item.oldPrice }</div>
          <div className="new-price">{ props.item.newPrice }</div>
        </div>
      </div>
    </li>
  )
}