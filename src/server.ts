import app from ".";

const port = 3000;

app.get('/', (req, res) => {
    res.send(`App is working`);
});

app.listen(port, () => {
    console.log(`Server is running on Port: http://127.0.0.1:${port}`);
});
