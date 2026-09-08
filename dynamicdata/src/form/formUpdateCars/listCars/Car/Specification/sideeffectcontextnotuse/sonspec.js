import { useState} from "react"
export default function SonSpec(Description){
  const [Specficication,setSpecfication]=useState({name:'',description:'',info:''})
 const [ListSpecs,setListSpecs]=useState({specs:[]})


const handleChange=(e)=>{setSpecfication({...Specficication,[e.target.name]:e.target.value})
}

 console.log(Specficication)
 /*  const [Name,setName]=useState({label:'',name:''})//cái này để set mô tả và tên
    const [sizeweight,setsizeweight]=useState()
    cái này set list của Lebel,name
    const handleChange=(e)=>{setName({...Name,[e.target.name]:e.target.value})}
    const handleChangeSpec=(e)=>{setsizeweight({...sizeweight,[e.target.name]:e.target.value});

} 
 const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
      }})
const nextArtwork = { ...person.artwork, city: 'New Delhi' };
const nextPerson = { ...person, artwork: nextArtwork }; 
*/

/* const combine=()=> setlistspecs({...listspecs,...sizeweight}) */

/* var handleAdd=()=>{
   const newName={id:Date.now(),...Name}
    setTask([...newtask,newName])}
const handleDelete=(x)=>{}
    setTask(newtask.filter((note)=>note.id!==x))
    //nên chọn là id vì chọn name nếu có 2 cái trùng sẽ bị xóa
 
 */
const handleAdd=()=>{
   const newSpec={id:Date.now(),...Specficication}//đoạn này đúng rồi
   const preSpec=[...ListSpecs.specs,newSpec]
  /* const nextSpec={...ListSpecs,specs:[...newSpec,preSpec]} */
/* setListSpecs({nextSpec}) */
const nextSpec={...ListSpecs,specs:preSpec}
console.log(Specficication)
console.log(nextSpec)
setListSpecs(nextSpec)}
const handleDelete=(x)=>{
var a=ListSpecs.specs.filter((note)=>note.id!==x);
var deleSpec={...ListSpecs,specs:a}
setListSpecs(deleSpec)

}
console.log(ListSpecs)

return(
<div className='specification'>
       
        
  <h2>Thêm thông số</h2>
  <input name='name'  placeholder="viết tiếng anh không ký tự" onChange={handleChange}></input>
  <input name='description' placeholder="description" onChange={handleChange}></input>
  <input name='info' placeholder="info"onChange={handleChange}></input>
  
  <p><button type='button' >Add son</button>
  <button type='button'onClick={handleAdd}>Add grandson</button></p>
{ListSpecs.specs.map((item,index)=>(<><p>{item.description} / {item.name}:{item.info}</p>
<button type='button' onClick={()=>handleDelete(item.id)}>Delete</button></>))}
</div>)}


