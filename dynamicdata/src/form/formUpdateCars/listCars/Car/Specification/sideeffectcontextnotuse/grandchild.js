


import { SpectitleContext } from "./parent"
import { useContext } from "react"
import { useEffect, useState} from "react"


export default function GrandChildren({id,Childrenspeclist}){
  const titleSpec=useContext(SpectitleContext)
  

    const [grandChildren,setGrandChildren]=useState({children_spec_depth:2,description_eng:'',description_vn:'',id_parent:'',children_specinfo:'',id_product:{id}.id})//cái này để set mô tả và tên
    const [listChildren,setListChildren]=useState([])
    const [Error,setError]=useState(null)

const speclisturl=`http://localhost:8000/api/products/title/specifilistchild/${id}`
useEffect(()=>{
//try catch để block error
 const fetchCarsintro = async()=> {try {
const res= await fetch(speclisturl);
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()

setListChildren(data)
} 
catch(err){setError(err.message)}
 
 }
 
fetchCarsintro()
    },[])

const handleChange=(e)=>{setGrandChildren({...grandChildren,[e.target.name]:e.target.value}) }


 

var handleAdd=(e)=>{
    e.preventDefault();
        if(!grandChildren.description_eng&&!grandChildren.description_vn&&!grandChildren.id_parent) return
  
 const setting={
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(grandChildren)}
    const sendTitle=async()=> {try {const res= await fetch('http://localhost:8000/api/product/title/specifilist',setting)
if(!res.ok) throw new Error("Gửi dữ liệu thất bại");
const data=await res.json()
console.log(data)
console.log("Gửi data thành công")
}
catch(err){setError(err.message)
  
}

}
sendTitle()

setGrandChildren({...GrandChildren,description_eng: "", description_vn: "",children_specinfo: ""})
 setTimeout(()=>window.location.reload(),3000)  //để trần nó chạy nhanh quá chưa kịp gửi data

}         
console.log(grandChildren)
const handleDelete=()=>{}
return(

<div className='Children'>
  
<h1>Nhập thông số cháu</h1>
<form method="POST">

  <input name='description_vn' value={grandChildren.description_vn}  placeholder="mô tả tiếng việt" onChange={handleChange}/>
  <input name='description_eng' value={grandChildren.description_eng}  placeholder="mô tả tiếng anh" onChange={handleChange}/>
  <input name='children_specinfo' value={grandChildren.children_specinfo}  placeholder="thông tin chỉ số" onChange={handleChange}/>
   <select style={{backgroundColor:'#FD59C2',color:'white'}} name='id_parent' onChange={handleChange}>
  <option >Loại thông số kỹ thuật cha</option>
       {listChildren.map((item,index)=>(
            <option key={index} value={item.id_children_spec}>{item.description_vn}</option>
       ))}
  </select> 
  <button type='submit' method='post' onClick={handleAdd} style={{color:"red",}}>Thêm loại thông số</button>
  </form>
  {Error}
  {Childrenspeclist.map((item,index)=>(item.children_spec_depth=="2"? <h6>{item.description_vn}/{item.description_eng} {item.children_specinfo} <button type='button' onClick={()=>handleDelete(item.id)}>Delete</button></h6>
:<></>
))} 

</div>
)}
