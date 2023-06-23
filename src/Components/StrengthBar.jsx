const StrengthBar = ({ isActive, color }) => {
  return <div style={{ background: isActive ? color : '' }}></div>
}

export default StrengthBar
