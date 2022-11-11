import './style.scss'

export function DHGameSquareCard(props) {

  return (
    <li className="square-card">
      <img className="square-card-image" src={props.item.picture}></img>
      <div className="square-card-text">
        <div className="square-card-lines">
          <h3 className="square-card-title">{props.item.name}</h3>
          <div className="old-price">{props.item.oldPrice}</div>
        </div>
        <div className="square-card-lines">
          <div className="square-card-categories">{props.item.categories.join(", ")}</div>
          <p className="new-price">
            {parseInt(props.item.newPrice)}
            <span className="square-card-cents">,00</span>
          </p>
        </div>
      </div>
    </li>
  )
}