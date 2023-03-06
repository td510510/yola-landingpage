const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
mongoose.set('strictQuery', false);

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log('database is connected'))
  .catch((err) => console.log(`connecting database is error: ${err}`));

const PORT = process.env.HOST_API || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
