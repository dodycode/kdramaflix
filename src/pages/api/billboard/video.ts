import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try {
    if(req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { showID } = req.query;

    if(String(showID) === 'undefined') {
      return res.status(400).json({ error: 'Bad request' });
    }

    const VideoAPIURL = `${process.env.TMD_API_BASE_URL}/tv/${showID}/videos?api_key=${process.env.TMD_API_KEY}`;
    const response = await fetch(VideoAPIURL);
    const videos = await response.json();
    return res.status(200).json({ videos });
  } catch (error) {
    console.log({ error })
    return res.status(500).json({ error: 'Internal server error' });
  }
}