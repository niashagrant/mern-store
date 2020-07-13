const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-storedb";
mongoose.connect( MONGODB_URI);

const db=require("../models")

const products=[
{
    "name": "Real Men Code Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Who Code",
    "description": "Real men wear pink...I mean code.",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all. featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594514548/Screen_Shot_2020-07-11_at_5.40.07_PM_aammvs.png"

},
{
    "name": "Real Men Code Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Who Code",
    "description": "Real men wear pink...I mean code.",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594514551/Screen_Shot_2020-07-11_at_5.40.26_PM_ijlahm.png"

},
{
    "name": "QWC Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Who Code",
    "description": "Hey girl, fork my heart because I am ready to commit.",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485953/Screen_Shot_2020-07-11_at_9.37.11_AM_wvvvgd.png"
},
{
    "name": "QWC Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Who Code",
    "description": "Hey girl, fork my heart because I am ready to commit.",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485962/Screen_Shot_2020-07-11_at_9.38.49_AM_gn7btv.png"
},
{
    "name": "QWC Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Who Code",
    "description": "Hey girl, fork my heart because I am ready to commit.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485954/Screen_Shot_2020-07-11_at_9.41.16_AM_uronry.png"

},
{
    "name": "Real Men Code Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Who Code",
    "description": "Real men wear pink...I mean code.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594514548/Screen_Shot_2020-07-11_at_5.40.58_PM_gqpevt.png"

},
{ 
    "name": "QWC Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Who Code",
    "description": "Hey girl, fork my heart because I am ready to commit.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485957/Screen_Shot_2020-07-11_at_9.41.42_AM_fttqpw.png"

},
{ 
    "name": "Real Men Code Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Who Code",
    "description": "Real men wear pink...I mean code.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594514546/Screen_Shot_2020-07-11_at_5.41.24_PM_osni81.png"

},
{
    "name": "QWC Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Who Code",
    "description": "Hey girl, fork my heart because I am ready to commit.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485957/Screen_Shot_2020-07-11_at_9.42.17_AM_diuuut.png"

},
{
    "name": "Real Men Code Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Who Code",
    "description": "Real men wear pink...I mean code.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594514548/Screen_Shot_2020-07-11_at_5.41.46_PM_lyylbw.png"

},
{
    "name": "QWC Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Who Code",
    "description": "Hey girl, fork my heart because I am ready to commit.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485961/Screen_Shot_2020-07-11_at_9.42.55_AM_pf2fpt.png"

},
{
    "name": "Real Men Code Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Who Code",
    "description": "Real men wear pink...I mean code.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594514549/Screen_Shot_2020-07-11_at_5.42.02_PM_cvzegf.png"

},
{
    "name": "Big Ass Arrow Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497007/Screen_Shot_2020-07-11_at_12.46.11_PM_birhxe.png"

},
{
    "name": "Big Ass Arrow Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497011/Screen_Shot_2020-07-11_at_12.45.01_PM_hzilze.png"

},
{
    "name": "Big Ass Arrow Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497006/Screen_Shot_2020-07-11_at_12.44.36_PM_ccchox.png"
},
{
    "name": "Big Ass Arrow Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497010/Screen_Shot_2020-07-11_at_12.46.56_PM_hvfkw6.png"
},
{
    "name": "Big Ass Arrow Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497008/Screen_Shot_2020-07-11_at_12.47.48_PM_qylvlz.png"

},
{ 
    "name": "Big Ass Arrow Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497007/Screen_Shot_2020-07-11_at_12.48.10_PM_b1urhy.png"

},
{
    "name": "Big Ass Arrow Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497010/Screen_Shot_2020-07-11_at_12.48.34_PM_varzqo.png"

},
{
    "name": "Big Ass Arrow Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Big Ass Arrow",
    "description": "What if I told you you can pass a function to a function?!",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594497011/Screen_Shot_2020-07-11_at_12.49.00_PM_n93nri.png"

},
{
    "name": "No Comment Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499123/Screen_Shot_2020-07-11_at_1.23.11_PM_ubwwor.png"

},
{
    "name": "No Comment Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499129/Screen_Shot_2020-07-11_at_1.23.41_PM_bmzyqi.png"

},
{
    "name": "No Comment Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499124/Screen_Shot_2020-07-11_at_1.19.11_PM_nnsguu.png"
},
{
    "name": "No Comment Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499127/Screen_Shot_2020-07-11_at_1.20.45_PM_zhgkd6.png"
},
{
    "name": "No Comment Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499129/Screen_Shot_2020-07-11_at_1.21.17_PM_qynmhy.png"

},
{ 
    "name": "No Comment Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499127/Screen_Shot_2020-07-11_at_1.21.40_PM_iw34ke.png"

},
{
    "name": "No Comment Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499127/Screen_Shot_2020-07-11_at_1.22.05_PM_lnctxa.png"

},
{
    "name": "No Comment Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "No Comment",
    "description": "Want to hear a joke?",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594499128/Screen_Shot_2020-07-11_at_1.22.29_PM_zkxlgx.png"

},
{
    "name": "No Sleep Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500679/Screen_Shot_2020-07-11_at_1.50.07_PM_am0em6.png"

},
{
    "name": "No Sleep Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500680/Screen_Shot_2020-07-11_at_1.50.49_PM_nkuyvu.png"

},
{
    "name": "No Sleep Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500677/Screen_Shot_2020-07-11_at_1.46.15_PM_nxjrax.png"
},
{
    "name": "No Sleep Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500675/Screen_Shot_2020-07-11_at_1.47.07_PM_qhopaw.png"
},
{
    "name": "No Sleep Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500679/Screen_Shot_2020-07-11_at_1.47.37_PM_qhuxps.png"

},
{ 
    "name": "No Sleep Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500678/Screen_Shot_2020-07-11_at_1.48.04_PM_box7ee.png"

},
{
    "name": "No Sleep Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500679/Screen_Shot_2020-07-11_at_1.48.36_PM_qdghtp.png"

},
{
    "name": "No Sleep Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "No Sleep",
    "description": "Here’s cooodding!",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594500677/Screen_Shot_2020-07-11_at_1.49.13_PM_uigvmj.png"

},
{
    "name": "This That Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_1.58.48_PM_afgro9.png"

},
{
    "name": "This That Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501511/Screen_Shot_2020-07-11_at_1.59.20_PM_qyixl1.png"

},
{
    "name": "This That Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501510/Screen_Shot_2020-07-11_at_1.59.55_PM_f4tdij.png"
},
{
    "name": "This That Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501509/Screen_Shot_2020-07-11_at_2.02.12_PM_h2xes0.png"
},
{
    "name": "This That Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_2.02.49_PM_wnyfo8.png"

},
{ 
    "name": "This That Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_2.03.10_PM_bsbwfy.png"

},
{
    "name": "This That Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501512/Screen_Shot_2020-07-11_at_2.03.31_PM_hoxfrp.png"

},
{
    "name": "This That Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "This That",
    "description": "I can’t choose so I pick this && that.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594501513/Screen_Shot_2020-07-11_at_2.04.42_PM_zuijal.png"

},
{
    "name": "Sugar Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502359/Screen_Shot_2020-07-11_at_2.14.31_PM_izoptz.png"

},
{
    "name": "Sugar Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502360/Screen_Shot_2020-07-11_at_2.14.56_PM_atokvc.png"

},
{
    "name": "Sugar Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502363/Screen_Shot_2020-07-11_at_2.15.20_PM_qcawpv.png"
},
{
    "name": "Sugar Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502362/Screen_Shot_2020-07-11_at_2.15.52_PM_qafgu8.png"
},
{
    "name": "Sugar Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502363/Screen_Shot_2020-07-11_at_2.16.24_PM_zwbdby.png"

},
{ 
    "name": "Sugar Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502361/Screen_Shot_2020-07-11_at_2.16.48_PM_gvaqxx.png"

},
{
    "name": "Sugar Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502363/Screen_Shot_2020-07-11_at_2.17.12_PM_zy7rbw.png"

},
{
    "name": "Sugar Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Sugar",
    "description": "Code so sweet and easy I can taste it.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594502363/Screen_Shot_2020-07-11_at_2.17.38_PM_disjch.png"

},
{
    "name": "Virt 2020 Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504014/Screen_Shot_2020-07-11_at_2.42.46_PM_yawmqn.png"

},
{
    "name": "Virt 2020 Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504012/Screen_Shot_2020-07-11_at_2.43.10_PM_zruo39.png"

},
{
    "name": "Virt 2020 Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504011/Screen_Shot_2020-07-11_at_2.43.36_PM_auahkh.png"
},
{
    "name": "Virt 2020 Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504011/Screen_Shot_2020-07-11_at_2.44.02_PM_bm7ftk.png"
},
{
    "name": "Virt 2020 Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504014/Screen_Shot_2020-07-11_at_2.45.14_PM_b2pa5p.png"

},
{ 
    "name": "Virt 2020 Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504013/Screen_Shot_2020-07-11_at_2.45.32_PM_vasqra.png"

},
{
    "name": "Virt 2020 Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504012/Screen_Shot_2020-07-11_at_2.45.55_PM_egcnyq.png"

},
{
    "name": "Virt 2020 Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Virt 2020",
    "description": "I can’t believe I survived, but all I learned was how to transform caffeine into code.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504014/Screen_Shot_2020-07-11_at_2.46.19_PM_ur77nu.png"

},

{
    "name": "Coffee Break Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504852/Screen_Shot_2020-07-11_at_2.55.46_PM_j7rwuf.png"

},
{
    "name": "Coffee Break Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504857/Screen_Shot_2020-07-11_at_2.56.09_PM_jvrele.png"

},
{
    "name": "Coffee Break Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504850/Screen_Shot_2020-07-11_at_2.56.48_PM_ixdicd.png"
},
{
    "name": "Coffee Break Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504852/Screen_Shot_2020-07-11_at_2.57.18_PM_zynrjh.png"
},
{
    "name": "Coffee Break Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504855/Screen_Shot_2020-07-11_at_2.59.06_PM_jjyn8c.png"

},
{ 
    "name": "Coffee Break Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504853/Screen_Shot_2020-07-11_at_2.59.31_PM_na7kbp.png"

},
{
    "name": "Coffee Break Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504853/Screen_Shot_2020-07-11_at_3.00.01_PM_xo1xgc.png"

},
{
    "name": "Coffee Break Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "Coffee Break",
    "description": "My java lets me espresso myself!",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594504856/Screen_Shot_2020-07-11_at_3.00.26_PM_fiwhfc.png"

},

{
    "name": "FBC Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512313/Screen_Shot_2020-07-11_at_5.01.23_PM_urw1hq.png"

},
{
    "name": "FBC Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512321/Screen_Shot_2020-07-11_at_5.01.52_PM_po4ml6.png"

},
{
    "name": "FBC Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512313/Screen_Shot_2020-07-11_at_5.02.38_PM_k0ckyu.png"
},
{
    "name": "FBC Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512321/Screen_Shot_2020-07-11_at_5.03.09_PM_tjckyi.png"
},
{
    "name": "FBC Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512317/Screen_Shot_2020-07-11_at_5.03.40_PM_sv9bu5.png"

},
{ 
    "name": "FBC Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512316/Screen_Shot_2020-07-11_at_5.03.59_PM_tqldnr.png"

},
{
    "name": "FBC Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512316/Screen_Shot_2020-07-11_at_5.04.23_PM_kcuxnt.png"

},
{
    "name": "FBC Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "FBC",
    "description": "The great debate is what to name my functions and variables.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512315/Screen_Shot_2020-07-11_at_5.04.42_PM_gcwq19.png"

},

{
    "name": "24/7 Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "24/7",
    "description": "Graphic T-Shirt",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512821/Screen_Shot_2020-07-11_at_5.10.17_PM_fkuwfb.png"

},
{
    "name": "24/7 Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512821/Screen_Shot_2020-07-11_at_5.10.57_PM_yaq3rl.png"

},
{
    "name": "24/7 Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512816/Screen_Shot_2020-07-11_at_5.11.23_PM_dsgkjk.png"
},
{
    "name": "24/7 Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512820/Screen_Shot_2020-07-11_at_5.11.49_PM_xhmyvl.png"
},
{
    "name": "24/7 Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512823/Screen_Shot_2020-07-11_at_5.12.17_PM_gsrgrc.png"

},
{ 
    "name": "24/7 Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512822/Screen_Shot_2020-07-11_at_5.12.36_PM_xz1igr.png"

},
{
    "name": "24/7 Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512820/Screen_Shot_2020-07-11_at_5.12.57_PM_skdwsm.png"

},
{
    "name": "24/7 Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "24/7",
    "description": "Talk is cheap, show me your code.",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594512818/Screen_Shot_2020-07-11_at_5.13.16_PM_q0cay5.png"

},

{
    "name": "CSS Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513315/Screen_Shot_2020-07-11_at_5.18.24_PM_cyc3mk.png"

},
{
    "name": "CSS Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513317/Screen_Shot_2020-07-11_at_5.18.55_PM_uxbatp.png"

},
{
    "name": "CSS Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513315/Screen_Shot_2020-07-11_at_5.19.16_PM_dv8qk8.png"
},
{
    "name": "CSS Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513313/Screen_Shot_2020-07-11_at_5.19.44_PM_kw7iww.png"
},
{
    "name": "CSS Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513317/Screen_Shot_2020-07-11_at_5.20.35_PM_gexol7.png"

},
{ 
    "name": "CSS Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513316/Screen_Shot_2020-07-11_at_5.20.56_PM_wyybp5.png"

},
{
    "name": "CSS Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513317/Screen_Shot_2020-07-11_at_5.21.17_PM_fd3eow.png"

},
{
    "name": "CSS Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "CSS",
    "description": "Link me up and let’s see what we get!",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513318/Screen_Shot_2020-07-11_at_5.21.31_PM_edbtsm.png"

},

{
    "name": "CODE Men's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "CODE",
    "description": "Link me up and let’s see what we get!",
    "description2": "A t-shirt for any day of the year that is comfortable and casual, surely to become a quick favorite. Made from 100% cotton for breathability in any climate. This soon to be classic in your wardrobe has double-needle stitched sleeves for that extra support you hope for and want. Fashionable crew neck design in either white or black. One size fits all..",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513974/Screen_Shot_2020-07-11_at_5.30.24_PM_id8xfo.png"

},
{
    "name": "CODE Men's Sweatshirt",
    "price": 45.00,
    "category1": "clothing",
    "category2": "men",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "Perfect for all of your sweater weather needs. A fleece sweatshirt comfortable and dependable for any outdoor/indoor activity. This will become the next fall wardrobe staple for the years to come. Made from a blend of 90% Airlume combined and ring-spun cotton/ 10% polyester fleece. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513973/Screen_Shot_2020-07-11_at_5.28.19_PM_irhazo.png"

},
{
    "name": "CODE Women's T-Shirt",
    "price": 24.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "Going back to the fundamentals, this crew neck t-shirt was made for comfortable and casual everyday use. Just like the little black dress, it is always nice to have a dependable t-shirt to wear. This breathable shirt is made from 100% cotton, with a nice structured fit and a soft and buttery feel. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513976/Screen_Shot_2020-07-11_at_5.30.57_PM_r67eoh.png"
},
{
    "name": "CODE Women's Tank",
    "price": 18.00,
    "category1": "clothing",
    "category2": "women",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "For the hot days or if you are one of those who get hot in the winter. A classic cotton racerback tank top for the softest most comfortable feel. A signature look that is must-have in all wardrobes. One size fits all.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513974/Screen_Shot_2020-07-11_at_5.29.05_PM_cpiqna.png"
},
{
    "name": "CODE Coffee Mug",
    "price": 18.00,
    "category1": "accessories",
    "category2": "mug",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "We have a cup for your tea. This latte mug is the polished version of your standard coffee mug. Made from ceramic this 12 oz mug has head to toe color and a single-side is printed with a sleek finish. Dishwasher and microwave safe. Just don’t drop it because it will break!",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513976/Screen_Shot_2020-07-11_at_5.31.39_PM_xqjy3p.png"

},
{ 
    "name": "CODE Tote",
    "price": 25.00,
    "category1": "accessories",
    "category2": "bag",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "Pro tip: Carrying things makes you look busy! Look busy and fashionable at the same time. A nice tote that is versatile, trendy, and durable for any day use. This tote is made from 100% spun polyester with sturdy cotton webbed handles. Our design is printed on both sides of the bag. Machine washable.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513976/Screen_Shot_2020-07-11_at_5.29.35_PM_uclafl.png"

},
{
    "name": "CODE Spiral Notebook",
    "price": 9.00,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "“Write a wise saying and your name will live forever” - unknown author. A notebook there for when you break through your writer's block or to keep your darkest secrets. A 6” x 8” spiral notebook with a pocket on the back cover to save documents. This uniquely designed notebook covers flexible yet secure material houses 120 pages of ruled paper stock inside.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513977/Screen_Shot_2020-07-11_at_5.32.07_PM_fo3k38.png"

},
{
    "name": "CODE Zip Pouch",
    "price": 14.00,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "CODE",
    "description": "Got a new error...Progress!",
    "description2": "Keep your knick-knacks in this knick-knack! No matter how small this pouch will keep your stuff safe. Can be used for makeup, pens/pencils, snacks, or money. Made from 100% spun polyester with non-woven laminate inside with zip closure. Our design is printed on both sides of the bag. Machine washable. ",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594513975/Screen_Shot_2020-07-11_at_5.32.20_PM_wapuwn.png"

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

