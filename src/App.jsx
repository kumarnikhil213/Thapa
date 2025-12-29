
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Gallary  from './pages/Gallary'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetail'
import Flyper from './pages/Flyper' 
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
      
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallary' element={<Gallary/>}/>

          <Route path='/shop' element={<Shop/>}/>
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/flyper' element={< Flyper/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
       
      </div>
      
   
    </>
  )
}

export default App;
