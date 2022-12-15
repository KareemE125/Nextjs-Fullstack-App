//  /api/new-meetup

import { MongoClient } from 'mongodb'

export default async function handler(req, res) 
{

    if (req.method === 'POST') 
    {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://kareemE125:XDNbyXGBXT5jmcx2@meetupcluster.oekcire.mongodb.net/?retryWrites=true&w=majority');
        
        const db = client.db('meetupDB');
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);


        client.close();

        res.status(201).json({message:'success insertion'});
    }
}