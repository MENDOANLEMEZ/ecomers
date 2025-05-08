require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const checkoutRoutes = require('./routes/checkout');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', checkoutRoutes);
app.use('/admin', adminRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
    .catch(err => console.error(err));
