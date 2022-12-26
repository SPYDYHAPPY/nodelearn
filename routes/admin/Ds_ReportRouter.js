
//use express module
const express = require("express");
const router = express.Router();
let ReportsPage = require("../../Controllers/admin/ReportController")


//Reports route
router.get('/reports', ReportsPage);
  
  module.exports = router;