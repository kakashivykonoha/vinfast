import { Link } from "react-router-dom";
import {useState} from 'react'
export default function RegisterPage(){
const[user,setUser]=useState({email:'',name:'',password:''})
        const handlechangeName=(e)=>{setUser({email:e.target.value,name:user.name,password:user.password})};
        const handlechangeEmail=(e)=>{setUser({email:e.target.value,password:user.password})};
        const handlechangePassword=(e)=>{setUser({email:user.email,password:e.target.value})}    

const handleSubmit=()=>{}
return(

<div>
    <form method="post" onSubmit={handleSubmit}>
    <p>Trang đăng ký admin</p>
    <input type="name" name="name" placeholder="biet danh" onChange={handlechangeName}/><br></br><br></br>
    <input type="email" name="email" placeholder="youremail" onChange={handlechangeEmail}/><br></br><br></br>
    <input type="password" name="password" placeholder="mật khẩu" onChange={handlechangePassword}/><br></br><br></br>
    
    <button type="submit">Đăng ký</button><br></br>
    </form>
    <p>Đã có tài khoản <Link to="/login">Đăng nhập</Link></p>
</div>
)
}