import Events from '../models/Events';

class EventsController {
  static async getEvents(req, res) {
    const { categories } = req.query;
    const filter = {};
    if (categories) {
      filter['category'] = { $all: categories.split(',') };
    }
    await Events.find(filter).exec((err, data) => {
      if (err) {
        return res.status(400).json({ status: 'error', message: err.message });
      }
      return res.send({ status: 'success', data });
    });
  }
}

export default EventsController;
