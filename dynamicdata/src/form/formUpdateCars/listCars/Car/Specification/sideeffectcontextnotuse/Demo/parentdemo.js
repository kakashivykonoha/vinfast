import { useState} from "react"

export default function Parent(){

    const [Parent,setParent]=useState({name:'',description:''})//cái này để set mô tả và tên
    const [listParent,setListParent]=useState([])
    const [Error,setError]=useState(null)
/* const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
      }})
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork }; 
console.log(nextPerson)
*/

//cái này set list của Lebel,name
   
const handleChange=(e)=>{setParent({...Parent,[e.target.name]:e.target.value}) }




    

var handleAdd=(e)=>{
    e.preventDefault();
        if(!Parent.name&&!Parent.description) return
   const newParent={id:Date.now(),...Parent}
const setting={
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(Parent)}
    const sendTitle=async()=> {try {const res= await fetch('http://localhost:8000/api/product/title/1',setting)
if(!res.ok) throw new Error("Gửi dữ liệu thất bại");
const data=await res.json()
console.log(data)
console.log("Gửi data thành công")
}
catch(err){setError(err.message)}}
sendTitle()
 /* fetch('http://localhost:8000/api/product/title/1',{method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(Parent)}).then(()=>{
            console.log('add thành công thông số')}).catch(err=>setError(err.message)) */
setListParent([...listParent,newParent])
setParent({name:'',description:''})
}        
 

/*  */
/* sendTitle() */

 
 console.log(listParent)

const handleDelete=(x)=>{
    setListParent(listParent.filter((note)=>note.id!==x))
    //nên chọn là id vì chọn name nếu có 2 cái trùng sẽ bị xóa
}


return(

<div className='parent'>
        {Error}
<h1>Nhập tiêu đề thông số kỹ thuật</h1>
<form method="POST">
  <input name='description' value={Parent.description} placeholder="tên tiêu đề tiếng việt" onChange={handleChange}/>
  <input name='name' value={Parent.name} placeholder="tieng anh khong dau" onChange={handleChange}/>
  <button type='submit' method='post' onClick={handleAdd}>Thêm tiêu đề thông số</button>
  </form>
  {listParent.map((item,index)=>(<><h2>{item.description}/{item.name}</h2>
<button type='button' onClick={()=>handleDelete(item.id)}>Delete</button>
</>  ))}
</div>
)}
