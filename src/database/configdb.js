import {Sequelize }from 'sequelize';

// Option 1: Passing parameters separately
const sequelize = new Sequelize("bmt9trlfqrvwydrxbfwx", "uurghiewvmxlccaf", "RWaRmutJcWZV8nMGgmIM", {
  host: "bmt9trlfqrvwydrxbfwx-mysql.services.clever-cloud.com", // "localhost",
  dialect:  "mysql" ,
  logging:false
});
export default sequelize;