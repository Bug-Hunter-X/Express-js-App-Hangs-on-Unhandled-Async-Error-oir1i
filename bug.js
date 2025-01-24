const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetching data
  someAsyncOperation().then(data => {
    res.send(data);
  }).catch(err => {
    console.error(err);
    // Important: You need to send an error response to the client, otherwise it hangs.
    res.status(500).send('Internal Server Error'); 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong');
  }
  return { message: 'Success!' };
}