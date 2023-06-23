import './CheckBox.css'

const CheckBox = ({ limitAmountChars, handlelimitAmountChars, message, isChecked, handleCheckbBoxChange, handleIncrement, handleDecrement, amount, lengthValue }) => {
  const handleIncrements = () => {
    if (limitAmountChars >= lengthValue) return
    handlelimitAmountChars(prev => prev + 1)
    handleIncrement(lengthValue)
  }

  const handleDecrements = () => {
    if (limitAmountChars === 0 || amount === 0) return
    handlelimitAmountChars(prev => prev - 1)
    handleDecrement()
  }
  return (

  <div className='input-checkbox-container'>
    <label>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={(e) => handleCheckbBoxChange(e)}/>

        {message}
    </label>
    <span
      className='length-number input-checkbox-amount'
      style={{ scale: `${isChecked ? '1' : '0'}` }} >
      {amount}
    </span>

    <div
      className='input-checkbox-control-amount'
      style={{ scale: `${isChecked ? '1' : '0'}` }} >
      <button
        onClick={handleIncrements} >
        +
      </button>
      <button onClick={handleDecrements} >
        -
      </button>
    </div>
  </div>

  )
}

export default CheckBox
