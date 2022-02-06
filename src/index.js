import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import eventsRoutes from './routes/eventsRoutes';

dotenv.config();

const app = express();

app.use(morgan('combined'));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', eventsRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'The base project init',
    status: 'success',
  });
});

app.use((err, req, res, next) => {
  // console.error(err.stack);
  return res.status(400).json({ error: err.message });
});

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  app.listen(process.env.PORT, () =>
    console.log(`FigFinance API listening on port ${process.env.PORT} 🔥`)
  );
};

run();
