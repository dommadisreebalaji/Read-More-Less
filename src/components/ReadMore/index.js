import {useState} from 'react'
import {
  AppContainer,
  AppHeading,
  AppDescription,
  ReactImage,
  ReactDescription,
  ReadButton,
  ReactReadMoreDescription,
} from './styledComponents'

// Write your code here

const ReadMore = () => {
  const [isShowMore, setIsShowMore] = useState(false)
  const onClickReadButton = () => {
    setIsShowMore(prevState => !prevState)
  }
  const buttonText = isShowMore ? 'Read Less' : 'Read More'
  return (
    <AppContainer>
      <AppHeading>React Hooks</AppHeading>
      <AppDescription>Hooks are a new addition to React</AppDescription>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ReactDescription>
        Hooks solve a wide variety of seemingly unconnected problems in React
        that we have encountered over five years of writing and maintaining tens
        of thousands of components.
        {isShowMore && (
          <ReactReadMoreDescription>
            For curious readers, we have prepared a detailed RFC. Hooks allow
            you to reuse stateful logic without changing your component
            hierarchy. Hooks work side-by-side with existing code so you can
            adopt them gradually.
          </ReactReadMoreDescription>
        )}
      </ReactDescription>
      <ReadButton onClick={onClickReadButton}>{buttonText}</ReadButton>
    </AppContainer>
  )
}

export default ReadMore
