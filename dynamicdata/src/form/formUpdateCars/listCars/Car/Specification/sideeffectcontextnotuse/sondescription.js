import { useState} from "react"
export default function SonDescription({Parent,setParent}){


const [Description,setDescrtiption]=useState({[Parent.name]:{description:''}})
const handleChange=(e)=>{
const nextDescription={...Description[[Parent.name]],description:e.target.value};
   const newDescription=({...Description,[Parent.name]:nextDescription})
   setDescrtiption(newDescription)

  }
console.log(Description)

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
//tạo 1 bảng thông số 
const handleCreate=()=>{}
return(
<div className="sondescription">
<h2>Mô tả</h2>
<input name="description" onChange={handleChange}></input>
<button onClick={handleCreate} style={{backgroundColor: "red",color:'while'}} >Create</button>

</div>)
}