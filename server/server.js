const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/userRoutes.js')
const financialRouter = require('./routes/financialRoutes.js')

// Body parsing, query string parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve index.html
app.use(express.static(path.resolve(__dirname, '../build')));

//use userRouter
app.use('/user', userRouter);
//use financialRouter
app.use('/financial', financialRouter);


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
