import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { createContext,useContext} from "react"// tạo useContext này để sài
import { SpectitleContext } from "./parent"


import { useEffect, useState} from "react"
import GrandChildren from "./grandchild"



export default function Children({id}){
  const titleSpec=useContext(SpectitleContext)

    const [Children,setChildren]=useState({children_spec_depth:1,description_eng:'',description_vn:'',id_parent:'',children_specinfo:null,id_product:{id}.id})//cái này để set mô tả và tên
    const [listChildren,setListChildren]=useState([])
    const [uniquechildren,setUniquechildren]=useState([])
    const [Error,setError]=useState(null)
const [shownewspec,setShownewspec]=useState(true)
const speclisturl=`http://localhost:8000/api/products/title/specifilist/${id}`
useEffect(()=>{
//try catch để block error
const fetchCarsintro = async()=> {try {
const res= await fetch(speclisturl);
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()
console.log(data)
setListChildren(data)
} 
catch(err){setError(err.message)}
 
 }
 
fetchCarsintro()
    },[])
//đi lấy option childrent
useEffect(()=>{
//try catch để block error
const fetchListchildrenUnique = async()=> {try {
const res= await fetch("http://localhost:8000/api/products/title/specifilistunique");
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()
console.log(data)
setUniquechildren(data)
} 
catch(err){console.log(err)}
 
 }
 
fetchListchildrenUnique()
    },[])

const handleChange=(e)=>{setChildren({...Children,[e.target.name]:e.target.value}) }


console.log(Children)   

var handleAdd=(e)=>{
    e.preventDefault();
        if(!Children.description_eng&&!Children.description_vn&&!Children.id_parent) return
  
 const setting={
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(Children)}
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

setChildren({description_eng: "", description_vn: "",children_specinfo: ""})
 setTimeout(()=>window.location.reload(),2000) //để trần nó chạy nhanh quá chưa kịp gửi data

} 
const handle=(i)=>{setChildren({...Children,description_eng:uniquechildren[i].description_eng,id_parent:uniquechildren[i].id_parent})}        
const addNew=()=>{setShownewspec(!shownewspec)}
console.log(shownewspec)
const handleDelete=()=>{}
return(

<div className='Children'>
<button onClick={addNew} style={{borderRadius:"10px",padding:"5px"}}>Thêm mới thông số</button>  
<h1>Nhập thông số con</h1>
{shownewspec?<div>
<form>
  <select name='description_vn' onChange={handleChange}>
    <option>--Chọn thông số--</option>
      {uniquechildren.map((item,index)=><>
     <option value={item.description_vn} onClick={()=>handle(index)}>{item.description_vn}</option></>
    )}
  
  
  </select>
  <p>{Children.description_eng}</p>
  <input style={{minWidth: "300px",width: "25%"}} name='children_specinfo' placeholder="nhập thông số viết hoa chữ cái đầu" onChange={handleChange}></input>
</form>
<button type='submit' method='post' onClick={handleAdd} style={{color:"red",}}>Thêm loại thông số</button>
</div>
  :
<form method="POST">

  <input name='description_vn' value={Children.description_vn}  placeholder="mô tả tiếng việt" onChange={handleChange}/>
  <input name='description_eng' value={Children.description_eng}  placeholder="mô tả tiếng anh" onChange={handleChange}/>
  <input name='children_specinfo' value={Children.children_specinfo}  placeholder="thông tin chỉ số" onChange={handleChange}/>
  <select style={{backgroundColor:'#FD59C2',color:'white'}} name='id_parent' onChange={handleChange}>
  <option >Loại thông số kỹ thuật</option>
       {titleSpec.map((item,index)=>(
            <option key={index} value={item.id_specif} >{item.name}</option>
       ))}
  </select>
  <button type='submit' method='post' onClick={handleAdd} style={{color:"red",}}>Thêm loại thông số</button>
  </form>}
  {listChildren.map((item,index)=>(item.children_spec_depth=="1"?<h5>{item.description_vn}/{item.description_eng}:{item.children_specinfo}   <button type='button' onClick={()=>handleDelete(item.id)}><MdDelete /></button><button><MdModeEditOutline/></button></h5>
:<></>
  )  )} 
<GrandChildren Childrenspeclist={listChildren} id={id}/>


</div>
)}
