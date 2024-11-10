import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/mysql';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const [rows]: any = await pool.execute('SELECT * FROM orders WHERE id_pesan_tanam = ?', [id]);

      if (rows.length > 0) {
        res.status(200).json(rows[0]);  // Send user data
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
