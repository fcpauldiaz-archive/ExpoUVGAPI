import User from '../models/user.model';


/**
 * 
 * @param {number} req.body.id - User id for whom we will increase currernt points. 
 * @param {*} res 
 * @param {*} next 
 */
function addPoints(req, res, next) {
    User.addPoints(req.body.id)
    .then((user) => {
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
    User.getPoints(req.body.id)
    .then((user) => {
      return res.json(user.points);
    })
    .catch(e => next(e));
}