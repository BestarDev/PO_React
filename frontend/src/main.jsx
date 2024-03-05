import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/global.css'
import App from './App.jsx'
import Dashboard from './screens/Dashboard.jsx'
import Settings from './screens/Settings.jsx'
import Budget from './screens/Budget.jsx'
import OrderCreate from './screens/Purchase_Order/Create.jsx'
import OrderReceive from './screens/Purchase_Order/Receive.jsx'
import OrderPayment from './screens/Purchase_Order/Payment.jsx'
import OrderLocate from './screens/Purchase_Order/Locate.jsx'
import SettingsContainer from './screens/SettingsScreen'
import Users from './screens/SettingsScreen/Users.jsx'
import Locations from './screens/SettingsScreen/Locations.jsx'
import Branding from './screens/SettingsScreen/Branding.jsx'
import Address from './screens/SettingsScreen/Address.jsx'
import Category from './screens/SettingsScreen/Category.jsx'
import Type from './screens/SettingsScreen/Type.jsx'
import Supplier from './screens/SettingsScreen/Supplier.jsx'
import Status from './screens/SettingsScreen/Status.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Dashboard />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/budget' element={<Budget />} />
      <Route path='/order/create' element={<OrderCreate />} />
      <Route path='/order/receive' element={<OrderReceive />} />
      <Route path='/order/payment' element={<OrderPayment />} />
      <Route path='/order/locate' element={<OrderLocate />} />
      <Route path='/settings' element={<SettingsContainer />}>
        <Route path='/settings/users' element={<Users />} />
        <Route path='/settings/location' element={<Locations />} />
        <Route path='/settings/brand' element={<Branding />} />
        <Route path='/settings/address' element={<Address />} />
        <Route path='/settings/category' element={<Category />} />
        <Route path='/settings/type' element={<Type />} />
        <Route path='/settings/suppliers' element={<Supplier />} />
        <Route path='/settings/status' element={<Status />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
