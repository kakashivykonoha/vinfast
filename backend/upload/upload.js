const express=require('express')
const connection=require(`../connection/database`)
const cloudinary = require('cloudinary').v2;
const router=express.Router()
const path=require('path')
const fs=require('fs')
var cors = require('cors');
router.use(cors({origin:'http://localhost:3000'}))
/* var nameImages=fs.readdirSync('./upload/images/', {withFileTypes: true})
.filter(item => !item.isDirectory())
.map(item => item.name) */
//trả về list file
var multer=require('multer')
router.use(express.json());

router.use(express.urlencoded({extended:true}))

//kiểm tra có 1 cái memoryStore không biết có phải lưu trên đám mấy ko
const storage=multer.diskStorage({destination:function(req,file,callback){
 var b= req.params.typephoto;
 if(file.fieldname==="arraylist"){callback(null,'./upload/images/')}else{callback(null,'./upload/avatars/')} },
  filename:function(req,file,callback){
        //đặt tên file null kiểu cú pháp cmnr
    callback(null,path.basename(file.originalname,path.extname(file.originalname))+'-'+Date.now()+path.extname(file.originalname))
    //nhiều thằng path.exname mình thế này thôi
    }
})
const upload=multer({storage})

console.log(storage.diskStorage)
/* chỗ này set đường dẫn và tên file */

cloudinary.config({
    cloud_name:'dfpgpcaso',
    api_key:'521425113497381',
    api_secret:'xvUtbtHED0wwn1LWftNmqPW_ZYA'
})

 router.post('/api/uploadavatar/:id',upload.single('avatarcar'),function(req,res){
  var a= req.file
   var id=req.params.id
 cloudinary.uploader.upload(
    `./upload/avatars/${a.filename}`,(err,result)=>{
      if(err){console.log(`up không thành công avatar ${err}`)}
      else {console.log(`up thanh công avatar`);
        var a = {avatar:result.url}
      let sql=`UPDATE carsintro SET ? WHERE id=${id}`;
connection.query(sql,a,function(err){
  if (err) throw err;
  console.log(`avartar with ${id} updated`)
}) 
      }
    }) 
  
})  
 router.post('/api/uploadlistproduct/:id',upload.array('arraylist'),(req,res)=>{
 var a= req.files
 var id=req.params.id
console.log(a)
 a.forEach((item)=>{
cloudinary.uploader.upload(
  `./upload/images/${item.filename}`,(err,result)=>{

    if(err){console.log('lỗi upload')}
    else {console.log(`up thanh cong ,${result.url}`);
      let insertvalue=`INSERT INTO arraylistphoto SET ?`;
      let object={id_product:id,description:'',feature:'',Link:result.url}
connection.query(insertvalue,object,function(err,result){
  if(err){console.log(err)} else {
    console.log(`upload success photo insert ${item.filename}`);}
  })
}})//kết thúc hàm each ở đây
})}) 
//bắt đầu tư đây Cloudinary
 /* async function main() {
  // Upload a remote image (a local file path works the same way)
  const result = await cloudinary.uploader.upload(

    './upload/images/vf5yellow-1787305802983.png',
    
    { public_id: 'quickstart-sample' }
  );
  console.log(`Uploaded: ${result.public_id}`);

  // Build a 400x400 auto-cropped URL with automatic format and quality
  const url = cloudinary.url(result.public_id, {
    width: 400,
    height: 400,
    crop: 'fill',
    gravity: 'auto',
    fetch_format: 'auto',
    quality: 'auto',
    secure: true
  });
  console.log(`Optimized URL: ${url}`);
}

main().catch((error) => {
  console.error(`Quick start failed: ${error.message}`);
  console.error('Check that CLOUDINARY_URL is set (Console > Settings > API Keys).');
  process.exitCode = 1;
}); */

 router.get('/api/uploadlistproduct/:id',(req,res)=>{
   var id=req.params.id
   connection.query(`select*from arraylistphoto WHERE id_product=${id}`,
    function(err,result){
      if(err){throw (err);
        console.log(err)
      }
  else{
      res.json(result)
      console.log(`get thanh cong API list ảnh`)
    }
})
})
//upload từng mẫu xe

module.exports=router
