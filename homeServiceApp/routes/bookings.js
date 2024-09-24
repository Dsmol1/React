import express from 'express';
const router = express.Router();

let bookings = [
    { id: 1, businessId: 1, date: '2024-09-25', time: '10:00', userEmail: 'user1@example.com', userName: 'Alice', status: 'confirmed' },
    { id: 2, businessId: 2, date: '2024-09-26', time: '12:00', userEmail: 'user2@example.com', userName: 'Bob', status: 'pending' }
];

router.get('/', (req, res) => {
    res.json(bookings);
});

router.get('/user/:email', (req, res) => {
    const userEmail = req.params.email;
    const userBookings = bookings.filter(booking => booking.userEmail === userEmail);
    res.json(userBookings);
});

router.post('/', (req, res) => {
    const newBooking = req.body;
    newBooking.id = bookings.length + 1;
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

router.delete('/:id', (req, res) => {
    const bookingIndex = bookings.findIndex(b => b.id === parseInt(req.params.id));
    if (bookingIndex !== -1) {
        const deletedBooking = bookings.splice(bookingIndex, 1);
        res.json(deletedBooking);
    } else {
        res.status(404).send('Booking not found');
    }
});

export default router;
