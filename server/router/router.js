const express=require("express");
const router=express.Router();
const services=require("../service/render.js");
const controllers=require("../controllers/controllers");
const { create } = require("../model/model.js");

// router.get('/',services.homeRoutes);
router.get('/add_user',services.add_user)  
router.get('/update_user',services.update_user);


router.post("/api/user",controllers.create);
router.get("/api/user/:id",controllers.find);
router.put("/api/user/:id",controllers.update);
router.delete("/api/user/:id",controllers.delete);

   module.exports=router
