const express = require('express');
const router = express.Router();
const {controllers} = require('../API/table/controller');
router.get("/t1/get",controllers.getTodo)
router.post('/t1/post',controllers.postTodo);
// router.post('/t1/dynamic',controllers.realTodo);
router.post('/t1/delete',controllers.deleteTodo);
// router.post('/t1/update',controllers.updateTodo)


module.exports=router;