var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var serveStatic = require('serve-static');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redis = require('node-redis');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var router = express.Router();
var path = require('path');
var logger = require('nlogger').logger(module);
var ejs = require('ejs');

var app = express();

app.set('views', path.join(__dirname + '/views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    store: new RedisStore({
        host: '127.0.0.1',
        port: 6379
    }),
    secret: "61@_7sb(7slxucg!@u8+7u(eodyj3+w!vsq7kj+om_#ccsn3(z",
    cookie: {maxAge: 60 * 60 * 1000 * 24},
    resave: true,
    saveUninitialized: true }
));

app.use(serveStatic(path.join(__dirname + '/public')));
app.use(router);

//app.use(errorHandler({dumpExceptions: true, showStack: true}));

router.use(function(req, res, next) {
    logger.info('requested: ', req.body);
    next();
});

router.get('/', routes.index);
router.get('/map', routes.index);
router.get('/test', routes.index);
router.get('/archer/reports', routes.index);
router.get('/archer-login/', routes.index);
router.get('/archer/*', routes.index);
router.get('/partials/:name', routes.partials);
/**/
//router.get('*', routes.index);

app.listen(8000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
