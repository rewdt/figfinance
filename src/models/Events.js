import mongoose from 'mongoose';

const eventsSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  date_created: {
    type: Date,
    default: Date.now,
  },
  isVirtual: {
    type: Boolean,
    default: false,
  },
  address: String,
});

export default mongoose.model('Event', eventsSchema, 'events');
