type StarProps = {
  rating: number,
  maxValue: number,
  hoverRating: number,
  ratingValue: number,
  setRating: (value: number) => void,
  setHoverRating: (value: number) => void,
  checkedColor: string,
  unCheckedColor: string,
  width: number,
  height: number,
}

export const Star = ({
  rating,
  maxValue,
  hoverRating,
  ratingValue,
  setRating,
  setHoverRating,
  checkedColor,
  unCheckedColor,
  width,
  height,
}: StarProps) => {

  // Star styles for customization
  const starStyles = {
    display: "none"
  } as React.CSSProperties

  const starCheckedAndSvg = {
    fill: ratingValue <= rating || ratingValue <= hoverRating ? checkedColor : unCheckedColor,
    cursor: 'pointer',
  } as React.CSSProperties;

  const handleCheckboxCheck = () => {
    setRating(ratingValue);
  }

  const handleMouseEnterStar = () => {
    setHoverRating(ratingValue)
  }

  const handleMouseLeaveStar = () => {
    setHoverRating(rating)
  }

  return (
    <label htmlFor={`star-${ratingValue}`}>
      <input
        style={starStyles}
        type="checkbox"
        id={`star-${ratingValue}`}
        value={ratingValue}
        onChange={handleCheckboxCheck}
        checked={ratingValue <= rating ? true : false}

      />
      <svg
        style={starCheckedAndSvg}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        viewBox="0 0 16 16"
        onMouseEnter={handleMouseEnterStar}
        onMouseLeave={handleMouseLeaveStar}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleCheckboxCheck()
          }
        }}
        tabIndex={0}
        role="checkbox"
        aria-label={`Rate ${ratingValue} of ${maxValue} stars`}
        aria-checked={ratingValue <= rating}
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    </label>

  )
}
