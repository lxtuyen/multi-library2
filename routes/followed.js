import express from 'express'

import { verifyUser,verifyAdmin } from '../untils/VerifyToken.js';
import { createFollow, getFollower, deleteFollow, getAllFollow } from '../controllers/followedController.js';

const router = express.Router()

router.post('/', createFollow);
router.get('/:id', getFollower);
router.delete('/:id', deleteFollow);
router.get('/', verifyAdmin, getAllFollow)


export default router