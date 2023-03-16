const userdb=require("../model/model");

// for the creation
    exports.create = (req,res)=>{

    // validate request
    if(!req.body){
       res.status(400).send({ message : "Content can not be emtpy!"});
    return;
    }

    // new user
    const user = new userdb({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status : req.body.status
    })

    // save user in the database
    user.save()
        .then((data) => {
            res.render('add_user')
            

})
.catch(err=>{
    res.status(400).send({
        message:err.message || "some error created while creating an operation"
    })
})
}


exports.find=(req,res)=>{
    if(req.params.id){
        const id=req.params.id;
        userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(400).send({message: `Cannot update with id ${id}. Maybe id is wrong`})
            }else{
                res.json(data)
            }

        })
    .catch(error=>{res.send({message:"the might have been error in retriving an error" }) })

    }
    else{
        userdb.find()
        .then(user=>{
            res.send(user)
        })
        .catch(error=>{
            res.status(400).send({message:"the have been an error"})
        })
    }

    
}

exports.update=(req,res)=>{
    if(!req.body){
   return res.status(400).send({message:"the page cannot be empty"})
    }
    const id=req.params.id;
    userdb.findByIdAndUpdate(id,req.body,{ useFindAndModify: false})
    .then(data=>{
        if(!data){
     res.status(400).send({message:"the page cannot be empty of the data"})
        }else{
            
             res.redirect('add_user')
        }
    })
    .catch(error=>{
        res.send({
            message :"the have been an error"
        })
    })
    
    
}

exports.delete=(req,res)=>{
    const id=req.params.id;
    userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:"there cannot be empty space to be deleted"})
        }
        else{
            res.redirect('/',)
        }
    })
    .catch(error=>{
        res.status(400).send({message:"the have been an error"})
    })
    
}
