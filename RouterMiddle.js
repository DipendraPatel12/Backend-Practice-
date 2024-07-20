const middleware= (req, res, next)=>{
    console.log("i am the boss");
    next();
}
module.exports = middleware;