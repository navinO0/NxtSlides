import {useState, useEffect} from 'react'
import './index.css'

const CurrentSlideComponent = props => {
  const {slideDets, onChangeHeading, onChangeDescription, slideNum} = props
  const slideOthItem = slideDets

  const {id, heading, description} = slideOthItem

  const [headingEle, setHeadingEle] = useState(heading)
  const [descriptionEle, setDescriptionEle] = useState(description)
  const [activeHeading, setActiveHeading] = useState(false)
  const [activeDescription, setActiveDescription] = useState(false)

  useEffect(() => {
    setHeadingEle(heading)
    setDescriptionEle(description)
  }, [description, heading])

  const onblurHeadingInputElement = () => {
    setActiveHeading(false)
    if (headingEle === '') {
      setHeadingEle('Heading')
      onChangeHeading('Heading', id)
    }
  }

  const onClickHeadingElement = () => {
    setActiveHeading(true)
  }

  const onblurDescriptionInputElement = () => {
    if (descriptionEle === '') {
      setDescriptionEle('Description')
      onChangeDescription('Description', id)
    }

    setActiveDescription(false)
  }
  const onClickDescriptionElement = () => {
    setActiveDescription(true)
  }

  const onChangeHeadingElement = event => {
    onChangeHeading(event.target.value, id)
    setHeadingEle(event.target.value)
  }

  const onChangeDescriptionElement = event => {
    onChangeDescription(event.target.value, id)
    setDescriptionEle(event.target.value)
  }

  const headingElement = () => {
    if (activeHeading === false) {
      return (
        <h1 className="slide-heading" onClick={onClickHeadingElement}>
          {headingEle}
        </h1>
      )
    }
    return (
      <input
        value={heading}
        type="text"
        onBlur={onblurHeadingInputElement}
        onChange={onChangeHeadingElement}
        className="heading-input"
      />
    )
  }

  const descriptionElement = () => {
    if (activeDescription === false) {
      return (
        <p className="slide-description" onClick={onClickDescriptionElement}>
          {descriptionEle}
        </p>
      )
    }
    return (
      <input
        value={description}
        type="text"
        onBlur={onblurDescriptionInputElement}
        onChange={onChangeDescriptionElement}
        className="description-input"
      />
    )
  }

  return (
    <div className="currentSlide-main-container" testid={`slideTab${id + 1}`}>
      {headingElement()}
      {descriptionElement()}
    </div>
  )
}

export default CurrentSlideComponent
