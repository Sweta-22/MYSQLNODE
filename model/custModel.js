const Sequelize = require('sequelize');
const sequelizeConfig = require('../config');
const orde = require('../model/ordModel');
const Sch = sequelizeConfig.define("custtable",
    {
      
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING,
            get() {
                const rawValue = this.getDataValue("name");
                return rawValue ? rawValue.toUpperCase() : "";
            },
            set(value){
                
                this.setDataValue('name', value.toUpperCase());
            }
            
        },
        address: {
            allowNull: false,
            type: Sequelize.STRING,
            get() {
                const rawValue = this.getDataValue("address");
                return rawValue ? rawValue.toUpperCase() : "";
            }
           
        }
    },
    


    {
        tableName: "custtable",
        timestamps: false,
    }
);
Sch.hasMany(orde, {
    foreignKey: 'custid',
  
   
})



module.exports = Sch;