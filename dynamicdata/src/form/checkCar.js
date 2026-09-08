import { FaSearch } from "react-icons/fa";
import { useState,useEffect } from "react";
import './fee.css'
export const Xpanders=[
    {name:'Xpander premium',price:659000000,promotion:35000000,pricetax:620,type:'car',seats:7},
    {name:'Xpander AT',price:598000000,promotion:"",pricetax:590,type:'car',seats:7},
    {name:'Xpander MT',price:568000000,pricetax:555,type:'car',seats:7},
    {name:'Xpander Cross',price:699000000,promotion:80000000,pricetax:657,type:'car',seats:7},
    {name:'Xforce GLX',price:605000000,promotion:45000000,pricetax:599,type:'car',seats:5},
    {name:'Xforce Luxury',price:692000000,promotion:47000000,pricetax:692,type:'car',seats:5},
    {name:'Xforce Ultimate',price:72000000,promotion:80000000,pricetax:657,type:'car',seats:5},
    {name:'Destinator Ultimate',price:855000000,promotion:35000000,pricetax:855,type:'car',seats:5},
    {name:'Destinator Premium',price:780000000,promotion:35000000,pricetax:780,type:'car',seats:5},
    {name:'Attrage Premium',price:490000000,promotion:43000000,pricetax:490,type:'car',seats:5},
    {name:'Attrage CVT',price:465000000,promotion:'',pricetax:490,type:'car',seats:5},
    {name:'Attrage MT',price:380000000,promotion:46000000,pricetax:370,type:'car',seats:5},
    {name:'Triton GLX',price:655000000,promotion:49000000,pricetax:924,type:'pickup',seats:5},
    {name:'Triton GLS',price:732000000,promotion:46000000,pricetax:782,type:'pickup',seats:5},
    {name:'Triton GLS 4x4',price:862000000,promotion:56000000,pricetax:924,type:'pickup',seats:5}
]
const provinces=["Hà Nội","Huế","Quảng Ninh","Cao Bằng","Lạng Sơn","Lai Châu","Điện Biên","Sơn La","Thanh Hóa",
    "Nghệ An","Hà Tĩnh","Tuyên Quang","Lào Cai","Hồ Chí Minh","Thái Nguyên","Bắc Ninh",
    "Hải Phòng","Cà Mau","An Giang"]
export default function ControlledInput({table,setTables}){
    const [namecars,setNamecars]=useState({
        name:'',
        province:'',
        transportation:'false'
    })
  
    
    const handleChange=(e)=>{setNamecars({...namecars,
        [e.target.name]: e.target.value})}
    const handleSubmit=(e)=>{
        e.preventDefault()
    if(!namecars.name||!namecars.province){
        var a="Vui Lòng nhập đủ thông tin"}
    else if(namecars.name&&namecars.province){
        setTables(c=>({...c,inspectionfee : 140000}))
    if(namecars.province==="Hà Nội"||namecars.province==="Hồ Chí Minh"){
        setTables(c=>({...c,licensefee:14000000}))
        Xpanders.map((x,y)=>{if(namecars.name===x.name){
            setTables(c=>({...c,tax:x.pricetax*120000}))
        }})
        Xpanders.map((x,y)=>{if(namecars.transportation){
            setTables(c=>({...c,maintainroad:180000}))
        if(x.seats<6){
            setTables(c=>({...c,LiabilityInsurance:831600}))
        }
        else if(x.seats>6){
            setTables(c=>({...c,LiabilityInsurance:1188000}))
        }
        }})
    }
    }

    }
    
    return (
            <div>
        <br></br>
        <form onSubmit={handleSubmit}>
            <select name='name' onChange={handleChange}>
            <option value='' >Chọn tên xe</option>
                {Xpanders.map(option=>(
                    <option >{option.name}</option>
                ))}
            </select>
            <br></br>
            <br></br>
            
       <select name='province'  onChange={handleChange}>
        <option value='' >Nhập tên tỉnh</option>
       {provinces.map((province,index)=>(
            <option key={index}>{province}</option>
       ))}
       </select>
       <br></br>
       <label name='trasportation'>Xe kinh doanh vận tải</label><input name='trasportation' type="checkbox" onChange={handleChange}/>
       <br></br>
       <button type='submit'>Bảng giá</button>
        </form>
<h1>Giá lăn bánh của xe</h1>{}        
        </div>)

    
    }