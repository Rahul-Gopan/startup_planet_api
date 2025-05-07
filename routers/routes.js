import express from 'express';
import { getData, getStartups } from '../controllers/startups.js';


const route = express.Router();


route.get('/', getData);

route.get('/:field/:term', getStartups);


export default route;