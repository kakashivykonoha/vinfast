import { Link } from "react-router-dom";
import { useState } from "react"

export default function LoginForm(){
const [login,setLogin]=useState({
email:'',
password:''
});
        const handlechangeEmail=(e)=>{setLogin({email:e.target.value,password:login.password})};
        const handlechangePassword=(e)=>{setLogin({email:login.email,password:e.target.value})}    
console.log(login)
const handleSubmit=e=>{
    e.preventDefault();
/* try {
const res= await fetch('http://localhost:3000/',{
    method:'POST'.at
})
   headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // Kiểu dữ liệu gửi đi
        },
        body: new URLSearchParams(form).toString()
} */
}
        return(
<div>
    <form method="post" onSubmit={handleSubmit}>
    <p>Trang đăng nhập admin</p>
    <input type="email" name="email" placeholder="youremail" onChange={handlechangeEmail}/><br></br><br></br>
    <input type="password" name="password" placeholder="mật khẩu" onChange={handlechangePassword}/><br></br><br></br>
    <button type="submit">Đăng nhập</button><br></br>
    </form>
        <p>Chưa có tài khoản </p>
    <Link to="/register">Đăng ký</Link>    
</div>
    )
}