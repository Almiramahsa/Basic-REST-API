const express = require('express');
const userRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/users', userRoutes);

app.listen(4000, () => {
  console.log('Server berhasil di running di port 4000');
});
