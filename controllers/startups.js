import { startups} from '../datas/data.js';
import { filterData } from '../utils/filterData.js';


export const getData = (req, res) => {

    let filteredData = startups;
    filteredData = filterData(filteredData, req.query)
    res.json(filteredData);
} 

export const getStartups = (req, res) => {
    const {field, term} = req.params;

    const allowedFields = ['country', 'continent', 'industry']
    
    if(!allowedFields.includes(field))
    {
        return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" });
    }

    const Data = startups.filter( 
        items => items[field].toLowerCase() === term.toLowerCase()
    )

    if(Data.length === 0)
        res.status(200).json({message: "No data found"});
    else
        res.status(200).json(Data);
}