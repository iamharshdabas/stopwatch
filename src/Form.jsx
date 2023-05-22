/* eslint-disable react/prop-types */
import { useState } from 'react'

const Form = ({ setDuration }) => {
  const [number, setNumber] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setDuration(Number(number))
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

export default Form
