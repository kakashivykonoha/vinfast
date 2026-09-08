import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {  useState } from "react";
import { Link } from "react-router-dom";
import Parent from "./parent.js";

import FileUploadArray from "./uploadimageArray.js";
import Comfort from "./sondescription.js";
import FileUpload from "./uploadimage.js"
import axios from "axios";
import SonDescription from "./sondescription.js";
import Children from "./children.js";
import GrandChildren from "./grandchild.js";
export default function ComponentA(){
const {id} = useParams();
console.log(id)

const [carsintro,setCarsintro]=useState([{namecar:'',price:'',version:''}])
const [error,setError]=useState(null)
useEffect(()=>{
//try catch để block error
 const fetchCarsintro = async()=> {try {
const res= await fetch(`http://localhost:8000/api/products/${id}`);
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()
console.log(data)
setCarsintro(data)
} 
catch(err){setError(err.message)}
 
 }
 
fetchCarsintro()
    },[])
const handlechange=(e)=>{
    var a={...carsintro,[e.target.name]:e.target.value}
setCarsintro([a])
}
const handleSubmit=(e)=>{
e.preventDefault()
    if(!carsintro.namecar) return;
    fetch(`http://localhost:8000/api/product/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(carsintro[0])}).then(()=>{
            console.log('add thành công thông số')}).catch(err=>console.log(err))
        }
    
    
    

//cách 1 trên kênh Yousaf


return(<div className="ParentProduct">
<p><FileUpload id={id}/></p>
<p><FileUploadArray id={id}/></p>

{!error&&
(<div>{carsintro.map((item)=>(
    <form onSubmit={handleSubmit} method='post'>
<img src={item.avatar} style={{width:"250px",height:'150px',borderRadius: "10%"}}></img>
        <p>Tên xe</p><input name='namecar' placeholder="tên xe" value={item.namecar} onChange={handlechange}></input>
        <p>Phiên bản</p><input name='version' placeholder="phiên bản" value={item.version} onChange={handlechange}></input>
        <p>Giá bán</p><input name='price' placeholder="giá bán" value={item.price} onChange={handlechange}></input>
        <p><button style={{backgroundColor:'red',color:"whitesmoke",padding:"5px",borderRadius:'5px'}}>Save</button></p>
</form>)
)}
  </div>)  

}
<div>
<Parent id={id}/>

</div>



    </div>)
}
