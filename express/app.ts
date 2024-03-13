import mongoose from "mongoose";
import express from "express";
import 'dotenv/config';
import morgan from "morgan";
import studentRouter from "./students/students.routes";
import { connectDB } from "./db_connect";
connectDB();

const app = express();

app.use(morgan('dev'));
app.use('/students', studentRouter);


app.all('*', (req, res, next) => {
    next(new Error('No Route matched. Try again'));
});


app.listen(4000, () => console.log('Server is running on port 4000'));