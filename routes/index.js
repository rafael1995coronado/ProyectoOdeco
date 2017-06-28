var express = require('express');
var router = express.Router();
var reclamoController=require('../controllers/reclamoController');


router.get('/',reclamoController.principal);
router.get('/registroReclamos',reclamoController.registroReclamo);
router.post('/guardarReclamo',reclamoController.guardarReclamo);
router.get('/respuestaReclamos',reclamoController.respuestaReclamo);
//router.get('/buscaObservacion/:observacionBusca',reclamoController.buscaObservacion);

router.get('/listaReclamos',reclamoController.listaReclamo);
router.post('/muestraReclamo',reclamoController.muestraReclamo);
router.get('/seleccionaObservacion',reclamoController.seleccionaObservacion);



/*router.get('/inicios', function(req, res, next) {
  res.render('index',{ reclamo:reclamo });
});
router.get('/registroReclamos', function(req, res) {
  res.render('registroReclamo', {reclamo: reclamo });
   });
router.get('/listaReclamos', function(req, res) {
  res.render('listaReclamo', {reclamo: reclamo });
   });*/


//para la reproduccion de la fecha
//router.get('/fechas',fechaController.index);
//router.get('/fechas:fecha(\\d+)',fechaController.show);
//router.get('/fechas:fecha(\\d+)/answer',fechaController.fecha);
module.exports = router;