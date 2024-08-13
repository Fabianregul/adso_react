//1 - importamos modulo con require
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//2 - configuracion
const app = express();
app.use(express.json());
app.use(cors());

//3 - conexion
const conexion = mysql.createConnection({
    host: "localhost",
    database: "personas",
    user: "root",
    password: ""
});

//4 - rutas
app.post('/login',(req,res)=>{
    const db = "SELECT * FROM administradores WHERE email = ? AND contraseña = ?";
    conexion.query(db,[req.body.email, req.body.password],(err, data)=>{
        if(err) return res.json("error en el inicio de sesion");

        if(data.length > 0){
            return res.json("BIENVENIDO A LA PLATAFORMA")
        }else{
            return res.json("usuario incorrecto")
        }
    })
});

//5 - poner a escuchar al servidor
app.listen(8081,()=>{
    console.log("servidor escuchando...");
})