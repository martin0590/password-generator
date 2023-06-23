const Strength = ({ isUppercase, isLowercase, isNumber, isSymbol }) => {
  return (
  <div className='strength'>
    <div className='main-content__strength'>
        <span>STRENGTH</span>
        <div className='main-content__strength-bars'>
          <div style={{ background: `${isLowercase ? 'red' : ''}` }}></div>
          <div style={{ background: `${isUppercase ? 'goldenrod' : ''}` }}></div>
          <div style={{ background: `${isNumber ? 'gold' : ''}` }}></div>
          <div style={{ background: `${isSymbol ? 'chartreuse' : ''}` }}></div>
        </div>
    </div>
  </div>
  )
}

export default Strength
