const {
    cartSvc,
  } = require('../../service');
  
  module.exports = {
  async getCartInfo(userID) {
 const cart = await cartSvc.getCart(userID);
    return cart;
},
}