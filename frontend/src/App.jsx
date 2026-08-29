
import { SignInButton, SignOutButton, Show, UserButton } from '@clerk/react'
import './App.css'

function App() {
  return (
    <>
       <h1>Welcome to the app</h1>

      <Show when="signed-out">
        <SignInButton mode="modal">
          Sign In
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <SignOutButton>
          Sign Out
        </SignOutButton>
      </Show>

      <UserButton />
    </>
  )
}

export default App
