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
    <div className='text-3xl text-center'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='durationInput'></label>
          <input
            type='number'
            name='durationInput'
            placeholder='Enter duration'
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <div>
          <button
            className='my-2 py-1 rounded-full border-2 w-28 hover:border-violet-500'
            type='submit'
          >
            start
          </button>
        </div>
      </form>
    </div>
  )
}

Form.propTypes = {
  setDuration: PropTypes.func,
}

export default Form
