import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { showID } = req.query;

    if(String(showID) === 'undefined') {
      return res.status(400).json({ error: 'Bad request' });
    }

    const LogoAPIURL = `${process.env.TMD_API_BASE_URL}/tv/${showID}/images?api_key=${process.env.TMD_API_KEY}`;
    const response = await fetch(LogoAPIURL);
    const images = await response.json();
    return res.status(200).json({ images });
  } catch (error) {
    console.log({ error })
    return res.status(500).json({ error: 'Internal server error' });
  }
}