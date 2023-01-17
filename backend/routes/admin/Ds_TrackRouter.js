//use express module
const express = require("express");
const router = express.Router();
let TrackOforders = require("../../Controllers/admin/TrackController")

//Track Orders route
router.get('/track', TrackOforders);
  

  module.exports = router;