import express from 'express';
const router = express.Router();

let businesses = [
    { id: 1, name: 'PlumberPro', description: 'Professional plumbing services', address: '123 Main St', category: 1, contactPerson: 'John Doe', email: 'contact@plumberpro.com', photos: ['https://example.com/photo1.png'] },
    { id: 2, name: 'Sparkle Cleaners', description: 'Top-notch cleaning services', address: '456 Clean St', category: 2, contactPerson: 'Jane Smith', email: 'contact@sparkle.com', photos: ['https://example.com/photo2.png'] }
];

router.get('/', (req, res) => {
    res.json(businesses);
});

router.get('/category/:category', (req, res) => {
    const category = parseInt(req.params.category);
    const filteredBusinesses = businesses.filter(business => business.category === category);
    res.json(filteredBusinesses);
});

router.get('/:id', (req, res) => {
    const business = businesses.find(b => b.id === parseInt(req.params.id));
    if (business) {
        res.json(business);
    } else {
        res.status(404).send('Business not found');
    }
});

router.post('/', (req, res) => {
    const newBusiness = req.body;
    newBusiness.id = businesses.length + 1;
    businesses.push(newBusiness);
    res.status(201).json(newBusiness);
});

router.put('/:id', (req, res) => {
    const business = businesses.find(b => b.id === parseInt(req.params.id));
    if (business) {
        Object.assign(business, req.body);
        res.json(business);
    } else {
        res.status(404).send('Business not found');
    }
});

router.get('/:businessId/bookings/date/:date', (req, res) => {
    const { businessId, date } = req.params;
    const bookings = [
        { id: 1, businessId: 1, date: '2024-09-25', time: '10:00', userEmail: 'user1@example.com', userName: 'Alice', status: 'confirmed' },
        { id: 2, businessId: 2, date: '2024-09-25', time: '12:00', userEmail: 'user2@example.com', userName: 'Bob', status: 'pending' }
    ];

    const filteredBookings = bookings.filter(booking => booking.businessId == businessId && booking.date === date);
    res.json(filteredBookings);
});

export default router;
