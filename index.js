const express=require("express");
const dotenv=require("dotenv");
dotenv.config();
// const ejs = require("ejs")
const Mongoose=require('mongoose')
const Userdb= require('../crude/server/model/model');

Mongoose.set('strictQuery',true)
Mongoose.connect('mongodb://127.0.0.1:27017/api')
.then(()=>console.log('connected to db successfully'))
.catch(err=>console.log('error connecting to fb :',err.message))
const { render } = require("ejs");
const path=require("path");
const morgan=require("morgan")
const app=express();
app.set("view engine","ejs")

const bodyparser=require("body-parser");
const { default: mongoose } = require("mongoose");
// const connectDB=require('./server/database/connection')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());
// app.get('/index',(req,res)=>{
// res.render("index")})
app.use('/',require('./server/router/router.js'))
app.use(morgan('tiny'));
// connectDB();
app.set("view engine","ejs")
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.get("/",(req,res)=>{
    Userdb.find()

    .then((result)=>    res.render("index",{title:"This is the data in the database",datas:result})
)
.catch((err)=>console.log(err))
 })
 

 app.get('/update_user/:id', (req, res) => {
     const id = req.params.id
     Userdb.findById(id)
     .then((result) => {
         res.render('update_user', {user: result})
     })
     .catch(err => console.log(err))
 })

 app.post('/api/user/:id', (req, res) => {
     const id = req.params.id
     const updates = req.body
     Userdb.findByIdAndUpdate(id, {$set: updates })
     .then((result) => {
         res.redirect('/')
     })
     .catch(err => console.log(err))

 })
 app.delete('/delete/:id', (req, res)=>{
     const id=req.params.id;
     Userdb.findByIdAndDelete(id)
     .then((result)=>{
         res.json({redirect: '/'});
     })
     .catch(err => console.log(err))
 })
 const PORT= process.env.PORT || 8000
 app.listen(PORT,()=>{
     console.log(`server is running at http:\\localhost ${PORT}`)
 })
 