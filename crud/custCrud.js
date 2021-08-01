const CustModel = require('../model/custModel');
const OrdModel = require('../model/ordModel');
let getAlldata = async (cond) => {
     return await CustModel.findAll({where: cond,
       // return await OrdModel.findAll({where: cond,
        include: [
            {
                model: OrdModel,
            },
        ]
    });   ///////////{ where: { classid: obj.classId} },
}
//create obj

let addData = async (obj) => {
    await CustModel.create(obj);
}
let getAllda = async (cond) => {
    await CustModel.findAll({where:{}
    });
}
let getAllorder = async (cond) => {
    return await OrdModel.findAll({where:{}
    });
}
let updateorder = async (id, obj) => {
    return await OrdModel.update(obj, { where: {id: id} });
}
let deleteorder = async(id) =>{
    return await OrdModel.destroy({ where: {id: id} })
}
//GETALL
let getAll = async (cond) => {
    return await CustModel.findAll({where: cond,
        include: [
            {
                model: OrdModel,
            },
        ]

    }
    )
}
module.exports = {
    getAlldata,
    getAllorder,
    getAll,
    addData,
    getAllda,
    updateorder,
    deleteorder
}