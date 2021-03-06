import {Sequelize }from 'sequelize';

// Option 1: Passing parameters separately
const sequelize = new Sequelize("Hospital", "root", "juanomv2000", {
  host: "localhost",
  dialect:  "mysql" ,
  logging:false
});
export default sequelize;