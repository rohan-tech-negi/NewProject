
import { SignInButton, SignOutButton, Show, UserButton } from '@clerk/react'
import {Routes, Route} from "react-router"

function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<h1 className="text-red-500">Welcome to the app</h1>} />
</Routes>

       

      
    </>
  )
}

export default App
