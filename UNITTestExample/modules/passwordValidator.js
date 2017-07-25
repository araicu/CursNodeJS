exports.check = module.exports.validPassword = function(password){
    if (password.lenght < 8){
        return false;
    }
    if(password.indexOf('password') >= 0){
        return false;
    }

    return true;
};