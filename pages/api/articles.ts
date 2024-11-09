import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/mysql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const [rows] = await pool.execute('SELECT * FROM articles');
      res.status(200).json(rows);  // Send all articles as JSON
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch articles' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}