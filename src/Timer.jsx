import PropTypes from 'prop-types'
import { useTimer } from 'react-timer-hook'
import alert from './assets/wrong-answer-bass-buzzer.wav'

const Timer = (props) => {
  const alertSound = new Audio(alert)
  const time = new Date()
  const expiryTime = time.setSeconds(time.getSeconds() + props.duration)

  const { seconds, minutes, isRunning, start, pause, restart } = useTimer({
    expiryTimestamp: expiryTime,
    autoStart: false,
    onExpire: () => alertSound.play(),
  })

  return (
    <div className='timer'>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {isRunning ? '' : <button onClick={start}>Start</button>}
      {isRunning ? <button onClick={pause}>Pause</button> : ''}
      {isRunning ? (
        <button
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
      ) : (
        ''
      )}
    </div>
  )
}

Timer.propTypes = {
  duration: PropTypes.number,
}

export default Timer
