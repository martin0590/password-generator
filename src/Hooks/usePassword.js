import { useState } from 'react'
import { getRandomNumber } from '../ultils/randomNum'

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@}#$<%^&*)_+-=]{;:,./>(?["'

const usePassword = (passwordInfo) => {
  const [password, setPassword] = useState('')

  function createPassword () {
    const { lengthValue, lowerAmount, upperAmount, numAmount, SymAmount } = passwordInfo
    if (lengthValue === 0) return
    const passwordArray = Array(Number(lengthValue)).fill('')
    if (lowerAmount > 0) {
      let lowLetNeeded = lowerAmount
      while (lowLetNeeded > 0) {
        const randomSlot = getRandomNumber(0, lengthValue - 1)
        if (!passwordArray[randomSlot].length) {
          const randomCharNumber = getRandomNumber(0, lowerLetters.length - 1)
          passwordArray[randomSlot] = lowerLetters[randomCharNumber]
          lowLetNeeded--
        }
      }
    }
    if (upperAmount > 0) {
      let uppLetNeeded = upperAmount
      while (uppLetNeeded > 0) {
        const randomSlot = getRandomNumber(0, lengthValue - 1)
        if (!passwordArray[randomSlot].length) {
          const randomCharNumber = getRandomNumber(0, upperLetters.length - 1)
          passwordArray[randomSlot] = upperLetters[randomCharNumber]
          uppLetNeeded--
        }
      }
    }
    if (numAmount > 0) {
      let numNeeded = numAmount
      while (numNeeded > 0) {
        const randomSlot = getRandomNumber(0, lengthValue - 1)
        if (!passwordArray[randomSlot].length) {
          const randomCharNumber = getRandomNumber(0, numbers.length - 1)
          passwordArray[randomSlot] = numbers[randomCharNumber]
          numNeeded--
        }
      }
    }
    if (SymAmount > 0) {
      let symNeeded = SymAmount
      while (symNeeded > 0) {
        const randomSlot = getRandomNumber(0, lengthValue - 1)
        if (!passwordArray[randomSlot].length) {
          const randomCharNumber = getRandomNumber(0, symbols.length - 1)
          passwordArray[randomSlot] = symbols[randomCharNumber]
          symNeeded--
        }
      }
    }

    const passwordWord = passwordArray.join('')
    setPassword(passwordWord) // Last step
  }

  return {
    password,
    createPassword
  }
}

export default usePassword
