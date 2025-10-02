const express = require('express');
const app = express();
const { join } = require('path');

const hostname = '0.0.0.0';
const port = process.env.SIDE_PORT || 8080;

app.use(express.json()); // Parses JSON bodies

app.post('/api/messages', (req, res) => {
    const message = req.body.message || "No message provided";
    if (message.toLowerCase() == "ping") {
        return res.json({ response: "pong" });
    }
    return res.json({ response: `Recieved message: ${message}` });
});

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
