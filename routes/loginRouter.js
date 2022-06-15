const { Router } = require('express');
const rescue = require('express-rescue');
const { loginController } = require('../controllers');
const { loginMiddleware } = require('../middlewares');

const loginRouter = Router();

loginRouter.post('/', loginMiddleware.loginAuth, rescue(loginController.postLogin));

module.exports = loginRouter;
