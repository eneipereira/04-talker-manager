const { Router } = require('express');
const rescue = require('express-rescue');
const { talkerController } = require('../controllers');
const { talkersMiddleware } = require('../middlewares');

const talkerRouter = Router();

talkerRouter.get('/:id', talkersMiddleware.talkersById, rescue(talkerController.getById));

talkerRouter.get('/', talkersMiddleware.allTalkers, rescue(talkerController.get));

module.exports = talkerRouter;
