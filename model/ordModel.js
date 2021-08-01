const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');
//const Student = require('../model/studentModel');
const Scho = sequelizeConfig.define("ordtable",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        custid: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        phone: {
            allowNull: false,
            type: Sequelize.INTEGER,
        }
    },
  
    {
        tableName: "ordtable",
        timestamps: false,
    }
);



module.exports = Scho;