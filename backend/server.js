import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/flights', (req, res) => {
    res.send(data.flights);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server runnig on http://localhost:${port}`);
})
