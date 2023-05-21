import PropTypes from 'prop-types'
import { useTimer } from 'react-timer-hook'
import alert from './assets/wrong-answer-bass-buzzer.wav'

const Timer = (props) => {
  const alertSound = new Audio(alert)
  const time = new Date()
  const expiryTime = time.setSeconds(time.getSeconds() + props.duration)

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: expiryTime,
      autoStart: false,
      onExpire: () => alertSound.play(),
    })

  return (
    <div className='text-9xl text-center'>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div>
        {isRunning ? (
          <button
            className='rounded-full px-12 border-2 border-violet-500'
            onClick={pause}
          >
            Pause
          </button>
        ) : (
          ''
        )}
        {/* TODO: make start appear when time is at initial duration HINT: use totalSeconds in react-timer-hook */}
        {isRunning ? (
          ''
        ) : (
          <button
            className='rounded-l-full px-12 border-y-2 border-l-2 border-y-violet-500 border-l-violet-500 border-r-black'
            onClick={start}
          >
            Start
          </button>
        )}
        {isRunning ? (
          ''
        ) : (
          <button
            className='px-6 border-y-2 border-y-violet-500 border-x-black'
            onClick={resume}
          >
            Resume
          </button>
        )}
        {isRunning ? (
          ''
        ) : (
          <button
            className='rounded-r-full px-12 border-y-2 border-r-2 border-y-violet-500 border-r-violet-500 border-l-black'
            onClick={() => {
              const time = new Date()
              const expiryTime = time.setSeconds(
                time.getSeconds() + props.duration
              )
              restart(expiryTime, false)
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

Timer.propTypes = {
  duration: PropTypes.number,
}

export default Timer
