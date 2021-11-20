/* eslint-disable no-console */
import './setup.js';
import app from './app.js';

if (process.env.process.env.NODE_ENV === 'test') {
  const port = 4000;

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}
