const mysql = require("mysql2"); 
 
 var connection=mysql.createConnection({
    host:"127.0.0.1",
    user:'root',
    password:"661995Hai@",
    database:'vinfast'
})
connection.connect((err) => {
    if (err) {
        console.log("Lỗi kết nối database:", err);
        return;
    }

    console.log("Kết nối MySQL thành công");
});
module.exports = connection;