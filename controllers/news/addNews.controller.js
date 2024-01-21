const NewsModel = require('../../models/news.model');
const newsJoiSchema = require('../../schemas/newsJoiSchema');
const requestError = require('../../helpers/requestError');

async function addNews (req, res, next) {
    const {body, user} = req;   
    const level = user.permissionLevel;

    if (level === "admin" || level === "manager" ) {
        
        const {error, value} = newsJoiSchema.validate(body);

        if (error) { 
            next(requestError(400, error.message));
            //res.status(400).json(error.message);
            return;
        } else {
            NewsModel.create(value);
            res.status(200).json({"message": value});
        }
    } else {
    next(requestError(401));
    }
}

module.exports = addNews;