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
};
