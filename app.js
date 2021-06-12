//--------------------------------------------
const
    express = require('express'),
    app = express();

    const methodOverride = require('method-override'),
    path = require('path');

    const mysql = require('mysql'),
    session = require('express-session'),
    MySQLStore = require('express-mysql-session'),
    util = require('util');
//-----

// Mysql--------------------------------------------
require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
db.connect(
    (err) => {
        if (err) {
            throw err
        } else console.log('connect to server mysql')
    }
)

//Express sessionMysql
const sessionStore = new MySQLStore({}, db)

//express session
app.use(session({
    name: 'biscuit',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { 
      maxAge: 1000 * 60 * 60 * 24 //24 heures
     }
  }))

// DECLARE LA VARIABLE GLOBALE QUERY SQL
global.querysql = util.promisify(db.query).bind(db)
//-----


app.use(methodOverride('_method'))

// EJS-----------------------------------------------------
app.set('view engine', 'ejs');
//----

// Static folder--------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
//-----

// Middleware - BodyParser--------------------------------------------
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//-----


// Routes------------------------------------------------------------
const home = require('./routes/home'),
      user = require('./routes/user'),

      admin = require('./routes/admin')

app.use('/',home)

app.use('/user', user)

app.use('/admin',  admin)
//





//--------------------------------------------
const port = 1300;
app.listen(port, () => {
    console.log(`connect to backend port: ${port}`);
});
//-----