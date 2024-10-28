const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: { 
    type: String, 
  },
  price: { 
    type: Number, 
    min: [1,"Price is too low"],
  },
  discount: {
    type:Number,
    default:0,
  },
  category:{
    type:String,
    enum:["fiction","non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);


// let book1 = new Book({
//    title:"Gone Girl",
//    price:"399",
//    category:"comics",
// });

// book1
// .save()
// .then(res =>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// });

Book.findByIdAndUpdate("671cf055ab79f9f7104d063a", {price:-100},
  {runValidators:true})
  .then((res)=>{
    console.log(res);
  })
  .catch ((err)=>{
    console.log(err.errors.price.properties.message);
  });
