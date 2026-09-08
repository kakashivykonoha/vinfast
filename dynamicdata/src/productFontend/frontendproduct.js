const { useState,useEffect } = require("react");
export default function CarsProduct(){
const [listParent,setListParent]=useState([])
const [Error,setError]=useState(null)
const [Errorchild,setErrorchild]=useState(null)
 const [listChildren,setListChildren]=useState([])
        
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
   const speclisturl=`http://localhost:8000/api/products/title/specifilist/1` 
useEffect(()=>{
//try catch để block error
 const fetchCarsintro = async()=> {try {
const res= await fetch(speclisturl);
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()

setListChildren(data)
} 
catch(err){setErrorchild(err.message)}
 
 }
 
fetchCarsintro()},[])

console.log(listChildren)
return (
<div>

{listParent.map((parent)=><div><h4 className='title-product'>{parent.description}/{parent.name}</h4>
{listChildren.filter((child)=>child.children_spec_depth===1&&child.id_parent===parent.id_specif).map(children=><div className="children"><h3 className="Titlechildren">{children.description_vn}</h3>{
children.children_specinfo===null?listChildren.filter(grandchilds=>grandchilds.children_spec_depth===2&&grandchilds.id_parent===children.id_children_spec).map(grandchild=><div className="grandchild"><h3 className="titlegrandchild">{grandchild.description_vn}</h3><h3 className="info_grandchild">{grandchild.children_specinfo}</h3></div>):
<h3 className="info_children">{children.children_specinfo}</h3>}



</div>)}
</div>)}
    
    </div>)}
    /* {listChildren.filter(item =>item.children_specinfo===null).map(item=><h1>{item.description_vn}</h1>)} */