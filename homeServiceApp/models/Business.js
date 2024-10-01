import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    photos: [{ type: String }]
});

const Business = mongoose.model('Business', businessSchema);

export default Business;
