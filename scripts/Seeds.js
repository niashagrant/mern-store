const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-storedb";
mongoose.connect( MONGODB_URI);

const db=require("../models")

const products=[{

 
    "name": "FBC Men's T-Shirt",
    "price": 2400,
    "category1": "clothing",
    "category2": "men",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349433/Screen_Shot_2020-07-09_at_7.39.29_PM_isdnen.png"

},
{
   
    "name": "FBC Women's T-Shirt",
    "price": 2400,
    "category1": "clothing",
    "category2": "women",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349431/Screen_Shot_2020-07-09_at_7.42.39_PM_wew6k7.png"
},

{
   
    "name": "FBC Coffee Mug",
    "price": 1800,
    "category1": "accessories",
    "category2": "mug",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349431/Screen_Shot_2020-07-09_at_7.42.39_PM_wew6k7.png"

},
{
    
    "name": "FBC Tote",
    "price": 2500,
    "category1": "accessories",
    "category2": "bag",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349430/Screen_Shot_2020-07-09_at_7.44.15_PM_gfmju7.png"

},
{
   
    "name": "FBC Spiral Notebook",
    "price": 900,
    "category1": "accessories",
    "category2": "notebook",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349431/Screen_Shot_2020-07-09_at_7.45.28_PM_f4alss.png"

},
{
   
    "name": "FBC Zip Pouch",
    "price": 1400,
    "category1": "accessories",
    "category2": "zip pouch",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349433/Screen_Shot_2020-07-09_at_7.46.08_PM_s5aaor.png"

}
]

db.Products.create(products)
.then(res=>{
    console.log("meow")
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

