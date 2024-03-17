const express = require('express');
const env = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnect');
env.config();

connectDb();

const app = express();

const PORT = process.env.PORT || 6001;

app.use(express.json());
app.use('/api/quotes', require('./routes/quoteRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
});

