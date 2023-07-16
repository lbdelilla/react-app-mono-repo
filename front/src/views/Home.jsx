import { Counter } from '../features/counter/Counter.jsx'

function Home() {
  return (
    <>
      <div className="text-red-500 flex justify-center text-2xl my-10">
        The frontend of app is working with React, JS and TailwindCss
      </div>
      <Counter />
    </>
  )
}

export default Home
