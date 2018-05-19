import { Router } from 'express';

import users from './users';
import events from './events';

const router = Router();

// Add USERS Routes
router.use(users);
router.use(events);

export default router;
