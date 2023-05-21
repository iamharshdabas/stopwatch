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
          <button className='rounded-full px-12' onClick={pause}>
            Pause
          </button>
        ) : (
          ''
        )}
        {isRunning ? (
          ''
        ) : (
          <button className='rounded-l-full px-12' onClick={start}>
            Start
          </button>
        )}
        {isRunning ? (
          ''
        ) : (
          <button className='rounded-none px-12' onClick={resume}>
            Resume
          </button>
        )}
        {isRunning ? (
          ''
        ) : (
          <button
            className='rounded-r-full px-12'
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
