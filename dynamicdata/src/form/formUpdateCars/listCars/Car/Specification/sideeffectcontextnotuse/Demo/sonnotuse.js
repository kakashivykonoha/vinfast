import { useState} from "react"
import SonDescription from "../sondescription"
export default function Comfort({Parent}){
    /* const [Name,setName]=useState({SonDescription}})cái này để set mô tả và tên */
    const [sizeweight,setsizeweight]=useState()
    const [newtask,setTask]=useState([])//cái này set list của Lebel,name
    const handleChange=(e)=>{setName({...Name,[e.target.name]:e.target.value})}
    const handleChangeSpec=(e)=>{setsizeweight({...sizeweight,[e.target.name]:e.target.value});

}

const combine=()=> setlistspecs({...listspecs,...sizeweight})

var handleAdd=()=>{
   const newName={id:Date.now(),...Name}
    setTask([...newtask,newName])}
const handleDelete=(x)=>{
    setTask(newtask.filter((note)=>note.id!==x))}
    //nên chọn là id vì chọn name nếu có 2 cái trùng sẽ bị xóa
 


return(
<div>
       
        
  <h2>Nhập thông tin</h2>
  <input name='label' placeholder="tên thông số" onChange={handleChange}></input>
  <input name='name'placeholder="name không dấu viết liền" onChange={handleChange}></input>
  <button type='button' onClick={handleAdd}>Thêm</button>
{newtask.map((item,index)=>(<><p>{item.label} / {item.name}</p><input onChange={handleChangeSpec} onBlur={combine}   name={item.name.toLowerCase().replace(/\s+/g, '')}></input>
<button type='button' onClick={()=>handleDelete(item.id)}>Delete</button></>))}

</div>)
}