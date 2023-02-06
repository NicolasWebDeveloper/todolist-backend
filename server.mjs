import { config } from 'dotenv';
import mongoose from 'mongoose';

import app from './app.mjs';

config({ path: './config.env' });

//Establish Database Connection
mongoose.set('strictQuery', true);
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Successfully established Database connection');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

//Starting express App
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));
