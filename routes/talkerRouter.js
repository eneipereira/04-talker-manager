const { Router } = require('express');
const rescue = require('express-rescue');
const { talkerController } = require('../controllers');
const { talkersMiddleware } = require('../middlewares');

const talkerRouter = Router();

talkerRouter.get('/', talkersMiddleware.allTalkers, rescue(talkerController.get));

talkerRouter.get('/:id', talkersMiddleware.talkersById, rescue(talkerController.getById));

module.exports = talkerRouter;
