import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://andreidumitriu72:parola123@cornel.6o9tczh.mongodb.net/?retryWrites=true&w=majority&appName=Cornel'
  );

  return client;
}
