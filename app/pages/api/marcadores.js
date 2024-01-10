// pages/api/marcadores.js
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const uri = process.env.MONGO; // Substitua pelo URI do seu MongoDB

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db('projectmalaria'); // Substitua pelo nome do seu banco de dados
    const collection = database.collection('milds'); // Substitua pelo nome da sua coleção

    const marcadores = await collection.find().toArray();

    res.status(200).json(marcadores);
  } catch (error) {
    console.error('Erro ao buscar marcadores:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

export default handler;
