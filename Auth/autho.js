export const isAuthenticated(token)
{
    const token = token ;
    const isAuthenticated = token == "admin" ;
    if(isAuthenticated) {
        res.send("  welcome to " + token + " . ALL Data are sent")
    }
    else{
        res.status(401).send("You are not authenticated")
    }
    
};

module.exports{isAuthenticated}