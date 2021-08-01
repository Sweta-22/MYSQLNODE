const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');

const Schools = require('../model/schoolModel');
const Student = sequelizeConfig.define("student2",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        roll: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        address: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        Schoolid: {
            allowNull: false,
            uniquekey:true,
            type: Sequelize.STRING,
        }
    },
    {
        tableName: "student2",
        timestamps: false,
    }
);
Student.belongsTo(Schools, {
    foreignKey: 'Schoolid',
})
module.exports = Student;