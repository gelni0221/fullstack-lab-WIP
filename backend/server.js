import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; 
import authRoutes from './routes/authRoutes.js';
dotenv.config();
const app = express();

const secret = process.env.JWT_SECRET
const NODE_PORT = process.env.NODE_PORT || 5000;    

// Makes it that the React can only use the backend.
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));
// Add security headers
app.use(helmet());
app.use(cookieParser());
// Middleware to parse JSON request bodies - to make the data in json instead of like a string
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory -- in order to take the files 
app.use(express.static('public'));

// THIS MIDDLEWARE IS TO MAKE A CONSOLE LOG THAT SHOWS SOMEONE USED A ROUTE
app.use(morgan('combined'));

// INSTEAD OF THIS
// app.use((req, res, next) => {
//   console.log('Users Router Time:', Date.now());
//   next();
// });
app.use('/user', userRoutes);
app.use('auth', authRoutes);

app.listen(NODE_PORT, () => {
    console.log(`Listening in http://localhost:${NODE_PORT}`);
}
)