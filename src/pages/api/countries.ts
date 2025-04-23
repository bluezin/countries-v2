import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ successful: false, data: null, error: null });
  }
}
