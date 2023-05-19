import { useTimer } from 'react-timer-hook'

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
    })

  return (
    <div>
      <div style={{ fontSize: '100px' }}>
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

export default function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600) // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  )
}
