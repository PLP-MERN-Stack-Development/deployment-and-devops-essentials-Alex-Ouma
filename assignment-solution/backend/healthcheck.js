// Simple health check endpoint for Express
module.exports = function createHealthRouter() {
  const express = require('express');
  const router = express.Router();

  router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
  });

  router.get('/ready', (req, res) => {
    // Place DB checks here if desired
    res.status(200).json({ ready: true });
  });

  return router;
};
