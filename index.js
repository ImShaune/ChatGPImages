import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs';
import crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 2222;
const API_KEY = procces.env.API_KEY;
const URL = 'https://api.openai.com/v1/images/generations';

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/test', (req, res) => {
    res.send('Hello world');
});

app.post('/generate-image', async(req, res) => {
    const prompt = req.body.prompt;

    const headers = {
        'Content-type': 'application/json',
        Autorization: `Bearer ${API_KEY}`,
    }

    try {

        if (!!!prompt){
            throw Error('No prompt found');
        }

        const response = await fetch(URL,{
            method: POST,
            headers: headers,
            body: JSON.stringify({prompt, size: '1024x1024'}),
        });

        const data = await response.json();
        console.log(data)


        


    }   catch (error) {
        console.log('Error generating image', error.message);
        res.sendStatus(500);
    }
        
});

app.listen(port, () => {
    console.log('Starting server...')
});