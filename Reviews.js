const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.post('/', async (req, res) => {
  try {
    const { productname,discription, bought, ratings, review } = req.body;
    const item = new Review({
      productname,
      discription,
      bought,
      ratings,
      review
    });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error creating item' });
  }
});
router.get('/', async (req, res) => {
  try {
    const items = await Review.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

// Get a single item
router.get('/:id', async (req, res) => {
  try {
    const item = await Review.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { productname, discription, bought, ratings, review } = req.body;
    const item = await Review.findByIdAndUpdate(
      req.params.id,
      { productname, discription, bought, ratings,review},
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const { productname, discription, bought, ratings, review } = req.body;
    const item = await Review.findByIdAndUpdate(
      req.params.id,
      { productname, discription, bought, ratings,review},
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating item' });
  }
});
// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    const item = await Review.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router; 
