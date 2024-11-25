import { Router } from 'express';
import { login, logout, verifyToken } from '../controllers/auth.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.post('/login', login);
router.post('/logout', authMiddleware, logout);
router.get('/verify', authMiddleware, verifyToken);

export { router };