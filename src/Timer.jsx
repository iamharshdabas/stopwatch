import { useTimer } from 'react-timer-hook'

const Timer = () => {
  const time = new Date()
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 600)

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
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
      <button onClick={() => restart(expiryTimestamp)}>Restart</button>
    </div>
  )
}

export default Timer
