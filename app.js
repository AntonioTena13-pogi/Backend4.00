
import express from 'express';
import cors from 'cors';

import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';

const corsOptions = {
    origin: 'http://localhost:5173',
};

const app = express();


app.use(express.json());
app.use(cors(corsOptions));


app.use('/student', studentRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);


const port = 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
