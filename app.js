const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

// Connect database
connectDB()

// Initialize app
const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main',  extname: '.hbs'}));
app.set('view engine', '.hbs')

// Middleware for express-session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))

// Middleware for passport
app.use(passport.initialize())
app.use(passport.session())

// Static foler
app.use(express.static(path.join(__dirname, 'public')))

// Link routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

// Set port
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`))