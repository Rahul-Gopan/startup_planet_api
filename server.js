import express from "express";
import routes from './routers/routes.js';

const app = express();
const PORT = 8000;

app.use('/api', routes);

app.use( (req, res) => {
    res.status(400).json({ message: "endpoint not found"})
})

app.listen(PORT, () => {
    console.log(`Server is running on Port http://localhost:${PORT}`);
})