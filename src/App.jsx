import Timer from "./Timer"

export default function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600) // 10 minutes timer
  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  )
}
