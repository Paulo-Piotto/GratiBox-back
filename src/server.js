/* eslint-disable no-console */
import './setup.js';
import app from './app.js';

// const port = 4000;

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}.`);
// });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
