const SchoolModel = require('../model/schoolModel');
const studentModel = require('../model/studentModel.JS');



let addSchool = async (obj) => {
    await SchoolModel.create(obj);
}

let getAlldata = async () => {
    await SchoolModel.findAll();
}

let updateSchool = async (id, obj) => {
    await SchoolModel.update(obj, { where: {id: id} });
}



let deleteSchoole = async (id) => {
    return await SchoolModel.destroy({ where:{ id: id }});
}


let getAllSchool = async () => {
    return await SchoolModel.findAll();
}


let getAllSchoolByCond = async (cond) => {
    return await SchoolModel.findAll({ where: cond });   ///////////{ where: { classid: obj.classId} },
}


let getOneSchoolByCond = async (cond) => {
    return await SchoolModel.findOne({ where:cond});   ///////////{ where: { classid: obj.classId} },
}

//"attr": ['name', 'address']

let getAllSchoolByAttr = async (attr) => {
    return await SchoolModel.findAll({       
    });
}


let getAllSchoolByCondAndAttr = async (cond,attr) => {
    return await SchoolModel.findAll({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { classid: obj.classId} },
}
//{


let getOneSchoolByCondAndAttr = async (cond,attr) => {
    return await SchoolModel.findOne({ 
        where: cond ,
        attributes: attr
    });   ///////////{ where: { classid: obj.classId} },
}
let getSchoolById = async (id) => {
    return await SchoolModel.findByPk(id);
}


let findOrCreateASchool = async (cond,obj) => {
    return await SchoolModel.findOrCreate({ where: cond ,defaults:obj});   ///////////{ where: { classid: obj.classId} },
}


let findAndCountAllSchool = async (cond) => {
    return await SchoolModel.findAndCountAll({ where: cond });   ///////////{ where: { classid: obj.classId} },
}

let getAllSchoolByCondAndInclude = async (cond) => {
    return await studentModel.findAll({where: {},
        include: [
            {
                model: SchoolModel,
            },
        ]
    });   ///////////{ where: { classid: obj.classId} },
}

module.exports = {
    addSchool,
    updateSchool,
    getAllSchool,
    getAllSchoolByCond,
    getOneSchoolByCond,
    getAllSchoolByAttr,
    getAllSchoolByCondAndAttr,
    getOneSchoolByCondAndAttr,
    deleteSchoole,
    getSchoolById,
    findOrCreateASchool,
    findAndCountAllSchool,
    getAllSchoolByCondAndInclude,
    getAlldata
}
