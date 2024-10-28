const mongoose= require('mongoose');
 
main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=> console.log(err));
     
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User", userSchema);
// //insert (single..) data in database..
// const user2=new User({
//     name:"eve",
//     email:"eveh@yahoo.in",
//     age:22,
// });
// //to save that data..save method return promicess..
// user2.save()
// .then((res)=>{console.log(res);
// })
// .catch((err)=>{console.log(err);
// });


//insert multiple data..
// User.insertMany([
//     {name:"ghushh!",email:"ghushhhhh@gmail.com",age:11},
//     {name:"bhushh!",email:"bhushhhh@gmail.com",age:22}

// ]).then((res)=>{
//     console.log(res);
// });

// find oprations three methods..
//1.find()       2.findOne()           3.findByID()
// User.find({age:{$gt:20}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//UPDATE
//1. updateOne()       2. updateMany()
User.updateOne({ name:"bhushh!"},{age:32})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
    //find one and update
    User.findOneAndUpdate({name:"Adam"},{age:22})
    .then((res)=>{console.log(res);})
.catch((err)=>{console.log(err);});

//Delete 
// 1.  deleteOne()     2.    deleteMany()    
// 3.  model.findByIdAndDelete()     4.   model.findOneAndDelete()
// User.deleteOne({name:"Adam"}).then((res)=>{console.log(res);});
// User.deleteMany({age:32}).then((res)=>{console.log(res);});
User.findByIdAndUpdate("671a124d520d34ed6cb068cc").then((res)=>{console.log(res);});

