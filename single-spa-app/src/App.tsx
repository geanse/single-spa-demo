import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parcel from 'single-spa-react/parcel'

function App() {
  const [count, setCount] = useState(0)
  const [isParcelVisible, setIsParcelVisible] = useState(true)

  return (
    <>
      <button className="toggle-parcel-btn" type="button" onClick={() => setIsParcelVisible(!isParcelVisible)}>Toggle Parcel</button>

      {/* here we load the vizualist table parcel */}
      {
        isParcelVisible && (
          <Parcel
            block
            config={() => window.System.import('http://localhost:5555/js/embed_table_3.92.1.js')}
            // config={() => window.System.import('https://res.cloudinary.com/wochap/raw/upload/v1735570922/tmp/spa-parcel-table-30-dec-2024-b.js')}
            wrapWith="section"
            wrapStyle={{ width: '90vw', height: 400 }}
          />
        )
      }

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
