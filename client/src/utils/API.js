import axios from "axios";


 export default {
     getOneProduct: function(productId){
         return axios.get("/product/" + productId)
         
     },

     addToCart: function(product){
         return axios.put("/addToCart", product);
     }
 }
 
