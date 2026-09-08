import { EmblaCarousel } from "./carouselhome";

const { useState,useEffect } = require("react");
export default function Home(){
const [carList,setcarList]=useState([])
const [Error,setError]=useState('')


useEffect(()=>{
//try catch để block error
 const fetchCarsintro = async()=> {try {
const res= await fetch('http://localhost:8000/api/products');
console.log(res)
if(!res.ok ) throw new Error ("Không có dữ liệu trả về")
const data=await res.json()
console.log(data)
setcarList(data)
} 
catch(err){setError(err.message)}
 
 }
 
fetchCarsintro()
},[])
return(<div >

<EmblaCarousel/>
    </div>)}