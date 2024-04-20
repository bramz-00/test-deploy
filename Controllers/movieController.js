const Movie = require("../Models/Movie");
const movies = require("../utils/movie");




module.exports.getAllMovie = async (req, res) => {
    try {
      const data = await Movie.find(); // Execute the Mongoose query
      res.json(data); // Send the retrieved data in the response
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports.createMovie =(req,res)=>{
    const {Title,Poster,Runtime}=req.body
    const movie = Movie.create({Title,Poster,Runtime})
 
    return res.json(movie);
    }
    module.exports.insertMovies =async(req,res)=>{
  
    try {
        const docs = await Movie.insertMany(movies);
        return res.json(movies);
    } catch (err) {
        return console.log(err)
    }
};