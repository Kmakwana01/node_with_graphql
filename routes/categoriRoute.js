const express = require('express');
const { createCategory, getCategories } = require('../controllers/categori.controller');
const router = express.Router();

// Create category
router.post('/create', createCategory);

// Get all categories
router.get('/', getCategories);

module.exports = router;
