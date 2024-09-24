import express from 'express';
const app = express();
const PORT = 3000;

import categoriesRoutes from './routes/categories.js';
import businessesRoutes from './routes/businesses.js';
import bookingsRoutes from './routes/bookings.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Service API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/categories', categoriesRoutes);
app.use('/businesses', businessesRoutes);
app.use('/bookings', bookingsRoutes);
