
import { SignInButton, SignOutButton, Show, UserButton } from '@clerk/react'
import {Routes, Route} from "react-router"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<HomePage></HomePage>} />
  <Route path="/about" element={<AboutPage></AboutPage>}></Route>
</Routes>

       

      
    </>
  )
}

export default App
