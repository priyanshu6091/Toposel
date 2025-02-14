const User = require('../models/User');

exports.searchUsers = async (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query) {
            return res.status(400).json({ message: 'Search query is required' });
        }

        const users = await User.find({
            $or: [
                { username: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        }).select('-password'); // Exclude password from results

        res.json({
            users,
            count: users.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
