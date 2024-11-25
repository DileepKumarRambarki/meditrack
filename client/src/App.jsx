import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import Homepage from './pages/Homepage'
import { AuthProvider } from './utils/Authcontext'
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/home" element={<Homepage/>}/>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
