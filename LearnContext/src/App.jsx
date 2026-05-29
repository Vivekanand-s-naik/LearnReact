
import './App.css';
import User from './Components/User';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login'

function App() {
return (
    <>
    <UserContextProvider>
      <h1 className='bg-amber-500 h-screen'>Test</h1>
      <Login />
      <User/>      
    </UserContextProvider>
    </>
  )
}

export default App
