import { Star } from "../Star/Star"
import './RatingList.css'

type RatingListProps = {
  maxValue: number,
  rating: number,
  setRating: (value: number) => void,
  setHoverRating: (value: number) => void,
  hoverRating: number,
  checkedColor: string,
  unCheckedColor: string,
  width: number,
  height: number,
}

export const RatingList = ({
  rating,
  hoverRating,
  maxValue,
  setRating,
  setHoverRating,
  checkedColor,
  unCheckedColor,
  width,
  height,
}: RatingListProps) => {

  return (
    <form className="rating-list">
      {[...Array(maxValue)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <Star
            maxValue={maxValue}
            rating={rating}
            hoverRating={hoverRating}
            setRating={setRating}
            setHoverRating={setHoverRating}
            ratingValue={ratingValue}
            checkedColor={checkedColor}
            unCheckedColor={unCheckedColor}
            width={width}
            height={height}
            key={`star-${index}`}
          />
        )
      })}
    </form>
  )
}