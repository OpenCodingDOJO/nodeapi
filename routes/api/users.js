var ApiRouter = require('./../../lib/ApiRouter');
var UserController = require('./../../controllers/UserController');

var userRouter = new ApiRouter('/users');

userRouter.get('/', UserController.findAll);
userRouter.get('/:username', UserController.findByUsername);
userRouter.post('/', UserController.add);
userRouter.put('/:username', UserController.update);
userRouter.delete('/:username', UserController.delete);

module.exports = userRouter.router;
