import express from 'express'
import { fetchEvents, pushEvent } from '../controllers/journey.js';

const router = express.Router();

router.get("/", fetchEvents);
router.post("/", pushEvent);


export default router;