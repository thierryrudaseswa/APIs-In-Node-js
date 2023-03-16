// const mongoose= require("mongoose");
// const connectDB= async()=>{
//     try{
//         const con = await mongoose(process.env.MONGO_URL,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true,
//         });
//         console.log(`Mongo DBconnected:${con.connection.host}`)

//     }catch(error){
//         console.log('error thierry try again ');
//         process.exit(1);


//     }
// }
// module.exports=  connectDB;