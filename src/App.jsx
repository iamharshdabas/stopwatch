import Timer from './Timer'

export default function App() {
  return (
    <div className='bg-black text-gray-50 h-screen grid place-items-center'>
      <Timer duration={30} />
    </div>
  )
}
