import axios from "axios";

export default {
  getOneProduct: function (productId) {
    return axios.get("/product/" + productId);
  },

  addToCart: function (product) {
    console.log("API add to cart");
    return axios.post("/addToCart", product);
  },

  renderCart: function (id) {
    return axios.get("/userCart/"+ id);
  },

  delFromCart: function (id) {
    console.log("axios parameter passing to delete from cart:", id)
    return axios.delete("/delFromCart/"+ id);
  },
  updateCartQty:function(qty){
    console.log("this is what we are sending to the back to update Qty:",qty);
    return axios.put("/updateCartQty", qty)
    
  },
  createCheckout: function(total){
    console.log(" this is what we are sending to our create order:", total)
    return axios.post("/completeCheckout", {total})
  }
  
};
