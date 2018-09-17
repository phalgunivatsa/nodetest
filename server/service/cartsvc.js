const requestor = require('../../../config/components/httpClient');

module.exports = {
    async getCart(userID) {
      const cartInfo = new cassandraClient.instance.Cart({
        userID
      });
      const productInfo= new cassandraCLient.instance.Product({
          
      })
     
      return cartInfo;
    },
  };
