import axios from "axios"
import { useRef, useState } from "react"
function FileUpload({id}){
        const [file,setFile]=useState('')
        const [url,seturl]=useState(null)
        const handleFile=(e)=>{setFile(e.target.files[0]);
        }    

console.log(file)

//cụm này ban đầu ở trong
const handleUpload=(e)=>{
    e.preventDefault()
    const fd=new FormData();
fd.append("avatarcar",file)
 const sendAvatar = async ()=>{try {const res= await fetch(`http://localhost:8000/api/uploadavatar/${id}`, {
             method: 'POST',
             body:fd } )
if(res.status=="404"){throw new Error("lỗi 404  tài nguyên gửi không tồn tại ")}
if(res.status=="500"){throw new Error("máy chủ không xử lý yêu cầu")}
const data=await res.json()
console.log(data)}
catch(error){console.log(error.message)}
}
sendAvatar()
 setTimeout(()=>window.location.reload(),2000)
}


return (<>        
<div>File Upload Avatar</div>
<form method="post" >
<input type='file' name='avatarcar' onChange={handleFile}/>
<button onClick={handleUpload}>Submit</button>
</form>
{file?
<img src={URL.createObjectURL(file)} alt="" style={{height: "150px",width:'250px',padding:'10px'}} />
:
<></>}
    </>
)
}
export default FileUpload