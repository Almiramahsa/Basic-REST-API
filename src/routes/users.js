const express = require('express');

const userController = require('../controller/users');
const router = express.Router();

//CREATE - POST
router.post('/', userController.createNewUser);

//READ - GET
router.get('/', userController.getAllUsers);

//UPDATE - PATCH
router.patch('/:idUser', userController.updateDataUser);

//DELETE _ DELETE
router.delete('/:idUser', userController.deleteDataUser);
module.exports = router;
