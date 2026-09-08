const connection=require('../connection/database')
const express=require('express')
const mysql=require('mysql2')
const router=express.Router()
const {Sequelize,DataTypes}=require('sequelize')
var cors = require('cors');
router.use(cors({origin:'http://localhost:3000'}))

router.use(express.json());
router.use(express.urlencoded({ extended: true }));




 router.post('/api/product',(req,res)=>{
    const productCars=req.body;
    const specs=Object.keys(productCars);
    
    const keyProducts=specs.map(spec=>spec+' '+'varchar(200)');
    const ColumnProducts=specs.map(spec=>'ADD COLUMN IF NOT EXISTS'+' '+spec+' '+'varchar(200)')

let table=`CREATE TABLE IF NOT EXISTS carsintro (id int(11) AUTO_INCREMENT primary key,${keyProducts.toString()})`;
connection.query(table,function(err){
if(err){console.log(err)} else {
  if(err){console.log(err)}else{
    let insertvalue=`INSERT INTO carsintro SET ?`;
connection.query(insertvalue,productCars,function(err,result){
  if(err){console.log(err)} else {
    console.log(' data insert');
  }})}}})}) 
  router.post('/api/product/title/specifilist',(req,res)=>{
    const specifilistSend=req.body;
    const specs=Object.keys(specifilistSend);
    
    

let table=`CREATE TABLE IF NOT EXISTS children_spec (id_children_spec int(11) AUTO_INCREMENT primary key,children_spec_depth int,description_eng varchar(200),description_vn varchar(200),children_specinfo varchar(200),id_parent int,id_product int)`;
connection.query(table,function(err){
if(err){console.log(err)} else {
  if(err){console.log(err)}else{
    let insertvalue=`INSERT INTO children_spec SET ?`;
connection.query(insertvalue,specifilistSend,function(err,result){
  if(err){console.log(err)} else {
    console.log(' data insert');
  }})}}})}) 


router.get('/api/products',(req,res)=>{
  connection.query(`select *from carsintro`,
    function(err,result){
      if(err){throw (err)}
    else{
      res.json(result)
    }
})
})
router.get('/api/products/title',(req,res)=>{
  const id=req.params.id
  connection.query(`select*from cartitlespec`,
    function(err,result,field){
      if(err) throw (err);
  
  console.log('Get API Parent success')
      res.json(result)
    })
})

 router.get('/api/products/title/specifilist/:id',(req,res)=>{
  const id=req.params.id
  connection.query(`select description_eng,children_spec_depth,description_vn,children_specinfo,id_children_spec,description_vn,id_parent from children_spec WHERE id_product=${id}`,
    function(err,result,field){
      if(err) throw (err);
  
  console.log(`${id} created children API success`)
      res.json(result)
    })
})
router.get('/api/products/title/specifilistunique',(req,res)=>{
connection.query(`select distinct description_eng,description_vn,id_parent from children_spec WHERE children_spec_depth=1`,
    function(err,result,field){
      if(err) throw (err);
  
  console.log(` created children API option unique `)
      res.json(result)
    })
})
router.get('/api/products/title/specifilistchild/:id',(req,res)=>{
  const id=req.params.id
  connection.query(`select description_eng,description_vn,id_children_spec,description_vn from children_spec WHERE (id_product=${id} AND  children_specinfo IS NULL)`,
    function(err,result,field){
      if(err) throw (err);
  
  console.log(`${id} created API grandchildren success`)
      res.json(result)
    })
}) 

router.put('/api/update/:id',(req,res)=>{
const id=req.params.id
const a=req.body;  
console.log(a)
let sql=`UPDATE carsintro SET ? WHERE id=${id}`
connection.query(sql,a,function(err){
  if (err) throw err;
  console.log(`product with ${id} updated`)
}) 
})

router.get('/api/products/:id',(req,res)=>{
  const id=req.params.id
  connection.query(`select*from carsintro WHERE id=${id}`,
    function(err,result,field){
      if(err) throw (err);
  
  console.log(`id ${id} created product ${result[0].namecar} ${result[0].version} API success`)
      res.json(result)
    })
})


/*
router.use(cors({origin:'http://localhost:3000'}))
const db = new Sequelize("vinfast","root","661995Hai@",{host:"127.0.0.1",dialect:"mysql"})
db.authenticate().then(
    console.log("Đã kết nối")
).catch(err=>console.log(err))


router.post('/api/product',(req,res)=>{
        const productCars=req.body;
    const specs=Object.keys(productCars);

db.define('carsintro', {
    id:{
  type: DataTypes.interger,
      allowNull:false,
    autoIncrement: true,
      primaryKey: true,
    },
    namecars: {
    
      type: DataTypes.STRING,
      allowNull:false
    },
    version: {
      type: DataTypes.STRING,
      allowNull:true},
      price: {
      type: DataTypes.STRING,
      allowNull:true}
}
)
db.sync()
}) */


module.exports=router