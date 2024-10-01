// import express from 'express';
// const router = express.Router();

// let categories = [
//     { id: 1, name: 'Plumbing', color: '#FF5733', iconUrl: 'https://example.com/icon1.png' },
//     { id: 2, name: 'Cleaning', color: '#33FF57', iconUrl: 'https://example.com/icon2.png' }
// ];

// router.get('/', (req, res) => {
//     res.json(categories);
// });

// router.post('/', (req, res) => {
//     const newCategory = req.body;
//     newCategory.id = categories.length + 1;
//     categories.push(newCategory);
//     res.status(201).json(newCategory);
// });

// export default router;

import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

// POST new category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save(); // Save to MongoDB
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find(); // Fetch from MongoDB
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
