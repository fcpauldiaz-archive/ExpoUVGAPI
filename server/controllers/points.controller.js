import User from '../models/user.model';


/**
 *
 * @param {number} req.body.id - User id for whom we will increase currernt points.
 * @param {*} res
 * @param {*} next
 */
function addPoints(req, res, next) {
  User.addPoints(req.body.userId)
  .then((user) => {
    user.save();
    res.send('OK');
  })
  .catch(e => next(e));
}

/**
 *
 * @param {number} req.body.id - User id for whom we will obtain current points.
 * @param {*} res
 * @param {*} next
 */
function getPoints(req, res, next) {
  User.getPoints(req.query.userId)
  .then((user) => {
    return res.json(user.points);
  })
  .catch(e => next(e));
}

export default { addPoints, getPoints };
