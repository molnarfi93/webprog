const express = require('express');
const app = express();
const dvdRoute = express.Router();

let DVD = require('../models/DVD');

// Add DVD
dvdRoute.route('/addDVD').post((req, res, next) => {
  DVD.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All DVDs
dvdRoute.route('/getAllDVDs/:email').get((req, res) => {
  DVD.find(req.params.email, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get DVD
dvdRoute.route('/getDVD/:id').get((req, res) => {
  DVD.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update DVD
dvdRoute.route('/updateDVD/:id').put((req, res, next) => {
  DVD.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
    }
  })
})

// Delete DVD
dvdRoute.route('/deleteDVD/:id').delete((req, res, next) => {
  DVD.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = dvdRoute;