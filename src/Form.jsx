import PropTypes from 'prop-types'
import { useState } from 'react'

const Form = (props) => {
  const [number, setNumber] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    props.setDuration(() => {
      return Number(number)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='durationInput'></label>
        <input
          type='number'
          name='durationInput'
          placeholder='Enter duration'
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button type='submit'>start</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  setDuration: PropTypes.func,
}

export default Form
