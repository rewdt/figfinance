import express from 'express';
import EventsController from '../controllers/eventsController';

const router = express.Router();

router.get('/events', EventsController.getEvents);

export default router;
