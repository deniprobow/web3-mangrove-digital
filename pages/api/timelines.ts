import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../utils/mysql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idpt } = req.query;
  
  if (req.method === 'GET') {
    try {
        const [rows]: any = await pool.execute('SELECT * FROM timelines WHERE id_pesan_tanam = ?', [idpt]);
      res.status(200).json(rows);  // Send all timelines as JSON
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch timelines' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}