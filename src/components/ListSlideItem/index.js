import './index.css'

const ListSlideItem = props => {
  const {eachSlide, onClickOnSlideEle, activeSlide, allIds} = props
  const {id, heading, description} = eachSlide
  const index = allIds.indexOf(id)

  const onClickSlide = () => {
    onClickOnSlideEle(id)
  }
  const mainContainerClass =
    id === activeSlide ? 'active-item' : 'list-slide-item'
  return (
    <li
      className={`${mainContainerClass}`}
      onClick={onClickSlide}
      testid={`slideTab${index + 1}`}
    >
      <div className="div-content">
        <p className="tab-num">{index + 1}</p>
        <div className="slide-li-item-div">
          <div className="list-slide-item-container">
            <h1 className="slide-item-heading">{heading}</h1>
            <p className="slide-item-description">{description}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ListSlideItem
