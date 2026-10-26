import express from "express"
import authMiddleware from "../middelware/auth.middelware.js";
import { generateColdEmails } from "../services/mail.service.js";
import { deleteEmail, getEmailById, getMyEmails, updateEmail } from "../controller/mail.controller.js";
import { sendEmail } from "../services/email.service.js";

const router = express.Router();

router.post('/generate',authMiddleware,generateColdEmails);
router.post('/',authMiddleware,getMyEmails);
router.post('/:id',authMiddleware,getEmailById);
router.post('/:id',authMiddleware,updateEmail);
router.post('/:id',authMiddleware,deleteEmail);
router.post('/send',authMiddleware,sendEmail);

export default router;





