import { useState } from 'react'
import { Rating } from './components/Rating/Rating'
import './App.css'

function App() {
  const [currentValue, setCurrentValue] = useState(0)
  const handleRatingChange = (ratingValue: number) => {
    setCurrentValue(ratingValue)
  }

  return (
    <>
      {<span>Current rating value is {currentValue}</span>}
      <Rating
        defaultValue={3}
        maxValue={10}
        labelText='Rate me'
        labelFontSize={24}
        checkedColor='#ffa500'
        unCheckedColor='#4d1118'
        width={24}
        height={24}
        onChangeValue={handleRatingChange}
      />
    </>
  )
}

export default App
