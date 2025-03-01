import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProtectedRoute from './utils/ProtectedRoute'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import { AuthProvider } from './utils/Authcontext'
import NearbyHos from './pages/NearByHos'
import LabReport from './pages/LabCard'
import Appointment from "./pages/Appointment"
import AppointmentGrid from './pages/AppointmentGrid'
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/" element={<Homepage/>}>
                <Route path="/nearbyhos" element={<NearbyHos/>} />
                <Route path="/lab-reports" element={<LabReport/>} />
                <Route path="/book-appointment" element={<Appointment/>} />
              <Route path="/appointments" element={<AppointmentGrid/>} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
