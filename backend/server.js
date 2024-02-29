const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const port=3000;
const salt=10;
const bcrypt=require('bcrypt')
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Manish@123",
    database:"JobPortal"
})

db.connect((err)=>{
    if(err)
        throw err;
    console.log("Connected");
})

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})


