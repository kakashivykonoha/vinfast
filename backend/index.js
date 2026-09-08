const express=require('express');
const mysql=require('mysql2')
const bodyParser=require('body-parser')
var cors=require('cors')

const port =8000
const app=express()
 const upload=require(__dirname+"/upload/upload.js")
 const product=require(__dirname+"/product/product.js") 
app.use(bodyParser.urlencoded(true))
app.use(bodyParser.json())
app.use(upload)
app.use(product)
app.use(cors())
app.use(cors({origin:'http://localhost:3000'}))
//chỉ sử dụng cors ở đây thôi

//không đọc được khả năng nhiều do cái body parse này
// Middleware to parse URL-encoded bodies (from HTML forms)

 

/* 
Simple Usage
var express=require('express')
var cors=require('cors')
var app=express()
//adds headers Access control allow origin
varr corsOptions-

*/
/* app.use('/api/addproduct:id',RouterPath) */
// đây là upload file


//tới tận đây luôn

/* app.post('/api/product',(req,res)=>{
    const productCars=req.body;
    const specs=Object.keys(productCars);
    
    const keyProducts=specs.map(spec=>spec+' '+'varchar(200)');
    const ColumnProducts=specs.map(spec=>'ADD COLUMN IF NOT EXISTS'+' '+spec+' '+'varchar(200)')

let table=`CREATE TABLE IF NOT EXISTS carsinfo (id int(11) AUTO_INCREMENT primary key,${keyProducts.toString()})`;
connection.query(table,function(err){
if(err){console.log(err)} else {
  if(err){console.log(err)}else{
    let insertvalue=`INSERT INTO carsinfo SET ?`;
connection.query(insertvalue,productCars,function(err,result){
  if(err){console.log(err)} else {
    console.log(' data insert');
  }})}}})}) */
app.listen(port,function(){
  console.log('web server listening on port 8000')
})