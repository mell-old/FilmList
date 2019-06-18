const cinemaRoutes = require('./routes');
module.exports = function(app, db) {
    cinemaRoutes(app, db);
};