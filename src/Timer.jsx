import PropTypes from 'prop-types'
import { useTimer } from 'react-timer-hook'
import alert from './assets/wrong-answer-bass-buzzer.wav'

const Timer = (props) => {
  const alertSound = new Audio(alert)
  const time = new Date()
  const timeLeft = time.setSeconds(time.getSeconds() + props.duration)

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
    expiryTimestamp: timeLeft,
    autoStart: false,
    onExpire: () => alertSound.play(),
  })

  return (
    <div className='text-9xl text-center'>
      <div className='m-24'>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className='h-80'>
        <div>
          {isRunning ? (
            <button
              className='rounded-full h-72 m-4 px-28 border-2 border-violet-500'
              onClick={pause}
            >
              Pause
            </button>
          ) : (
            ''
          )}
        </div>
        <div>
          {!isRunning && totalSeconds === props.duration && (
            <button
              className='rounded-full h-72 m-4 px-28 border-2 border-violet-500'
              onClick={start}
            >
              Start
            </button>
          )}
        </div>
        <div>
          {!isRunning && totalSeconds !== props.duration && (
            <button
              className='rounded-full m-4 px-12 border-2 border-violet-500'
              onClick={resume}
            >
              Resume
            </button>
          )}
        </div>
        <div>
          {!isRunning && totalSeconds !== props.duration && (
            <button
              className='rounded-full m-4 px-28 border-2 border-violet-500'
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
    </div>
  )
}

Timer.propTypes = {
  duration: PropTypes.number,
}

export default Timer
