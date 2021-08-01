const express = require('express');
const router = express.Router();
let customerCrud = require('../crud/custCrud')
// let ordercrud = require('../crud/')

router.get('/getcustdata',async (req,res) =>{
    let result = await customerCrud.getAllda({});
    res.send({msg: " list" , data: result});
})
//getupdate
router.put('/update/:id',async (req,res) =>{
    try{
    let result=await customerCrud.updateorder(req.params.id,req.body);
    res.send({msg: "order updated Succesfully",data:result});
    }catch(error){
        console.log(error);
    }
});

router.get('/getorder',async (req,res) =>{
    let result = await customerCrud.getAllorder({});
    res.send({msg: " list" , data: result});
})
// router.get('/getup',async (req,res) =>{
//     let result = await customerCrud.updateSchool({id:req.body.id},{name:req.body.name});
//     res.send({msg: " list" , data: result});
// })
//add new customer
router.post('/addcust',async (req,res) =>{
    await customerCrud.addData(req.body);
    res.send({msg: "cust added Succesfully"});
});
//deleteorder
router.delete('/delete/:id',async (req,res) =>{
    await customerCrud.deleteorder(req.params.id);
    res.send({msg: "order deleted Succesfully"});
})
//get uppercase limit
router.post('/changecase',async (req,res) =>{
    let result= await customerCrud.getAll(req.body);//update()
     res.send({msg: "CUSTDATA changed Succesfully",data:result});
})

module.exports = router;