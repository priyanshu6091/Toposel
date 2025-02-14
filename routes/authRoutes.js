const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Validation middleware
const registerValidation = [
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullName').trim().notEmpty().withMessage('Full name is required'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
    body('dateOfBirth').isISO8601().withMessage('Invalid date of birth'),
    body('country').trim().notEmpty().withMessage('Country is required')
];

const loginValidation = [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
];

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;
