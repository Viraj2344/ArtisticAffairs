import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import MarvelCollection from './pages/Marvelcollection/MarvelCollection';
import BTSCollection from './pages/BTSCollection/BTSColleciton';
import SportsCollection from './pages/SportsCollection/SportsCollection';
import AestheticCollection from './pages/AestheticCollection/AestheticCollection';
import GymCollection from './pages/GymCollection/GymCollection';
import TravelCollection from './pages/TravelCollection/TravelCollection';
import AnimeCollection from './pages/AnimeCollection/AnimeCollection';
import MemeCollection from './pages/MemeCollection/MemeCollection';
import DisneyCollection from './pages/DisneyCollection/DisneyCollection';
import CustomCases from './pages/customcases/CustomCases';
import ProductInfo2 from './pages/productInfo2/productInfo2';
import HardCases from './pages/hardcases/hardCases';
import SiliconCases from './pages/siliconcases/SiliconCases';
import Mugs from './pages/mugs/mugs';
import Tumblers from './pages/tumblers/Tumblers';
import PhoneCases from './pages/phonecases/PhoneCases';
import ProductInfoCustom from './pages/productInfoCustom/productInfoCustom';
import CaseInfo from './pages/caseinfo/caseInfo';
import AboutUs from './pages/aboutus/aboutUs';
import Cans from './pages/Cans/Cans';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/MarvelCollection" element={<MarvelCollection />} />
          <Route path="/BTSCollection" element={<BTSCollection />} />
          <Route path="/SportsCollection" element={<SportsCollection />} />
          <Route path="/AestheticCollection" element={<AestheticCollection />} />
          <Route path="/GymCollection" element={<GymCollection />} />
          <Route path="/TravelCollection" element={<TravelCollection />} />
          <Route path="/AnimeCollection" element={<AnimeCollection />} />
          <Route path="/MemeCollection" element={<MemeCollection />} />
          <Route path="/DisneyCollection" element={<DisneyCollection />} />
          <Route path='/customcases' element={<CustomCases/>}/> 
          <Route path='/productInfo2' element={<ProductInfo2/>}/>
          <Route path='/hardCases' element={<HardCases />}/>
          <Route path='/siliconcases' element={<SiliconCases />}/>
          <Route path='/PhoneCases' element={<PhoneCases />}/>
          <Route path='/mugs' element={<Mugs />}/>
          <Route path='/Tumblers' element={<Tumblers />}/>
          <Route path='/productInfoCustom' element={<ProductInfoCustom />}/>
          <Route path='/caseinfo' element={<CaseInfo />}/>
          <Route path='/aboutUs' element={<AboutUs />}/>
          <Route path='/Cans' element={<Cans />}/>
        
          
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/productInfo2/:id' element={<ProductInfo2/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'virajbakshi083@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}