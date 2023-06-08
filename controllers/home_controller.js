module.exports.home = function(req, res){
    
    //setup our cookie:
    console.log(req.cookies);
    // if we want to change the value of the cookie in res:
    res.cookie('user_id', 61);
    
    // return res.end('<h1>Express is up for Codial!</h1>');
    return res.render('home', {
        title: "Home"
    });
}

