const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

//connection setup
main()
.then(() =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
//
//Data..
let allchats = [
    {
        from: "neha",
        to: "gita",
        msg: "Hii gita",
        created_at:new Date(),
    },
    {
        from: "nil",
        to: "sita",
        msg: "Hii sita!",
        created_at:new Date(),
    },
    {
        from: "ritu",
        to: "lax",
        msg: "Hii lax!!!!",
        created_at:new Date(),
    }
]

Chat.insertMany(allchats);
//
 