
import { SignInButton, SignOutButton, Show, UserButton, useUser } from '@clerk/react'
import {Routes, Route} from "react-router"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProblemsPage from './pages/ProblemsPage'
import Toaster from "react-hot-toast"

function App() {

  const {isSignedIn} = useUser()
  return (
    <>
<Routes>
  <Route path="/" element={<HomePage></HomePage>} />
  <Route path="/about" element={<AboutPage></AboutPage>}></Route>
  <Route path="/problems" element={<ProblemsPage></ProblemsPage>}></Route>
</Routes>

       
<Toaster/>
      
    </>
  )
}

export default App
