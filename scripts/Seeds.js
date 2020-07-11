const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-storedb";
mongoose.connect( MONGODB_URI);

const db=require("../models")

const products=[
{
    "name": "QWC Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "QWC",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485953/Screen_Shot_2020-07-11_at_9.31.54_AM_qssase.png"

},
{
    "name": "QWC Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "QWC",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485960/Screen_Shot_2020-07-11_at_9.34.28_AM_vxknfv.png"

},
{
    "name": "QWC Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "QWC",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485953/Screen_Shot_2020-07-11_at_9.37.11_AM_wvvvgd.png"
},
{
    "name": "QWC Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "QWC",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485962/Screen_Shot_2020-07-11_at_9.38.49_AM_gn7btv.png"
},
{
    "name": "QWC Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "QWC",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485954/Screen_Shot_2020-07-11_at_9.41.16_AM_uronry.png"

},
{ 
    "name": "QWC Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "QWC",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485957/Screen_Shot_2020-07-11_at_9.41.42_AM_fttqpw.png"

},
{
    "name": "QWC Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "QWC",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485957/Screen_Shot_2020-07-11_at_9.42.17_AM_diuuut.png"

},
{
    "name": "QWC Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "QWC",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485961/Screen_Shot_2020-07-11_at_9.42.55_AM_pf2fpt.png"

},
{
    "name": "Big Ass Arrow Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Big Ass Arrow",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497007/Screen_Shot_2020-07-11_at_12.46.11_PM_birhxe.png"

},
{
    "name": "Big Ass Arrow Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Big Ass Arrow",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497011/Screen_Shot_2020-07-11_at_12.45.01_PM_hzilze.png"

},
{
    "name": "Big Ass Arrow Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Big Ass Arrow",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497006/Screen_Shot_2020-07-11_at_12.44.36_PM_ccchox.png"
},
{
    "name": "Big Ass Arrow Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Big Ass Arrow",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497010/Screen_Shot_2020-07-11_at_12.46.56_PM_hvfkw6.png"
},
{
    "name": "Big Ass Arrow Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Big Ass Arrow",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497008/Screen_Shot_2020-07-11_at_12.47.48_PM_qylvlz.png"

},
{ 
    "name": "Big Ass Arrow Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "QWC",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497007/Screen_Shot_2020-07-11_at_12.48.10_PM_b1urhy.png"

},
{
    "name": "Big Ass Arrow Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "QWC",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497010/Screen_Shot_2020-07-11_at_12.48.34_PM_varzqo.png"

},
{
    "name": "Big Ass Arrow Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Big Ass Arrow",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497011/Screen_Shot_2020-07-11_at_12.49.00_PM_n93nri.png"

},
{
    "name": "No Comment Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Comment",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499123/Screen_Shot_2020-07-11_at_1.23.11_PM_ubwwor.png"

},
{
    "name": "No Comment Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Comment",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499129/Screen_Shot_2020-07-11_at_1.23.41_PM_bmzyqi.png"

},
{
    "name": "No Comment Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Big Ass Arrow",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499124/Screen_Shot_2020-07-11_at_1.19.11_PM_nnsguu.png"
},
{
    "name": "No Comment Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Comment",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499127/Screen_Shot_2020-07-11_at_1.20.45_PM_zhgkd6.png"
},
{
    "name": "No Comment Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "No Comment",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499129/Screen_Shot_2020-07-11_at_1.21.17_PM_qynmhy.png"

},
{ 
    "name": "No Comment Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "No Comment",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499127/Screen_Shot_2020-07-11_at_1.21.40_PM_iw34ke.png"

},
{
    "name": "No Comment Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "No Comment",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499127/Screen_Shot_2020-07-11_at_1.22.05_PM_lnctxa.png"

},
{
    "name": "No Comment Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "No Comment",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499128/Screen_Shot_2020-07-11_at_1.22.29_PM_zkxlgx.png"

},



]

db.Products.create(products)
.then(res=>{
    console.log("meow")
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

