
import { SignInButton, SignOutButton, Show, UserButton, useUser } from '@clerk/react'
import { Navigate, Route, Routes } from "react-router";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProblemsPage from './pages/ProblemsPage'
import Toaster from "react-hot-toast"
import DashboardPage from './pages/DashboardPage';

function App() {

  const {isSignedIn} = useUser()
  return (
    <>
<Routes>
  <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
  <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
  <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
</Routes>

       
<Toaster toastOption={{duration: 3000}}/>
      
    </>
  )
}

export default App
