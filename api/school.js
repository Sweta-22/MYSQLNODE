const express = require('express');
const router = express.Router();
let schoolCrud = require('../crud/schoolCrud')


//add
router.post('/addrecord',async (req,res) =>{
    await schoolCrud.addSchool(req.body);
    res.send({msg: "school Added Succesfully"});
})



//list
router.get('/getmy',async (req,res) =>{
    let result = await schoolCrud.getAllSchool();
    res.send({msg: "school list" , data: result});
})


//get One
router.get('/getone/:id',async (req,res) =>{
    let result = await schoolCrud.getOneSchoolByCond({id: req.params.id});
    res.send({msg: "one school" , data: result});
})
//getbyprimary key getSchoolById
router.post('/getbypk',async (req,res) =>{
    let result = await schoolCrud.getSchoolById({id: req.params.id});
    res.send({msg: "onedata" , data: result});
})
router.post('/get',async (req,res) =>{
    let result = await schoolCrud.findAndCountAllSchool(req.body);
    res.send({msg: "one school" , data: result});
})


//update
router.put('/update/:id',async (req,res) =>{
    await schoolCrud.updateSchool(req.params.id,req.body);
    res.send({msg: "school updated Succesfully"});
})



//delete
router.delete('/delete',async (req,res) =>{
    await schoolCrud.deleteSchoole(req.params.id);
    res.send({msg: "school deleted Succesfully"});
})

//get One
router.get('/getoneByid/:id',async (req,res) =>{
    let result = await schoolCrud.getSchoolById(req.params.id);
    res.send({msg: "one school" , data: result});
})



//find or create
router.put('/findorcreate',async (req,res) =>{

   let result= await schoolCrud.findOrCreateASchool(req.body);
    res.send({msg: "school added Succesfully",data:result});
})
//getattr getAllSchoolByAttr
router.put('/getattr',async (req,res) =>{

    let result= await schoolCrud.getAllSchoolByAttr(req.body.attr);
     res.send({msg: "attributes are seen Succesfully",data:result});
 })
 //getattrbycond
 router.put('/getcattr',async (req,res) =>{

    let result= await schoolCrud.getAllSchoolByCondAndAttr(req.body,req.body.attr);
     res.send({msg: "attributes are seen by condition Succesfully",data:result});
 })


//countall
router.put('/countall',async (req,res) =>{
   let result= await schoolCrud.findAndCountAllSchool(req.body);
    res.send({msg: "school counteded Succesfully",data:result});
})
router.get('/display',async (req,res) =>{
    let result= await schoolCrud.getAllSchoolByCondAndInclude({});
     res.send({msg: "school counteded Succesfully",data:result});
 })

module.exports = router;