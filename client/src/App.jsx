import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import { AuthProvider } from './utils/Authcontext'
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/" element={<Homepage/>}/>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
