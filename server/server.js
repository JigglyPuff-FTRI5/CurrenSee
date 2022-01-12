const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/userRoutes.js')
const financeRouter = require('./routes/financialRoutes.js');
const passport = require('passport');
require('../auth')

// Body parsing, query string parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve index.html
app.use(express.static(path.resolve(__dirname, '../build')));

//OAuth Authentication Route - Google
app.get('/user/auth/google', 
passport.authenticate('google', { scope: ['email', 'profile']})
)

//O-Auth redirect URI catch
app.get('/user/google/callback',(req, res, next)=>{
passport.authenticate('google', (err, user, info) => {

if (err) {return next(err)}
if (!user) {return res.status(401).send('No user yo')}

req.logIn(user, function(err) {
  if (err) { return next(err) }
  return res.status(200).send('Success');
});
})(req, res, next);
});

// app.get('/user/success', (req, res)=> {
//   console.log('Success entered')
//   return res.status(200).send('Success!')
// })

// app.get('/user/failure', (req, res)=> {
//   return res.status(401).send('Failure!')
// })


//use userRouter
app.use('/user', userRouter);
//use financialRouter
app.use('/financial', financeRouter);

//404 error with message
app.use('*', (req, res) => {
  res.status(404).send('EMOTIONAL DAMAGE')
})


// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Set app to listen to port 3000
app.listen(3000, () => {
  console.log('Listening on PORT 3000...');
});
