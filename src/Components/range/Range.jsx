const Range = ({ lengthValue, handleRangeChange, ProgressNumber }) => {
  return (
    <>
      <div className='length'>
        <label>Password Length</label>
        <span className='length-number'>{lengthValue}</span>
      </div>

      <input
        type="range"
        style={{ background: ProgressNumber('#a3ffae', '#0d0c12') }}
        onChange={handleRangeChange}
        id="char-length"
        min={0}
        max={20}
        value={lengthValue}
      />
    </>
  )
}

export default Range
