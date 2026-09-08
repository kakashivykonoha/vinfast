/* import { useState,useEffect,useRef } from "react";


const Banks=[
    {name:'Ngân hàng Techcombank',promotioninteres:8.2},
    {name:'Shinhah cố định 1 năm',promotioninteres:9.7},
    {name:'Shinhah cố định 2 năm',promotioninteres:9.9},
    {name:'Tp bank Tiên Phong Bank',promotioninteres:8},
    {name:'VP bank',promotioninteres:8.7},
]

 var Percents=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8] 
 var years= [2,3,4,5,6,7,8]

 export default function InterestCalculator(){
const [loaninput,setloaninput]=useState({
        bank:'',
        namecars:'',
        yearnumber:'', 
        percents:'',
        interes1:'',
        interes2:''
})


var now = new Date();
const day = now.getDate();
let month = now.getMonth()+1
const year = now.getFullYear()
const handleAdd1=(c)=>{c+=0.1;
return c=Math.round(c*100)/100
}


const handleAdd2=()=>console.log('')
const handleSubtract1=(c)=>{c-=0.1;
    return c=Math.round(c*100)/100
}



const handleSubtract2=()=>console.log('')


const handleChange=(e)=>{setloaninput({...loaninput,
        [e.target.name]: e.target.value});
        console.log(loaninput)
var namecar=document.getElementById('namecars').value
var Percent=document.getElementsByName('percents')

for(var i=0;i<Percent.length;i++){
    if(Percent[i].checked){
    setLoanAmount(Price*Percent[i].value)
    }
}
if(namecar){
var a=Xpanders.filter(i=>i.name===namecar)
 //https://www.geeksforgeeks.org/javascript/how-to-access-array-of-objects-in-javascript/
setPrice(a[0].price)}
var bank=document.getElementById('banks').value
if(bank){
var chosenbank=Banks.filter(x=>x.name===bank)
let valinteres1=interes1Ref.current.value=chosenbank[0].promotioninteres;
let valinteres2=document.getElementById('valueinteres2').value=chosenbank[0].promotioninteres;

}

}
console.log(loaninput.interes1)

const handleSubmit=(e)=>{
    e.preventDefault()
    if(loaninput.bank&&loaninput.name&&loaninput.yearnumber&&loaninput.percents){
        const days={Day: function (){for(let i=month;i<=(loaninput.yearnumber)*12;i++){
            var c= new Date(now.setMonth(i));
    days.Day()    
        }}}
        }}





        return(
    <div>
<form  onSubmit={handleSubmit}>
      <select id='banks' name='bank'  onChange={handleChange}>
            <option  value='' >Ngân hàng</option>
                {Banks.map(option=>(
                    <option  value={option.name}>{option.name}</option>
   
     ))}
            </select>
      <select id='namecars' name='namecars' onChange={handleChange}>
            <option value='' >Chọn tên xe</option>
                {Xpanders.map((option,index)=>(
                    <option >{option.name}</option>
                ))}
            </select>
        <select name='yearnumber' onChange={handleChange} >
        <option value='' >Nhập số năm vay</option>
       {years.map((year,index)=>(
            <option key={index} value={year}>{year} năm</option>
       ))}
       </select>
       
                   <br></br>
                   <br></br>
       <h2>Giá xe: {Price}</h2>
       <h2>Số tiền dự kiến vay {Loan}</h2>
                   
            <p>Chọn phần trăm vay:</p>
            {Percents.map((x,y)=>(<div>
              <label for='percent'>{x*100} %</label> 
                <input id='percents' onChange={handleChange} type='radio' name='percents' value={x} />
                </div>
                ))}
              <br></br>
 <p>Lãi suất cố định</p>
 <div className="interes1">
 <button onClick={handleAdd1}>+</button>  < input ref={interes1Ref} name='interes1'  id='valueinteres1' onChange={handleChange}></input><button onClick={()=>handleSubtract1} >-</button>
 </div> 
 
 <p>Lãi suất thả nổi</p>
<div className="interes2">
 
 <button onClick={handleAdd2}>+</button>    <input name='interes2'   id="valueinteres2" onChange={handleChange}></input><button onClick={handleSubtract2}>-</button>
</div>
<br></br>
 <br></br>
 {day}/{month}/{year}
 <br></br>
              <br></br>
              <br></br>
              <button type='submit'>Bảng giá</button>
        </form>
               
    </div>
)} */