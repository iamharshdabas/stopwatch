import { useState } from 'react'
import Form from './Form'
import Timer from './Timer'

export default function App() {
  const [duration, setDuration] = useState()
  return (
    <div className='bg-black text-gray-50 h-screen grid place-items-center'>
      <div>
        <Form setDuration={setDuration} />
        {duration > 0 && <Timer duration={duration} />}
      </div>
    </div>
  )
}
