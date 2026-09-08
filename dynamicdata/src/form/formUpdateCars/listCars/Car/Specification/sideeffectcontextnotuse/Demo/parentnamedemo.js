import { useState} from "react"
import SonDescription from "../sondescription"
import SonSpec from "../sonspec"
export default function Parent(){

    const [Parent,setParent]=useState({name:''})//cái này để set mô tả và tên
const [showDescription,setshowDescription]=useState(false)    

const handleChange=e=>{
          setParent({name:e.target.value.replace(/\s+/g,'')})
    }

const handleAdd=()=>{
        if(!Parent) return;
      setshowDescription(!showDescription)

    }
  
/* var handleAdd=()=>{
    if(!Parent) return
   const newParent={id:Date.now(),...Parent}
    setTask([...newtask,newParent])}
const handleDelete=(x)=>{
    setTask(newtask.filter((note)=>note.id!==x))
    //nên chọn là id vì chọn name nếu có 2 cái trùng sẽ bị xóa

} */


return(
<div className='parent'>
<h1>Nhập th</h1>
<input id='name' name='name'placeholder="name không dấu viết liền" onChange={handleChange}/> 
  {/* <input name='description' placeholder="tên tiêu đề tiếng việt" onChange={handleChange}/> */}
{!showDescription&&<button type='button' onClick={handleAdd}> thêm tiêu về</button>}

{/* ban đầu không có set parent bây h bắt buộc thêm set parent */}
{/* <SonDescription Parent={newParent}/> */}

</div>)
}