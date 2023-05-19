import PropTypes from 'prop-types'
import alert from './assets/wrong-answer-bass-buzzer.wav'
import { useTimer } from 'react-timer-hook'

const Timer = (props) => {
  const alertSound = new Audio(alert)
  const time = new Date()
  const expiryTime = time.setSeconds(time.getSeconds() + props.duration)

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: expiryTime,
      onExpire: () => alertSound.play(),
    })

  return (
    <div>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          const time = new Date()
          const expiryTime = time.setSeconds(time.getSeconds() + props.duration)
          restart(expiryTime, false)
        }}
      >
        Reset
      </button>
    </div>
  )
}

Timer.propTypes = {
  duration: PropTypes.number,
}

export default Timer
