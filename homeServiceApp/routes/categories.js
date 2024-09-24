import express from 'express';
const router = express.Router();

let categories = [
    { id: 1, name: 'Plumbing', color: '#FF5733', iconUrl: 'https://example.com/icon1.png' },
    { id: 2, name: 'Cleaning', color: '#33FF57', iconUrl: 'https://example.com/icon2.png' }
];

router.get('/', (req, res) => {
    res.json(categories);
});

router.post('/', (req, res) => {
    const newCategory = req.body;
    newCategory.id = categories.length + 1;
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

export default router;
