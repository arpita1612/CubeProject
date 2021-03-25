cube(`product`, {
  sql: `SELECT * FROM cubedb.product`,

  measures: {
    count: {
      sql: `type`,
      type: `count`
    },
 
  totalAmount: {
    sql: `price`,
    type: `sum`
  }
},

  dimensions: {
  description: {
    sql: `description`,
    type: `string`
  }
}
});

