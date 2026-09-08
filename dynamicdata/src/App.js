import { RiRegisteredLine } from 'react-icons/ri'
import './App.css';
import ComponentA from './form/formUpdateCars/listCars/Car/Specification/sideeffectcontextnotuse/contextside.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* import mitsubishixforce2025 from'./photo/mitsubishixforce2025.jpg'; */
import ControlledInput from './form/checkCar.js';
import triton from'./photo/triton.jpg';
import mitsubishixforce2025 from'./photo/mitsubishixforce2025.jpg';
import destinator from './photo/destinator.jpeg';
import xpandernew from './photo/xpandernew.jpg';
import xpandercrossnew from './photo/xpandercrossnew.jpeg';
import Header from './bank/headerproduct.js';
import ComponentB from './form/formUpdateCars/listCars/Car/Specification/sideeffectcontextnotuse/Demo/contextsidedemo.js';

import { useState } from 'react';
import Rating from './rating' ;
import Children from './form/formUpdateCars/listCars/Car/Specification/sideeffectcontextnotuse/children.js';
import GrandChildren from './form/formUpdateCars/listCars/Car/Specification/sideeffectcontextnotuse/grandchild.js';
import { Middleware } from './bank/midlewarebank.js';


import LoginForm from './login/login.js';
import RegisterPage from './login/register.js';
import DeclareCar from './form/formUpdateCars/listCars/Car/declareCars.js';import { AddnewProduct } from './form/formUpdateCars/listCars/Car/addnewproduct.js';
import Home from './home/home.js';
import CarsProduct from './productFontend/frontendproduct.js';
let  today = new Date().toLocaleDateString();

function App() {
  
 
/*     const [posts,setPosts]=useState([]) 
    const [table,setTables]=useState({licensefee:'',tax:'',inspectionfee:'',maintainroad:'', LiabilityInsurance:''})
    const [loan,setLoan]=useState({numberial:[''],principaldebt:[''],interestpermonth:[''],priceipaldebpermonth:[''],total:['']})  
 */
return (
     
<div >
{/* <h3>Xin thông báo</h3><p>Bây giờ là: <strong>{today}</strong></p> */}
<h2 style={{  fontFamily: "Arial, sans-serif"}}>Thịnh Cường<RiRegisteredLine/></h2>
<img src="https://res.cloudinary.com/dfpgpcaso/image/upload/v1788515210/vinfast_ot12kb.png" style={{width:"180px",height:"50px"}}></img>
<BrowserRouter>
      <nav className='header-buttons'>
        <Link to="/">Home</Link>
        <Link to="/bank">Vay ngân hàng</Link> 
        <Link to="/login">Đăng nhập</Link>
        <Link to="/register">Đăng ký</Link>
        <Link to="/dashboard">Quản lý sản phẩm</Link>
        <Link to="/product">Sản phẩm</Link>
        

        
      </nav>

{/* <NoteForm ></NoteForm> */}


      <Routes >
        <Route path="/bank" element={<Middleware />} />
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage/>} />
      <Route path="/demo" element={<ComponentB/>}></Route>
      <Route path="/dashboard" element={<AddnewProduct/>} >
      <Route path="add" element={<DeclareCar/>}/>
      </Route>
      <Route path="/dashboard" element={<AddnewProduct/>} ></Route>
     <Route path="/dashboard/products/:namecar/:id" element={<ComponentA/>}>
     </Route>
     <Route path="/product" element={<CarsProduct/>}></Route> 
      </Routes>
</BrowserRouter>
</div>
)
}

    
  


export default App;
{/* Nếu prop có nhiều dữ liệu
<Product title="A book" price={29.99} id="p1" />
 or
const productData = {title: 'A book', price: 29.99, id: 'p1'}
<Product data={productData} /> */}