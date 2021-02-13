var express = require('express');
var router = express.Router();
const jwtVerify = require('../../../Http/Middleware/jwt')

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', AuthController.login);
router.post('/login', AuthController.login);
router.post('/create', AuthController.create);
router.post('/fetch', jwtVerify, UserController.fetch);

module.exports = router;
