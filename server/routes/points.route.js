import express from 'express';
import pointsCtrl from '../controllers/points.controller';

const router = express.Router(); // eslint-disable-line new-cap

/**
 * POST  - increments one point to desired user
 */
router.route('/add')
  .post(pointsCtrl.addPoints);

/**
 * GET - obtains points for desired user
 */
router.route('/get/')
  .get(pointsCtrl.getPoints);

/**
 * GET - get all the users with points
 */
router.route('/get/all')
  .get(pointsCtrl.getUsersPoints);


export default router;
