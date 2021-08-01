const Sequelize = require('sequelize');
const sequelize = new Sequelize("newdb","root","Sweta@@22$$%",{
host: "127.0.0.1",
dialect: "mysql",
logging: console.log,
pool: {
    max: 5,
    min:0,
    idle: 100000,
},
});
module.exports = sequelize;
