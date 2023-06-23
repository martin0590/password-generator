import { useState } from 'react'

const useCheckbox = (initialValue = false) => {
  const [isChecked, setIsChecked] = useState(initialValue)
  const [amount, setAmount] = useState(0)

  const handleCheckbBoxChange = (event) => {
    setIsChecked(event.target.checked)
    if (!event.target.checked) setAmount(0)
  }

  const handleIncrement = (lengthValue) => {
    if (amount >= lengthValue) return
    setAmount(prev => prev + 1)
  }

  const handleDecrement = () => {
    setAmount(prev => prev - 1)
  }

  return {
    isChecked,
    amount,
    handleCheckbBoxChange,
    handleIncrement,
    handleDecrement
  }
}

export default useCheckbox
