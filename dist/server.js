"use strict";

var _express = _interopRequireDefault(require("express"));
var _hbs = _interopRequireDefault(require("express-hbs/lib/hbs.js"));
var _cors = _interopRequireDefault(require("cors"));
var _path = require("path");
var _url = require("url");
var _pages = require("./pages.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = (0, _express["default"])();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = (0, _path.dirname)(_filename);
server.use((0, _cors["default"])()).engine('hbs', _hbs["default"].express4()).set('view engine', 'hbs').use(_express["default"].urlencoded({
  extended: true
})).use(_express["default"]["static"]((0, _path.join)(_dirname, '../public'))) // Servir arquivos estáticos da pasta "public"
.set('views', (0, _path.join)(_dirname + '/views')) // Definir o diretório "views"
.get('/', _pages.index).get('/orphanages', _pages.orphanages).get('/orphanage', _pages.orphanage).get('/create-orphanage', _pages.createOrphanage).post('/save-orphanage', _pages.saveOrphanage);
server.listen(5500, function () {
  console.log('Entre aqui:', 'http://localhost:5500/');
});

// /* ATENÇÃO : 
// O nodemon pode crashar, Erro: Error: listen EADDRINUSE :::5500
// Significa que a porta já está em uso. Para resolver isso você pode 
// encerrar o processo que está rodando nessa porta executando o comando :
//   pkill node

// Caso o Cache esteja cheio usar :
//   npm cache clean --force

// Depois pode apagar o node_modules e o package-lock.json e rodar :
//   npm install
// */
