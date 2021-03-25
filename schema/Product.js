cube(`Product`, {
  sql: `SELECT * FROM cubedb.product`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [filename, title]
    },
    
    price: {
      sql: `price`,
      type: `sum`
    }
  },
  
  dimensions: {
    filename: {
      sql: `filename`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    type: {
      sql: `type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
