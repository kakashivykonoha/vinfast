import {useEffect, useState} from "react"
import { createContext,useContext} from "react"
import CarsProduct from "../../../../../../productFontend/frontendproduct"
import GrandChildren from "./grandchild"
import Children from "./children"
import ParentProduct from './contextside'
export const SpectitleContext=createContext()

export default function ParentSpecificationTitle({id}){

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
useEffect(()=>{
//try catch để block error
 const fetchCarsintro = async()=> {try {
const res= await fetch(`http://localhost:8000/api/products/title`);
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()
console.log(data)
setListParent(data)
} 
catch(err){setError(err.message)}
 
 }
 
fetchCarsintro()
    },[])

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

}        
 

/*  */
/* sendTitle() */


const handleDelete=(x)=>{
    setListParent(listParent.filter((note)=>note.id!==x))
    //nên chọn là id vì chọn name nếu có 2 cái trùng sẽ bị xóa
}


return(

<div className='parent'>

  <div >
        {Error}
<h1>Nhập tiêu đề thông số kỹ thuật</h1>
<form method="POST">
  <input name='description' value={Parent.description} placeholder="tên tiêu đề tiếng việt" onChange={handleChange}/>
  <input name='name' value={Parent.name} placeholder="tieng anh khong dau" onChange={handleChange}/>
  <button type='submit' method='post' onClick={handleAdd}>Thêm tiêu đề thông số</button>
  </form>
 {listParent .map((item,index)=>(<><h2>{item.description}/{item.name}</h2>
<button type='button' onClick={()=>handleDelete(item.id)}>Delete</button>
</>  ))} 
</div>
    <div>
<SpectitleContext.Provider value={listParent}>
    <Children id={id}/>
    
    
</SpectitleContext.Provider>
  </div>
</div>
)}
