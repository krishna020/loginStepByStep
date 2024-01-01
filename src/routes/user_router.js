const express=require('express')
const router=express.Router();
const userController=require('../controller/user-controller')

//@ FEATURE 1 : USER ROUTE HANDLER
router.post('/create_user',userController.create_user)
router.get('/get_user',userController.get_user)

module.exports=router