const express = require('express');
const app = express();
const userRoute = express.Router();

let User = require('../models/User');

// Add user
userRoute.route('/addUser').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get user
userRoute.route('/getUser/:email').get((req, res) => {
  User.findOne(req.params.email, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = userRoute;