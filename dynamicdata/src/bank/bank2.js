import { useState,useEffect,useRef } from "react";
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

export default function InterestCalculator2({loanoutput,setloanoutput}){
const [loaninput,setloaninput]=useState({
        bank:'',
        namecars:'',
        price:'',
        yearnumber:'', 
        percents:'',
        interes1:'',
        interes2:''
})
/* const [loanoutput,setloanoutput]=useState({listdates:[]}) */
const [Note,setNote]=useState([])
var now = new Date();
const day = now.getDate();
let month = now.getMonth()+1
const year = now.getFullYear()

const handleChangeBank=(e)=>{
    setloaninput({...loaninput,
        bank:e.target.value,
    })}
const handleInteres=(b)=>setloaninput({
    ...loaninput,
    interes1:Banks[b].promotioninteres,
    interes2:Banks[b].promotioninteres} )

const handleChangeCar=(e)=>{
    setloaninput({...loaninput,
        namecars:e.target.value
    })
}

const handlePrice=(d)=>{
    setloaninput({...loaninput,
price:Xpanders[d].price
    
})
}
const handleChangeYear=(e)=>{
    setloaninput({...loaninput,
        yearnumber:e.target.value
    })
}

const handleAdd1=()=>setloaninput({
    ...loaninput,
    interes1:Math.round((loaninput.interes1+0.1)*100)/100
})
const handleAdd2=()=>setloaninput({
    ...loaninput,
    interes2:Math.round((loaninput.interes2+0.1)*100)/100
})
//thu them ngoac xem co bi load lai khong
const handleSubtract1=()=>setloaninput({
    ...loaninput,
    interes1:Math.round((loaninput.interes1-0.1)*100)/100
})
const handleSubtract2=()=>setloaninput({
    ...loaninput,
    interes2:Math.round((loaninput.interes2-0.1)*100)/100
})
const handleChangeRatio=(f)=>setloaninput({
    ...loaninput,
    percents:Percents[f]
    
})
console.log(loaninput)
const handleSubmit=(e)=>{
    e.preventDefault()
    if(!loaninput.bank||!loaninput.namecars||!loaninput.yearnumber||!loaninput.percents) return;
    /* 
        for(let i=month;i<=(month+(loaninput.yearnumber)*12);i++){
var today1 = new Date()
today1=new Date(today1.setMonth(i))
console.log(today1)
        }
        for(i=0;i<=loaninput*12;i++){
} */
let loanoutput=loaninput
setloanoutput(loanoutput)
setloaninput({
        bank:'',
        namecars:'',
        price:'',
        yearnumber:'', 
        percents:'',
        interes1:'',
        interes2:''
})
}    
        var moneyloan=loaninput.price*loaninput.percents

     return(
    <div>
<form  onSubmit={handleSubmit}>
      <select id='banks' name='bank'  onChange={handleChangeBank} value={loaninput.bank}>
         <option  value='' >Ngân hàng</option>
                {Banks.map((a,b)=>(
                    <option onClick={()=>handleInteres(b)}  value={a.name}>{a.name}</option>
   
     ))}
            </select>
      <select id='namecars' name='namecars' onChange={handleChangeCar} value={loaninput.namecars}>
            <option value='' >Chọn tên xe</option>
                {Xpanders.map((c,d)=>(
                    <option onClick={()=>handlePrice(d)} >{c.name}</option>
                ))}
            </select>
        <select name='yearnumber' onChange={handleChangeYear} value={loaninput.yearnumber}>
        <option value='' >Nhập số năm vay</option>
       {years.map((year,index)=>(
            <option key={index} value={year}>{year} năm</option>
       ))}
       </select>
       
                   <br></br>
                   <br></br>
       <h2>Giá xe: {loaninput.price}</h2>
       <h2>Số tiền dự kiến vay   </h2>
            <h2>{moneyloan}</h2>       
            <p>Chọn phần trăm vay:</p>
            {Percents.map((e,f)=>(<div>
              <label for='percent'>{e*100} %</label> 
                <input id='percents' onClick={()=>handleChangeRatio(f)} type='radio' name='percents' value={e} />
                </div>
                ))}
              <br></br>
 <p>Lãi suất cố định</p>
 <div className="interes1">
 <button  type='button' onClick={handleAdd1}>+</button>  < input value={loaninput.interes1} name='interes1'  id='valueinteres1' ></input><button type='button' onClick={handleSubtract1} >-</button>
 {/* chọn kiểu button thì ko bị submit form */}
 </div> 
 
 <p>Lãi suất thả nổi</p>
<div className="interes2">
 
<button type='button' onClick={handleSubtract2}>-</button>     <input value={loaninput.interes2}  name='interes2'   id="valueinteres2" ></input><button type='button' onClick={handleAdd2}>+</button>
</div>
<br></br>
 <br></br>
 {day}/{month}/{year}
 <br></br>
              <br></br>
              <br></br>
              <button type='submit'>Bảng giá</button>
        </form>
{Note}
    </div>
)}