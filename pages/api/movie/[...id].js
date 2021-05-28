// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MovieList from "../../../MovieList.json";

export default (req, res) => {
  const { id: requestID } = req.query;
  const result = MovieList.filter((movie) => movie.id === requestID.toString());
  res.status(200).json(result[0]);
};
