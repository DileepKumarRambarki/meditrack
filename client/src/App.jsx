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
import Symptom from './pages/Symptom'
import Dashboard from './pages/Hospital/Dashboard'
import HospitalHome from './pages/Hospital/HospitalHome'
import AddPrescription from './pages/AddPrescription'
import ViewPrescription from './pages/ViewPrecription'
function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<ProtectedRoute allowedRole="patient" />}>
              <Route path="/" element={<Homepage/>}>
                <Route path='/' element={<Symptom/>} />
                <Route path="/nearbyhos" element={<NearbyHos/>} />
                <Route path="/lab-reports" element={<LabReport/>} />
                <Route path='/prescription' element={<ViewPrescription/>} />
                <Route path="/book-appointment" element={<Appointment/>} />
                <Route path="/appointments" element={<AppointmentGrid/>} />
              </Route>
            </Route>
            <Route element={<ProtectedRoute allowedRole="hospital" />}>
              <Route path="/hospital" element={<HospitalHome />}>
                <Route path='/hospital/dashboard' element={<Dashboard/>} />
                <Route path='/hospital/addpredcription' element={<AddPrescription/>} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
