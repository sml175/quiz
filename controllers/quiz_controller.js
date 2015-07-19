var models = require('../models/models.js');

// Autoload :id
exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(
    function(quiz){
      if (quiz) {
        req.quiz = quiz;
        next();
      } else{next(new Error('No existe quizId=' + quizId))}
    }
  ).catch(function(error){next(error)});
};

// GET /quizes
exports.index = function(req, res) {
  var search = req.query.search?'%'+req.query.search+'%':'%';
  search = search.replace(' ','%');
  models.Quiz.findAll({where: ["pregunta like ?", search]}).then(function(quizes) {
      //findAll().then(function(quizes) {
      res.render('quizes/index.ejs', {quizes: quizes, errors: []});
  }
 );
};

// GET /quizes/:id
exports.show = function(req, res) {
  res.render('quizes/show', { quiz: req.quiz});
};            // req.quiz: instancia de quiz cargada con autoload

// GET /quizes/:id/answer
exports.answer = function(req, res) {
  var resultado = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) {
    resultado = 'Correcto';
  }
  res.render(
    'quizes/answer',
    { quiz: req.quiz,
      respuesta: resultado,
      errors: []
    }
  );
};
