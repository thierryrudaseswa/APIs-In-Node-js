
const { response } = require("express");
const Userdb = require("../model/model");
const express= require("express")
const app= express()
const ejs= require("ejs")
app.set("view engine","ejs")

exports.homeRoutes = async (req, res) => {

    try {
        
         const user = await Userdb.find()
         if(user){
              return res.status(200).json(user);
              
  
     }
     } catch (err) {
        
         console.log(err.message);
     }
}




exports.add_user=(req,res)=>{
    res.render("add_user")
}
exports.update_user=(req,res)=>{
    res.render('add_user')
}



