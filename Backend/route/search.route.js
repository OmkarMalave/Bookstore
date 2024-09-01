import express from 'express';
const router = express.Router();
import Book from '../model/book.model.js'; // Assuming you have a Book model

// Search route
router.get('/search', async (req, res) => {
  const searchQuery = req.query.q;

  try {
    // Perform a search on the 'name' or 'description' fields
    const results = await Book.find({
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
