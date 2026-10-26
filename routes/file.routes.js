import express from "express";
import { upload } from "../middelware/mullter.middelware.js";
import authMiddleware from "../middelware/auth.middelware.js";
import { uploadFile } from "../controller/file.controller.js";
import { extractWithNvidia } from "../utils/ai.utils.js";

const router = express.Router()

router.post("/upload",authMiddleware,upload.single("file"),uploadFile)
router.post("/extract",authMiddleware,upload.single("screenshot"),extractWithNvidia)
export default router