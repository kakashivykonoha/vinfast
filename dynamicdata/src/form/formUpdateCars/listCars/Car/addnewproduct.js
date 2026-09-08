import { MdDelete } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useState,useEffect } from "react";
import { Outlet,Link,nav, useNavigate } from "react-router-dom";
import { FaRegCopy } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import axios from 'axios'

const API_Cars='http://localhost:8000/api/products'

export const AddnewProduct=()=>{
const navigate=useNavigate
const [cars,setCars]=useState([])
const [carid,setCarid]=useState([{namecar:'',price:'',version:''}])
const [loading,setLoading]=useState(true)
const [err,setError]=useState(null)
const [editId,setEditId]=useState()
const [showAddproducts,setshowAddproducts]=useState(false)
const [PostUpdate,setPostUpdate]=useState([{namecar:'',version:'',price:''}])
const [Errorupdate,setErrorupdate]=useState(null)


useEffect(()=>{fetch(API_Cars).then((res)=>{
   if(!res.ok){ new Error ('Failed to fetch data')
   }
else {return res.json()}}).then(data=>{setCars(data);
    console.log(data);
    setLoading(false)}).catch(
        (err)=>{setError(err.message);
            setLoading(false)
        }
    )

},[])

const handleChange=e=>{
const a={...PostUpdate[0],[e.target.name]:e.target.value}
console.log(a)
    setPostUpdate([a])
}

const onSubmitUpdate=(e)=>{
e.preventDefault()
fetch(`http://localhost:8000/api/update/${editId}`,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(PostUpdate[0])}).then(()=>{
            console.log('add thành công thông số');
             window.location.reload();
        }).catch(err=>console.log(err)).then(res=>res.location.reload())
  ;   
    }
        


const handleEdit=(id)=>{
setEditId(id);
 const getDatatoEdit =async()=>{try{
    const res= await fetch(`http://localhost:8000/api/products/${id}`)
    if(!res.ok) throw new Error("Không update được dữ liệu")
    const data= await res.json();
console.log(data)
setPostUpdate(data)
}
catch (err) {
setErrorupdate(err.message)}
}
getDatatoEdit()
}


return (<>
<h1>Cars Dash</h1>
<div className="addproduct">
<Link  className='addproduct'  onClick={()=>setshowAddproducts(!showAddproducts)} to= "add">Thêm xe mới</Link>
</div>
{Errorupdate &&<div>{Errorupdate}</div>}
{showAddproducts&&<Outlet />}
{/* chỗ post sản phẩm */}
<div className="product-content">
{loading &&<p>Loading</p>}
{err && <div className="error">{err}</div>}
{!loading&&!err&& (
    <main className="carslist">
        
        {cars.map((car,index)=>(
            
            car.id===editId ?
        
           <form method="PUT">
           <div className="car-items" key={car.id}>
           <p>Tên xe:<input name='namecar' type='text' placeholder="viết liền không dấu" value={PostUpdate[0].namecar}   onChange={handleChange}></input></p>
           <p>Giá bán: <input name='price' type='text' value={PostUpdate[0].price}   onChange={handleChange}/></p>
           <p>Phiên bản:<input name='version' type='text' value={PostUpdate[0].version}   onChange={handleChange}/></p>
           <button type='submit' onClick={onSubmitUpdate}>Update</button>
           </div>
           </form>
           
:
<div className="car-items">

           <Link className="carlistTitle" to={`/dashboard/products/${car.namecar.toLowerCase().trim().replace(/\s+/g, "-")}-${car.version.toLowerCase().trim().replace(/\s+/g, "-")}/${car.id}`}  key={car.id} >
 
           <p> {car.namecar.toUpperCase()}</p>
           <p><IoCashOutline/>  Giá bán: {car.price}</p>
           <p>Phiên bản: {car.version}</p>
            </Link>
           <div className="car-actions">
             <button type='button'><MdDelete/></button>
             <button onClick={()=>handleEdit(car.id)} type='button'><FaRegEdit /></button>
             <button type='button'><FaRegCopy /></button>
            </div> 

      

</div>

        ))}
    </main>
)}
</div>
</>)}

/* phai them out let nay vao thi moi hien link */



/* import {useEffect,useState} from 'react';

export default function Coinmarket(){
const [coins,setCoins]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState()
useEffect(()=>{fetch('https://api.coingecko.com/api/v3
/coins/markets?vs
_currency=usd&order=volume_desc&per_page=50&price_change_percentage=1h,
24h,7d%22%20\%20-H%20CG-R896jqLyzd9eKr9sGXQPRHt6').then(response=>response.json()).then(data=>{setCoins(data)})},[])


return (<div>
<ul>
    
      {coins.map((coin) => (
        <li key={coin.id}>{coin.name} :{coin.current_price}</li>
      ))}
    </ul>

 </div>)} 
 //show noshow
 function Header(){
 const [show,setShow]=useState(false)
 return (
         <div>
 <nav className="Header">
   <form className="Header">
     <button onClick={()=>setShow(!show)} type="button">Model</button>
 
   </form>
 </nav>
 {show&&<ProductHeader/>}
 </div>
     )
 }
 export default Header
 
 
 
 
 
 
 
 
 
 
 
 
 
 */