import axios from "axios";


 export default {
     getOneProduct: function(productId){
         return axios.get("/product/" + productId)
         
     },
     privateRoute:function(){
         return axios.get("/userlogged")
     }
 }
 
