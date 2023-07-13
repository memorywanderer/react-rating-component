import { useState } from 'react'
import { RatingLabel } from "../RatingLabel/RatingLabel"
import { RatingList } from "../RatingList/RatingList"

type RatingProps = {
  defaultValue: number,
  onChangeValue: (ratingValue: number) => void,
  // onHoverValue: (value: number) => void,
  maxValue: number,
  showLabel?: boolean,
  labelText?: string,
  labelFontSize?: number,
  labelTextColor?: string,
  checkedColor?: string,
  unCheckedColor?: string,
  width?: number,
  height?: number,
}

export const Rating = ({
  defaultValue,
  maxValue,
  showLabel = true,
  labelText = 'Rating text',
  labelFontSize = 16,
  labelTextColor = '#000',
  checkedColor = 'gold',
  unCheckedColor = 'gray',
  width = 24,
  height = 24,
  onChangeValue,
}: RatingProps) => {
  const [rating, setRating] = useState(defaultValue)
  const [hoverRating, setHoverRating] = useState(defaultValue)

  const handleStarClick = (value: number) => {
    setRating(value)
    onChangeValue(value)
  }

  const handleStarHover = (value: number) => {
    setHoverRating(value)
    // onHoverValue(value)
  }

  return (
    <>
      {showLabel && <RatingLabel
        labelText={labelText}
        labelFontSize={labelFontSize}
        labelTextColor={labelTextColor}
      />}
      <RatingList
        checkedColor={checkedColor}
        unCheckedColor={unCheckedColor}
        rating={rating}
        hoverRating={hoverRating}
        maxValue={maxValue}
        setRating={handleStarClick}
        setHoverRating={handleStarHover}
        width={width}
        height={height}
      />
    </>
  )
}