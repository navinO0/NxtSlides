import {PureComponent} from 'react'
import {v4} from 'uuid'
import ListSlideItem from '../ListSlideItem'
import CurrentSlideComponent from '../CurrentSlideComponent'

import './index.css'

class SlidesHomeComponent extends PureComponent {
  state = {slidesList: [], activeSlide: ''}

  componentDidMount() {
    const {initialSlidesList} = this.props

    this.setState({
      slidesList: initialSlidesList,
      activeSlide: initialSlidesList[0].id,
    })
  }

  onClickNewBtn = () => {
    const {slidesList} = this.state
    const id = v4()
    const heading = 'Heading'
    const description = 'Description'
    const newObj = {id, heading, description}
    const updatedList = [...slidesList, newObj]
    this.setState({slidesList: updatedList, activeSlide: id})
  }

  onClickOnSlideEle = id => {
    this.setState({activeSlide: id})
  }

  onChangeHeading = (newText, id) => {
    const {slidesList} = this.state
    const updatedArray = slidesList.map(eachOne => {
      if (eachOne.id === id) {
        return {...eachOne, heading: newText}
      }
      return eachOne
    })
    this.setState({slidesList: updatedArray})
  }

  onChangeDescription = (newText, id) => {
    const {slidesList} = this.state
    const updatedArray = slidesList.map(eachOne => {
      if (eachOne.id === id) {
        return {...eachOne, description: newText}
      }
      return eachOne
    })
    this.setState({slidesList: updatedArray})
  }

  render() {
    const {slidesList, activeSlide} = this.state
    const activeSlideItem = slidesList.find(
      eachOne => eachOne.id === activeSlide,
    )

    const allIds = []
    slidesList.forEach(each => {
      allIds.push(each.id)
    })

    const returnEle = () => {
      if (activeSlideItem !== undefined) {
        return (
          <CurrentSlideComponent
            slideDets={activeSlideItem}
            onChangeHeading={this.onChangeHeading}
            onChangeDescription={this.onChangeDescription}
          />
        )
      }
      return ''
    }

    return (
      <div className="slides-project-main-container">
        <div className="next-slides-nave-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="nxt-slides-navimage"
          />
          <h1 className="nav-heading">Nxt Slides</h1>
        </div>
        <div className="add-new-slide-btn-container">
          <button
            type="button"
            className="add-new-btn"
            onClick={this.onClickNewBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
        <div className="slides-component-home-main-container">
          <div className="left-slides-list-container">
            <ol className="list-container-ul">
              {slidesList.map(eachSlide => (
                <ListSlideItem
                  key={eachSlide.id}
                  onClickOnSlideEle={this.onClickOnSlideEle}
                  eachSlide={eachSlide}
                  activeSlide={activeSlide}
                  allIds={allIds}
                />
              ))}
            </ol>
          </div>
          <div className="current-slide-main-container">{returnEle()}</div>
        </div>
      </div>
    )
  }
}

export default SlidesHomeComponent
