import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on Port: http://127.0.0.1:${port}`);
});
