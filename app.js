//--------------------------------------------
const
    express = require('express'),
    app = express();

    const methodOverride = require('method-override');

//-----


app.use(methodOverride('_method'))

// EJS-----------------------------------------------------
app.set('view engine', 'ejs');
//----

// Middleware - BodyParser--------------------------------------------
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//-----


// Routes------------------------------------------------------------
const home = require('./routes/home')


app.use('/',home)
//





//--------------------------------------------
const port = 1300;
app.listen(port, () => {
    console.log(`connect to backend port: ${port}`);
});
//-----