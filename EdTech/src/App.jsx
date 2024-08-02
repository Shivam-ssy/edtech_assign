import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Outlet} from "react-router-dom"
import NavBar from './components/NavBar'
import ShowContextProvider from './contextApi/ShowContextProvider'
import ShowContext from './contextApi/Showcontext'
function App() {
  const [count, setCount] = useState(0)
  const {isLoading}=useContext(ShowContext)

  return (
   <> {
    !isLoading && <div>
      <NavBar/>
      <Outlet/>

    </div>

   }
      
   </>
  )
}

export default App
