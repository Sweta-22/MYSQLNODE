const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');
//const Student = require('../model/studentModel');
const Schools = sequelizeConfig.define("school2",
    {
        sno: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        Schoolid: {
            allowNull: false,
            uniquekey:true,
            type: Sequelize.STRING,
           
        },
      
    },
  
    {
        tableName: "school2",
        timestamps: false,
    }
);



module.exports = Schools;