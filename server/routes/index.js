const articleRoutes = require('./routes');
module.exports = function(app, db) {
    articleRoutes(app, db);
};