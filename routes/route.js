const express = require('express');
const router = express.Router();
const Customer = require('../routes/models/customer');


router.get('/customer', (req,res,next)=>{
    Customer.find(function(err,customer){
        res.json(customer);
    })  
 }); 
 
 router.post('/customer', (req,res,next)=>{
    let newCustomer = new Customer({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        birthday: req.body.birthday,
    });
     
    newCustomer.save((err,customer)=>{
        if(err){
            res.json({msg : 'failed to add a customer'});
        }else{
         res.json({msg : 'customer added succesfully'});;
        }
 
    });
 }); 

module.exports = router;