/* import { useState,useEffect,useRef } from "react";
import { Xpanders } from "../form/checkCar";

const Banks=[
    {name:'Ngân hàng Techcombank',promotioninteres:8.2},
    {name:'Shinhah cố định 1 năm',promotioninteres:9.7},
    {name:'Shinhah cố định 2 năm',promotioninteres:9.9},
    {name:'Tp bank Tiên Phong Bank',promotioninteres:8},
    {name:'VP bank',promotioninteres:8.7},
]

 var Percents=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8] 
 var years= [2,3,4,5,6,7,8]

 export default function InterestCalculator1(){
    const [loaninput,setloaninput]=useState({
        bank:'',
        interes1:'',
        interes2:''
})
function handleChange(e){
    setloaninput({
        bank:e.target.value,
        interes1:loaninput.promotioninteres

    })
}
const handleinteres=(e)=>setloaninput({
    bank:loaninput.bank,
    interes1:Banks[e].promotioninteres,
    interes2:Banks[e].promotioninteres} )

const handleAdd1=()=>setloaninput({
    ...loaninput,
    interes1:Math.round((loaninput.interes1+0.1)*100)/100
})
const handleAdd2=()=>setloaninput({
    ...loaninput,
    interes2:Math.round((loaninput.interes2-0.1)*100)/100
})
const handleSubtract1=()=>setloaninput({
    ...loaninput,
    interes1:Math.round((loaninput.interes1-0.1)*100)/100
})
const handleSubtract2=()=>setloaninput({
    ...loaninput,
    interes2:Math.round((loaninput.interes2-0.1)*100)/100
}) */


/* const handlevalue=()=>setcount(()=>{for(let i=0;i<Banks.length;i++){
    if(Banks[i].name===loaninput.bank){
  return      Banks[i].promotioninteres==inputRef1==inputRef2
    }
}} 

var chosenbank=Banks.filter(x=>x.name===bank)*/

/* return(
    <div>

      <select id='banks' name='bank'  onChange={handleChange}>
            <option  value='' >Ngân hàng</option>
                {Banks.map((x,e)=>(
                    <option onClick={()=>handleinteres(e)}  value={x.name}>{x.name}</option>)
     
     )}
     </select>
 <p>Lãi suất cố định</p>
 <div className="interes1">
 <button onClick={handleAdd1}>+</button>  < input  name='interes1' value={loaninput.interes1}  id='valueinteres1'></input><button onClick={handleSubtract1} >-</button>
 </div> 
 
 <p>Lãi suất thả nổi</p>
<div className="interes2">
 
 <button onClick={handleAdd2}>+</button>    <input name='interes2'  value={loaninput.interes2} id="valueinteres2"></input><button onClick={handleSubtract2}>-</button>
</div>
<br></br>
 <br></br>
 
 <br></br>
              <br></br>
              <br></br>
 

               
    </div>
)} */