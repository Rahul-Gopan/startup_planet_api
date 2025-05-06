import express from "express";
import { startups} from './datas/data.js';
import { filterData } from './utils/filterData.js';

const app = express();
const PORT = 8000;


app.get('/api', (req, res) => {
    let filteredData = startups;

    filteredData = filterData(filteredData, req.query)

    res.json(filteredData);
})

app.listen(PORT, () => {
    console.log(`Server is running on Port http://localhost:${PORT}`);
})