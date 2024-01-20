const NewsModel = require('../../models/news.model');
const newsJoiSchema = require('../../schemas/newsJoiSchema');
const requestError = require('../../helpers/requestError');

async function addNews (req, res, next) {
    const {body, user} = req;
    
    const level = user.permissionLevel;

    if (level === "admin" || level === "manager" ) {
        
        console.log(user);
        res.status(200).json({"message": body});
    }
    requestError(401);
}

module.exports = addNews;