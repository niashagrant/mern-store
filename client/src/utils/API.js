import axios from "axios";


 export default {
     getOneProduct: function(productId){
         return axios.get("/product/" + productId)
         
     },

     addToCart: function(product){
         return axios.post("/addToCart", product);
     },

     renderCart: function() {
         return axios.get("/userCart");
     },

     delFromCart: function(product){
         return axios.put("/delFromCart/", product);
     }

 }
 
