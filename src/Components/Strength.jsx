import { useEffect, useState } from 'react'
import StrengthBar from './StrengthBar'

const Strength = ({ isUppercase, isLowercase, isNumber, isSymbol }) => {
  const colors = ['red', 'gold', 'lawngreen', 'chartreuse']
  const [trueCounter, setTrueCounter] = useState(0)

  useEffect(() => {
    const trueArray = [isLowercase, isUppercase, isNumber, isSymbol]
    setTrueCounter(trueArray.filter(bool => bool).length)
  }, [isUppercase, isLowercase, isNumber, isSymbol])

  return (
    <div className='strength'>
      <div className='main-content__strength'>
        <span>STRENGTH</span>
        <div className='main-content__strength-bars'>
          {colors.map((color, index) => (
            <StrengthBar key={index} color={color} isActive={trueCounter > index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Strength
