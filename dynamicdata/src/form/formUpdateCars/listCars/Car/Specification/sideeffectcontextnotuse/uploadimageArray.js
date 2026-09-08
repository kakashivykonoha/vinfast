

import { FaCloudUploadAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import { useState,useEffect } from "react"
function FileUploadArray({id}){
    const [listimg,setlistimg]=useState([])    
    const [file,setFile]=useState([])
        const [errSend,setErrorsend]=useState(null)

useEffect(()=>{
//try catch để block error
 const fetchImg = async()=> {try {
const res= await fetch(`http://localhost:8000/api/uploadlistproduct/${id}`);
if(!res.ok ) throw new Error ("Không có dữ liệu ảnh trả về")
const data=await res.json()
console.log(data)
setlistimg(data)
} 
catch(err){console.log(err)}
}
fetchImg()
},[])
        const handleFile=e=>{
            if(e.target.files){
            
            setFile([...file,e.target.files[0]])
}}
           // tạo new form data

    // Note: Use 'files[]' if your backend (like PHP) expects an array syntax


const handleUpload=(e)=>{
    e.preventDefault()
    setErrorsend(null)
const formdata = new FormData()
 // là 1 object
 file.forEach(item=>formdata.append('arraylist',item))
for (var pair of formdata.entries()){
    console.log(pair[0])
}
console.log(...formdata)
const sendListImage = async ()=>{try {const res= await fetch(`http://localhost:8000/api/uploadlistproduct/${id}`, {
             method: 'POST',
             body:formdata,
             enctype:"multipart/formdata"
        })
if(res.status=="404"){throw new Error("lỗi 404 không tìm thấy")}
if(res.status=="500"){throw new Error("máy chủ không xử lý yêu cầu")}
const data=await res.json()
console.log(data)
setFile([])
}
        catch(error){console.log(error.message)
            setErrorsend(error.message)
     }
    }
    
sendListImage()
 setTimeout(()=>window.location.reload(),2000) 
}
const handleDelete=(e)=>{
    setFile(file.filter(item=>item.lastModified!==e))
}
console.log(file)
return (<div>        
<p>File Upload List Photos</p>
<form method="post" >
<input type='file' name='arraylist' onChange={handleFile} />
 <button type='submit' onClick={handleUpload}>Submit</button>
</form>
<p>{errSend && <div>{errSend}</div>}</p>
<div>{file
? file.map(item=>
    <><img src={URL.createObjectURL(item)} alt="" style={{height: "150px",width:'250px',padding:'10px'}} /><button onClick={()=>handleDelete(item.lastModified)}><RiDeleteBin5Line/> </button></>)
    :<p></p>}
    </div>
{listimg.map(item=><img src={item.Link} alt="Ảnh xe" style={{height: "100px",width:'100px',padding:'10px'}}></img>)}
    </div>)

}
export default FileUploadArray