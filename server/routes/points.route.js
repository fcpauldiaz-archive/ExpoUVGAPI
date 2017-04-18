import express from 'express';
import pointsCtrl from '../controllers/points.controller';

const router = express.Router(); // eslint-disable-line new-cap

/**
 * POST  - increments one point to desired user
 */
router.route('/points/add')
  .post(pointsCtrl.addPoints);

/**
 * GET - obtains points for desired user
 */
router.route('/points/get/:userId')
  .get(pointsCtrl.getPoints);


export default router;
