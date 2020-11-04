var mongoose = require('mongoose'),
Distance = mongoose.model('distance');

exports.distance = function(req, res) {
    Distance.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




