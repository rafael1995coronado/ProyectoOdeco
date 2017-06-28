var models=require('../models/models.js');


exports.principal = function(req, res, next) {
                    models.reclamo.findAll().then(function(reclamo){
                    res.render('index',{ title:'Proyecto Final', 
		                           		subtitle: 'avances en computacion',
		                           		reclamo:reclamo});
                    });
					 };
exports.registroReclamo = function(req, res) {
 		       			var reclamo={tipoReclamo:'',
 		       						 observacion:'',
 		       						 fecha:''}
 		       			res.render('registroReclamo',{reclamo: reclamo });
		  				 };

exports.guardarReclamo = function(req, res) {
 		       			console.log('ingresa a guardar');
 		       			reclamo=models.reclamo.build(req.body.reclamo);
 		       			reclamo.save({fields:['tipoReclamo',
 		       									'observacion',
 		       									'fecha']})
 		       			.then(function(){console.log('ingresa a redirect');
 		       			res.redirect('respuestaReclamo',
 		       			{mensaje: 'Reclamo Guardado'});
 		       			}) ;
 		       		}

exports.respuestaReclamo = function(req, res) {
 		       			res.render('respuestaReclamo',
 		       			{title:'realizo su reclamo',
 		       				mensaje: 'Reclamo Guardado'});
		  				 };
		  				 
exports.listaReclamo = function(req, res) 	{
                    models.reclamo.findAll().then(function(reclamo){
                    res.render('listaReclamo',{ title:'Proyecto Final', 
		                           		subtitle: 'avances en computacion',
		                           		reclamo:reclamo});
                    });
					 };
exports.muestraReclamo = function(req, res) {
 		       			models.reclamoModels.findAll().then(function(Reclamo){
 		       			res.render('listaReclamo',
 		       			{title:'seleccion por tipo del reclamo',
 		       				reclamo:reclamo})}
		  				 )};

exports.seleccionaObservacion = function(req, res) {
 		       			res.render('seleccionaObservacion',
 		       			{mensaje: 'Reclamo de prueva se ase en el mismo bucleGuardado'});
		  				 };
		  				 
exports.buscaObservacion = function(req, res){
  var observacionBusca = req.params.observacionBusca;
  models.reclamo.findAll().then( function(reclamos){
        res.render('listaReclamo',{  observacionBusca:observacionBusca, reclamos:reclamos});
               });
};

/*exports.buscaObservacion = function(req, res){
  var text = req.params.text;
  models.reclamo.findAll().then( function(reclamos){
        res.render('listaReclamo',{  text:text, reclamos:reclamos});
               });
}
*/