import express from 'express';
import { contactUs } from '../controller/contactusController.js';


const router = express.Router();

router.post('/contact-us', contactUs);

export default router;