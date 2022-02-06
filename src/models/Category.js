import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: String,
    description: String,
});

export default mongoose.model('Category', categorySchema, 'category');
