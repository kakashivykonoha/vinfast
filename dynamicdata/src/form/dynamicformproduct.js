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
    const [Province,setProvince]=useState('') //ten tinh tp hien tai cua khach hang
    const [RegistrationFee,setRegistrationFee]=useState(0)//phi truoc ba
    const [ProvinceList,setProvinceList]=useState([''])//danh sach cac tinh
const handleselectName=(e)=>setName(()=>e.target.value)

const handleprovinces=(e)=>{
    const res=provinces.filter(f=>f.toLocaleLowerCase().includes(e.target.value))
    setProvinceList(()=>res)
if(Province =='Hà Nội'||Province=='Hồ Chí Minh')

    {setRegistrationFee(()=>14000000)}
        else {
        setRegistrationFee(()=>1000000)
    } 
    
 }
    return(<div>
        
        <form>
            <select onChange={handleselectName}>
                {Xpanders.map(option=>(
                    <option >{option.name}</option>
                ))}
            </select>
            <br></br>
            <br></br>
            
       <div className='searchBar'><FaSearch/><input type='text' placeholder="Search"  onChange={handleprovinces}/></div>
        <div className="search-result">
       {ProvinceList.map((province,index)=>(
            <div onClick={()=>(setProvince(()=>province))} key={index}>{province}</div>
                ))}
            </div>
        
        </form>
        {name}<br></br>
      {Province}    
<p>Phí trước bạ:</p>
    {RegistrationFee}
  
    </div>
   ) 
}
/* phí biển số xe xăng là 20 triệu */

