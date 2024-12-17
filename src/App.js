import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LoginPage from './auth/login';
import SupplierDashboard from './features/supplier/supplier-dashboard';
import CustomerDashboard from './features/customer/customer-dashboard';
import AdminDashboard from './admin/admin-dashboard';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/supplier' element={<SupplierDashboard />} />
        <Route path='/customer' element={<CustomerDashboard />} />      
      </Routes>
    </div>
  );
}

export default App;
