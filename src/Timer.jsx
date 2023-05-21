import PropTypes from 'prop-types'
import { useTimer } from 'react-timer-hook'
import alert from './assets/wrong-answer-bass-buzzer.wav'

const Timer = (props) => {
  const alertSound = new Audio(alert)
  const time = new Date()
  const expiryTime = time.setSeconds(time.getSeconds() + props.duration)

  const {
    seconds,
    minutes,
    isRunning,
    totalSeconds,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: expiryTime,
    autoStart: false,
    onExpire: () => alertSound.play(),
  })

  return (
    <div className='text-9xl text-center'>
      <div className='m-24'>
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
        {!isRunning && totalSeconds !== props.duration && (
          <button
            className='rounded-l-full px-12 border-y-2 border-l-2 border-y-violet-500 border-l-violet-500 border-r-black'
            onClick={resume}
          >
            Resume
          </button>
        )}
        {!isRunning && totalSeconds === props.duration && (
          <button
            className='rounded-full px-12 border-2 border-violet-500'
            onClick={start}
          >
            Start
          </button>
        )}
        {!isRunning && totalSeconds !== props.duration && (
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
