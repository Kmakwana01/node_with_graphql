const Category = require('../models/categori.model');

// Create new category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = new Category({ name, description });

    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
