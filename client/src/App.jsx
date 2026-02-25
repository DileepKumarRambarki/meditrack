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
  {/* Public Routes */}
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  {/* Patient Protected Routes */}
  <Route element={<ProtectedRoute allowedRole="patient" />}>
    <Route path="/" element={<Homepage />}>
      <Route index element={<Symptom />} />   {/* default page */}
      <Route path="nearbyhos" element={<NearbyHos />} />
      <Route path="lab-reports" element={<LabReport />} />
      <Route path="prescription" element={<ViewPrescription />} />
      <Route path="book-appointment" element={<Appointment />} />
      <Route path="appointments" element={<AppointmentGrid />} />
    </Route>
  </Route>

  {/* Hospital Protected Routes */}
  <Route element={<ProtectedRoute allowedRole="hospital" />}>
    <Route path="/hospital" element={<HospitalHome />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="addprescription" element={<AddPrescription />} />
    </Route>
  </Route>

  {/* Catch All Route */}
  <Route path="*" element={<Login />} />
</Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
