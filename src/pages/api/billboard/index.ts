import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if(req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    
    //@ts-ignore
    const query = new URLSearchParams(req.query).toString();

    const DiscoverAPIURL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMD_API_KEY}&${query}`;
    const response = await fetch(DiscoverAPIURL);
    const topShows = await response.json();
    const count = topShows.results.length;
    const random = Math.floor(Math.random() * count);
    const randomShow = topShows.results[random];
    
    return res.status(200).json(randomShow);
  } catch (error) {
    console.log({ error })
    return res.status(500).json({ error: 'Internal server error' });
  }
}