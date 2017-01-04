
var Estacao = require('../models/estacoes');

exports.get = function (req, res) {

  if(req.params.id) {

    Estacao.findById(req.params.id).exec(function(err, estacao){
      if(err) {
        res.json({'erro':'falha ao buscar estacao'});
        return;
      }
      res.json(estacao);
    });

  } else {

    Estacao.find().exec(function(err, estacoes) {
      if(err) {
        res.json({'erro':'falha ao buscar estacoes'});
        return;
      }
      res.json(estacoes);

    });

  }

};

exports.post = function (req, res) {
  var data = req.body;

  if(data.nome && data.cidade) {

    var estacao = new Estacao();

    estacao.nome = data.nome;
    estacao.cidade = data.cidade;

    estacao.save(function(err, row) {
      if(err) {
        res.json({'erro':'falha ao cadastrar estacao'});
        return;
      }

      res.json(row);

    });

  } else {
    res.json({'erro':'parametros incorretos (nome, cidade)'});
    return;
  }
	
};

exports.put = function(req, res) {

  if(!req.params.id) {
    res.json({'erro': 'id nao encontrado'});
    return;
  }

  var data = req.body;

  if(data.nome && data.cidade) {

    Estacao.findById(req.params.id).exec(function(err, estacao) {
      if(err) {
        res.json({'erro':'falha ao atualizar estacao'});
        return;
      }

      estacao.nome = data.nome;
      estacao.cidade = data.cidade;

      estacao.save(function(err) {
        if(err) {
          res.json({'erro':'falha ao atualizar estacao'});
          return;
        }
        res.json({'sucesso':'estacao atualizada com sucesso'});
      });

    });

  } else {

    res.json({'erro':'parametros incorretos (nome, cidade)'});
    return;

  }

};

exports.delete = function(req, res) {
  if(!req.params.id) {
    res.json({'erro': 'id nao encontrado'});
    return;
  }

  Estacao.remove({_id: req.params.id}, function(err){
    if(err) {
      res.json({'erro':'erro ao deletar estacao'});
      return;
    }

    res.json({'successo':'estacao removida com sucesso'});
    
  });
};