import { useState } from "react";

export const Tableloan=({output})=>{
if(output){
let month=(new Date()).getMonth()
const numbers=Array.from({length:output.yearnumber*12},(_,i)=>i+1)
let timeline =numbers.map((m,n)=>(`${new Date((new Date()).setMonth(m+month)).getDate()}/${new Date((new Date()).setMonth(m+month)).getMonth()+1}/${new Date((new Date()).setMonth(m+month)).getFullYear()}`))
let amountloan=output.percents*output.price
let principaldebtpermonth=Math.round((amountloan)/(output.yearnumber*12))
// let interestmonth=numbers.map((e,f)=>{if(e=1){<li>amountloan*output.interes1</li>}}) /* else if(e>1&&e<=12){(amountloan*output-amountloan/(output.yearnumber*12))} */ 
var objecttableloan=numbers.map((number,index)=>{
var tempObject={}
tempObject.id=number;
tempObject.Restamountloan=amountloan-principaldebtpermonth*index;
tempObject.Paymentpermonth=index===0?Math.round(amountloan*output.interes1/12/100)+principaldebtpermonth:index>0&&index<=11?Math.round(tempObject.Restamountloan*output.interes1/12/100+principaldebtpermonth):Math.round(tempObject.Restamountloan*output.interes2/12/100+principaldebtpermonth)
/* 
const handleSubmit=(e)=>{
    const >={title,body,author}
    fetch('http://localhost:3000/testproduct2',{
    method:'POST';
    headers:{'content-type':'application/json'},
    body:JSON.stringify(blog)
    }
    }

*/
return tempObject
})

return (<div>
    <h1>Dòng xe {output.namecars} thời gian vay {output.namecars} năm với số tiền là {amountloan.toLocaleString()} triệu đồng thời gian vay {output.yearnumber} năm</h1>
    <ul className="tableloan">
    <li><ul><li><h3 className="headerloan">Số thứ tự</h3></li>{numbers.map(x=><li>{x}</li>)}</ul></li>
    <li id='timeline'><ul><li><h3 className="headerloan">Ngày thanh toán</h3></li>{timeline.map((x) => <li> {x}</li>)}</ul></li>
    <li><ul><li><h3 className="headerloan">Số tiền còn lại</h3 ></li>{objecttableloan.map((x)=><li>{x.Restamountloan.toLocaleString()}</li>)}</ul></li>
    <li><ul><li><h3 className="headerloan">Số tiền trả hàng tháng</h3></li>{objecttableloan.map((x)=><li>{x.Paymentpermonth.toLocaleString()}</li>)}</ul></li>
    
    </ul>
    
</div>)
    
}}