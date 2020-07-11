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
    "category3": "Big Ass Arrow",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497007/Screen_Shot_2020-07-11_at_12.48.10_PM_b1urhy.png"

},
{
    "name": "Big Ass Arrow Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Big Ass Arrow",
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
    "category3": "No Comment",
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
{
    "name": "No Sleep Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Sleep",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500679/Screen_Shot_2020-07-11_at_1.50.07_PM_am0em6.png"

},
{
    "name": "No Sleep Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Sleep",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500680/Screen_Shot_2020-07-11_at_1.50.49_PM_nkuyvu.png"

},
{
    "name": "No Sleep Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Sleep",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500677/Screen_Shot_2020-07-11_at_1.46.15_PM_nxjrax.png"
},
{
    "name": "No Sleep Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Sleep",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500675/Screen_Shot_2020-07-11_at_1.47.07_PM_qhopaw.png"
},
{
    "name": "No Sleep Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "No Sleep",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500679/Screen_Shot_2020-07-11_at_1.47.37_PM_qhuxps.png"

},
{ 
    "name": "No Sleep Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "No Sleep",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500678/Screen_Shot_2020-07-11_at_1.48.04_PM_box7ee.png"

},
{
    "name": "No Sleep Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "No Sleep",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500679/Screen_Shot_2020-07-11_at_1.48.36_PM_qdghtp.png"

},
{
    "name": "No Sleep Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "No Sleep",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500677/Screen_Shot_2020-07-11_at_1.49.13_PM_uigvmj.png"

},
{
    "name": "This That Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "This That",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_1.58.48_PM_afgro9.png"

},
{
    "name": "This That Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "This That",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501511/Screen_Shot_2020-07-11_at_1.59.20_PM_qyixl1.png"

},
{
    "name": "This That Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "This That",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501510/Screen_Shot_2020-07-11_at_1.59.55_PM_f4tdij.png"
},
{
    "name": "This That Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "This That",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501509/Screen_Shot_2020-07-11_at_2.02.12_PM_h2xes0.png"
},
{
    "name": "This That Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "This That",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": " "

},
{ 
    "name": "This That Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "This That",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_2.02.49_PM_wnyfo8.png"

},
{
    "name": "This That Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "This That",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_2.03.31_PM_hoxfrp.png"

},
{
    "name": "This That Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "This That",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501513/Screen_Shot_2020-07-11_at_2.04.42_PM_zuijal.png"

},
{
    "name": "Sugar Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Sugar",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": " "

},
{
    "name": "Sugar Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Sugar",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": " "

},
{
    "name": "Sugar Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Sugar",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": " "
},
{
    "name": "Sugar Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Sugar",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": " "
},
{
    "name": "Sugar Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Sugar",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": " "

},
{ 
    "name": "Sugar Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Sugar",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": " "

},
{
    "name": "Sugar Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Sugar",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": " "

},
{
    "name": "Sugar Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Sugar",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": " "

},


{
    "name": "No Sleep Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Sleep",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": " "

},
{
    "name": "No Sleep Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Sleep",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": " "

},
{
    "name": "No Sleep Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Sleep",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": " "
},
{
    "name": "No Sleep Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Sleep",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": " "
},
{
    "name": "No Sleep Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "No Sleep",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": " "

},
{ 
    "name": "No Sleep Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "No Sleep",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": " "

},
{
    "name": "No Sleep Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "No Sleep",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": " "

},
{
    "name": "No Sleep Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "No Sleep",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": " "

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

