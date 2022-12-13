const { BadRequestError } = require('../errors/index');

const testUser = (req, res, next) => {
  console.log(req.user);
  if (req.user.testUser) {
    throw new BadRequestError('Test User. Read Only!');
  }

  next();
};

module.exports = testUser;
