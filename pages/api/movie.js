// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MovieList from "../../MovieList.json";

export default (req, res) => {
  res.status(200).json(JSON.stringify(MovieList));
};
