 const adminAuth =(req,res,next) =>
{
    const token = "admin" ;
    const isAuthenticated = token == "admin" ;
    if(!isAuthenticated) {
        res.status(401).send("You are not authenticated");
    }
    else{
        next();
    }    
};

const userAuth = (req,res,next) => {
    const token = "user";
    const isUserAuth = token == "user";
    if(!isUserAuth) {
        res.status(401).send("You are not authenticated user");
    }
    else{
        next();
    }
}

module.exports = {adminAuth , userAuth}