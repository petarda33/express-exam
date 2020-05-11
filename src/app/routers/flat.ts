import { Router } from 'express';
import * as flatController from '../controllers/flat';

export const router: Router = Router({ mergeParams: true});

router.get('/flat', flatController.index);
router.get('/user/:id', flatController.show);
router.post('/user', flatController.create);
router.put('/user/:id', flatController.update);
router.delete('/user/:id', flatController.destroy);