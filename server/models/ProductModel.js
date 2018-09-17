module.exports = {
    fields: {
      productID: {
        type: 'text',
      },
      productSeller: {
        type: 'text',
      },
      price: {
        type: 'text',
      },
      quantity: {
        type: 'integer',
      },
      productID: {
        type: 'text',
      },
      createdBy: {
        type: 'text',
      },
      creationTimeStamp: {
        type: 'timestamp',
        default: {
          $db_function: 'toTimestamp(now())',
        },
      },
      updateBy: {
        type: 'text',
      },
      updateTimeStamp: {
        type: 'timestamp',
        default: {
          $db_function: 'toTimestamp(now())',
        },
      },
    },
    key: ['productID'],
    indexes: ['productSeller'],
  };