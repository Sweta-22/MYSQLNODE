const express = require('express');
const router = express.Router();

const school = require('../api/school');
router.use('/school1', school);
const sch = require('../api/order');
router.use('/orderpath', sch);
router.get('/getfirst',async (req,res) =>{
    res.send("hello");}
)


module.exports = router;