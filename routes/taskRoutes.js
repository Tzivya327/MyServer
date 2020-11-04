module.exports = function(app) {
    var taskController = require('../controllers/taskController');
  
    // todoList Routes
    app.route('/distanse')
      .get(taskController.distance)
  

  };
  