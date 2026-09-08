import { useParams } from "react-router-dom";

import FileUpload from "../uploadimage.js"
import axios from "axios";
import Parent from "./parentdemo.js";
import { useEffect, useState } from "react";
const API_URL='http://localhost:8000/api/products/1'

function ComponentB(){

//phục vụ cho get data
const [cars,setCars]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState(null)
useEffect(()=>{
//try catch để block error
 const fetchCarsintro = async()=> {try {
const res= await fetch('http://localhost:8000/api/products/1');
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()
setCars(data)
} 
catch(err){setError(err.message)}
 finally{
    setLoading(false)
 }}
fetchCarsintro()
    },[])
console.log(cars)
//phục vụ cho get data
const [specs,setSpecs]=useState({namecar:'',version:'',price:''})
const handlechange=(e)=>setSpecs({...specs,[e.target.name]:e.target.value})


    const handleSubmit=(e)=>{

    e.preventDefault()
    if(!specs.namecar) return;
    fetch('http://localhost:8000/api/product',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(specs)}).then(()=>{
            console.log('add thành công thông số')}).catch(err=>console.log(err))
        }

    
    

//cách 1 trên kênh Yousaf


return(<div>
    {error}
      {loading}
<FileUpload/>
  {cars?
 <form className="Allfather" onSubmit={handleSubmit} method='post'>
        <p>Tên xe</p><input  name='namecar'  placeholder="tên xe" onChange={handlechange}></input>
        <p>Phiên bản</p><input name='version'  placeholder="phiên bản" onChange={handlechange}></input>
        <p>Giá bán</p><input name='price'   placeholder="giá bán" onChange={handlechange}></input>
        <p><button style={{backgroundColor:'red',color:"whitesmoke",padding:"5px",borderRadius:'5px'}}>Save</button></p>
</form>   
:
<form>
 <p>Tên xe</p><input  name='namecar' value={cars[0].namecar} placeholder="tên xe" onChange={handlechange}></input>
        <p>Phiên bản</p><input name='version' value={cars[0].version} placeholder="phiên bản" onChange={handlechange}></input>
        <p>Giá bán</p><input name='price' value={cars[0].price}  placeholder="giá bán" onChange={handlechange}></input>
        <p><button style={{backgroundColor:'red',color:"whitesmoke",padding:"5px",borderRadius:'5px'}}>Save</button></p>

  </form>

  

  }

  {/* <form className="Allfather" onSubmit={handleSubmit} method='post'>
        <p>Tên xe</p><input  name='namecar' value={specs.namecar} placeholder="tên xe" onChange={handlechange}></input>
        <p>Phiên bản</p><input name='version' value={specs.version} placeholder="phiên bản" onChange={handlechange}></input>
        <p>Giá bán</p><input name='price' value={specs.price}  placeholder="giá bán" onChange={handlechange}></input>
        <p><button style={{backgroundColor:'red',color:"whitesmoke",padding:"5px",borderRadius:'5px'}}>Save</button></p>
   

  
<button type='submit' > Save</button>
</form> */}
       <Parent/>
    </div>)
}
export default ComponentB