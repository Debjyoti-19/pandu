import './App.css'
import NavBar from './components/navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'
import Signup from './components/signup'
import Page1 from './components/page1'

function App() {
  const { authUser, isCheckingAuth } = useAuthStore()
  const navigate = useNavigate()

  return (
    <>  
      <NavBar />
      <Routes>
        <Route path='/page1' element={<Page1 />} />
        <Route path='/signup' element={authUser ? navigate('/page1') : <Signup />} />
      </Routes>
    </>
  )
}

export default App
