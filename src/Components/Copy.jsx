import CopyIcon from './CopyIcon'

const Copy = ({ password }) => {
  async function copyTextToClipboard () {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(password)
    }
  }
  return (
    <div className='main-content__copy'>
      <span style={{ color: `${password ? '#f0f0f5' : '#514f64'}` }}>{!password.length ? 'P4$5W0rD!' : password}</span>
      <button onClick={copyTextToClipboard}>
        <CopyIcon />
      </button>
    </div>
  )
}

export default Copy
