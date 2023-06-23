import { useState } from 'react'

const sliderMax = 20

const useRange = (initialValue = 0) => {
  const [lengthValue, setLengthValue] = useState(initialValue)

  function ProgressNumber (color1, color2) {
    const progress = (Number(lengthValue) / sliderMax) * 100
    return `linear-gradient(to right, ${color1} ${progress}%,${color2} ${progress}%)`
  }

  const handleRangeChange = (event) => {
    setLengthValue(event.target.value)
  }

  return {
    lengthValue,
    handleRangeChange,
    ProgressNumber
  }
}

export default useRange
