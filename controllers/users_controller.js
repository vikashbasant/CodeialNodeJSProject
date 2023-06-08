// we need to import the moddle:
const User = require('../models/user');

module.exports.profile = function(req, res){

    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(user){
                // if the user is found then we redirect to the profile pages:
                return res.render('user_profile', {
                    title: "User Profile",
                    user: user
                });
            }else{
                // if user is not found, then return to sign-in pagae:
                return res.redirect('/users/sign-in');
            }
            
        });
    }else{
        // if user is not found, then return to sign-in pagae:
        return res.redirect('/users/sign-in');
    }

    // // res.end('<h1>User Profile</h1>');
    // return res.render('user_profile', {
    //     title: "Home"
    // });
}

// render the sign up pages:
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codial | Sign Up"
    });
}

// render the sign in pages:
module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
        title: "Codial | Sign In"
    });
}


// get the sign up data:
module.exports.create = function(req, res){
    // weather password or confirm password are equal or not:
    if (req.body.password != req.body.confirm_password){
        // if both are not equal, then simply go back to same page:
        return res.redirect('back');
    }

    // then we will try find that user id if exsit then not create new one otherwise create new one:
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}

// sign in and create a session for the user:
module.exports.createSession = function(req, res){
    
    // steps to authenticate:
    // find the user: 
    User.findOne({email: req.body.email}, function(err, user){
        if (err){console.log('error in finding user in signing in'); return }

        // handle user found:
        if(user){

            // if the user is found then handle password which don't match:
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            // handle session creation:
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        }else{
            // handle user not found: 
            // If the user is not found then simply return to that pages:
            return res.redirect('back');
        }

    });
    

    

    
}