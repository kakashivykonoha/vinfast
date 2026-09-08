import { FaSearch } from "react-icons/fa";
import { useState,useEffect } from "react";
import './fee.css'
const Xpanders=[{name:'Xpander premium',price:659000000,promotion:35000000,pricetax:620000000},{name:'Xpander AT',price:598,promotion:"",pricetax:590},{name:'MT',price:568000000,pricetax:555}]
const XpanderCross=[{name:'Xpander Cross',price:699000000,promotion:80000000,pricetax:657}]
const provinces=["Hà Nội","Huế","Quảng Ninh","Cao Bằng","Lạng Sơn","Lai Châu","Điện Biên","Sơn La","Thanh Hóa",
    "Nghệ An","Hà Tĩnh","Tuyên Quang","Lào Cai","Hồ Chí Minh","Thái Nguyên","Bắc Ninh",
    "Hải Phòng","Cà Mau","An Giang"]
export default function ControlledInput(){
    const [name,setName]=useState('')//ten cua xe
//ten tinh tp hien tai cua khach hang
    const [RegistrationFee,setRegistrationFee]=useState('')//phi truoc ba

const handleselectName=(e)=>setName(()=>e.target.value)

/* function handleprovinces(e){
        
 const inputprovince=e.target.value
 if(input.province =='Hà Nội'||input.province=='Hồ Chí Minh')
{  setRegistrationFee(()=>14000000)}
        else {
  setRegistrationFee(()=>1000000)
    } 
    
 } */
const handleSubmit =(e)=>{
    e.preventDefault()
}
    return(<div>
        
        <form onSubmit={handleSubmit}>
            <select onChange={handleselectName}>
            
                {Xpanders.map(option=>(
                    <option >{option.name}</option>
                ))}
            </select>
            <br></br>
            <br></br>
            
       <select  onChange={handleprovinces}>
        <option value=''>Nhập tên tỉnh</option>
       {provinces.map((province,index)=>(
            <option key={index}>{province}</option>
       ))}
       </select>
       <input type='submit'>Nhận báo giá</input>
        </form>
        
    

  
    </div>
   ) 
}
/* phí biển số xe xăng là 20 triệu */

