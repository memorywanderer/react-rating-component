type RatingLabelProps = {
  labelText: string,
  labelFontSize: number,
  labelTextColor: string
}

export const RatingLabel = ({
  labelText,
  labelFontSize,
  labelTextColor
}: RatingLabelProps) => {
  const styles = {
    fontSize: `${labelFontSize}px`,
    color: labelTextColor,
  }
  return (
    <div style={styles}>{labelText}</div>
  )
}