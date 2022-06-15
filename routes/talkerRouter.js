const { Router } = require('express');
const rescue = require('express-rescue');
const { talkerController } = require('../controllers');
const { talkersMiddleware } = require('../middlewares');

const talkerRouter = Router();

talkerRouter.get('/', talkersMiddleware.allTalkers, rescue(talkerController.get));

talkerRouter.get('/:id', talkersMiddleware.talkersById, rescue(talkerController.getById));

talkerRouter.post('/', talkersMiddleware.tokenAuth, talkersMiddleware.newTalker,
rescue(talkerController.post));

talkerRouter.put('/:id', talkersMiddleware.tokenAuth,
talkersMiddleware.talkersById, talkersMiddleware.newTalker,
rescue(talkerController.put));

talkerRouter.delete('/:id', talkersMiddleware.tokenAuth, talkersMiddleware.talkersById,
rescue(talkerController.delete));

module.exports = talkerRouter;
