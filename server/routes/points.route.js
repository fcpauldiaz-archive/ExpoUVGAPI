import express from 'express';
import config from '../../config/config';
import pointsCtrl from '../controllers/points.controller';

const router = express.Router(); // eslint-disable-line new-cap

/**
 * POST  - increments one point to desired user
 */
router.route('/points/add/:user_id')
  .post(pointsCtrl.addPoints);
    
/**
 * GET - obtains points for desired user
 */
router.route('/points/get/:user_id')
  .get(pointsCtrl.getPoints)


export default router;
