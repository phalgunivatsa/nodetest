module.exports = {
    fields: {
      userID: {
        type: 'text',
      },
      cartID: {
        type: 'text',
      },
      userAddress: {
        type: 'text',
      },
      pincode: {
        type: 'text',
      },
      product: {
        type: 'set',
      },
      totalCount: {
       type:'text',
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
    key: ['cartID'],
    indexes: ['userID'],
  };
  