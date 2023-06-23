import { useState } from 'react'
import Strength from './Components/Strength'
import Title from './Components/Title'
import Copy from './Components/Copy'
import Generate from './Components/Generate'
import './App.css'
import Range from './Components/range/Range'
import CheckBox from './Components/checkbox/CheckBox'
import useCheckbox from './Hooks/useCheckbox'
import useRange from './Hooks/useRange'
import usePassword from './Hooks/usePassword'

const App = () => {
  const [limitAmountChars, setLimitAmountChars] = useState(0)
  const range1 = useRange(0)
  const checkBox1 = useCheckbox()
  const checkBox2 = useCheckbox()
  const checkBox3 = useCheckbox()
  const checkBox4 = useCheckbox()
  const { password, createPassword } = usePassword({ lengthValue: range1.lengthValue, lowerAmount: checkBox1.amount, upperAmount: checkBox2.amount, numAmount: checkBox3.amount, SymAmount: checkBox4.amount })
  return (
    <main className='main__app'>

      <Title />

      <div className='main-content'>

        <Copy password = {password} />

        <div className='main-content__options'>

            <Range {...range1} />

            <CheckBox
              message = 'Include Lowercase Letters'
              lengthValue={range1?.lengthValue}
              handlelimitAmountChars={setLimitAmountChars}
              limitAmountChars={limitAmountChars}
              {...checkBox1}
              />

            <CheckBox
              message = 'Include Uppercase Letters'
              lengthValue={range1?.lengthValue}
              handlelimitAmountChars={setLimitAmountChars}
              limitAmountChars={limitAmountChars}
              {...checkBox2}
              />

            <CheckBox
              message = 'Include Numbers'
              lengthValue={range1?.lengthValue}
              handlelimitAmountChars={setLimitAmountChars}
              limitAmountChars={limitAmountChars}
              {...checkBox3}
              />

            <CheckBox
              message = 'Include Symbols'
              lengthValue={range1?.lengthValue}
              handlelimitAmountChars={setLimitAmountChars}
              limitAmountChars={limitAmountChars}
              {...checkBox4}
            />

        </div>

        <Strength isLowercase = {checkBox1.isChecked} isUppercase = {checkBox2.isChecked} isNumber = {checkBox3.isChecked} isSymbol = {checkBox4.isChecked}/>

        <Generate createPassword = {createPassword} />

      </div>
    </main>
  )
}

export default App
