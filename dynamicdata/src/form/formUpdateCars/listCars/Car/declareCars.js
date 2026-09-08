import { useNavigate } from "react-router-dom";


const { useState } = require("react");
export default function DeclareCar (){
    const Navigate=useNavigate()
  const [card,setCard]=useState({namecar:'',version:'',price:''})
const handlechange=(e)=>setCard({...card,[e.target.name]:e.target.value})
console.log(card)
const handleSubmit= (e)=>{
e.preventDefault()
if(!card.namecar&&!card.price) return;
         
fetch('http://localhost:8000/api/product',{
    
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(card)}).then(()=>{
            console.log('post product success')
        }).catch(err=>console.log(err))
      Navigate('/dashboard')  
        window.location.reload()   
      
     
    }

 
return (<>

<form method='post' type='submit' className="form-addproduct" >
<p>Tên xe</p><input name='namecar' placeholder="tên xe" onChange={handlechange}></input>
<p>Phiên bản</p><input name='version' placeholder="phiên bản" onChange={handlechange}></input>
<p>Giá bán</p><input name='price' placeholder="giá bán" onChange={handlechange}></input>
<button type='submit' onClick={handleSubmit}>Thêm</button>
</form>

</>
)
}