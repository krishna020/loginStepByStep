const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Trim whitespaces from email
        lowercase: true, // Convert email to lowercase
        validate: {
            validator: function (v) {
                // Simple email format validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Invalid email format',
        },
    },
    password:
    {
        type: String,
        required: true
    },
    confirm_password:
    {
        type: String,
        required: true
    },
    profile:
    {
        type: String,
        default:''
    },
    mobile_number: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                // Custom validation for 10-digit mobile number
                return /^\d{10}$/.test(v);
            },
            message: 'Mobile number must be 10 digits',
        },
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

// Use bcrypt to hash the password before saving
userSchema.pre('save', async function (next) {
    try {
      if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
      }
      next();
    } catch (error) {
      next(error);
    }
  });


const User = mongoose.model('User', userSchema)
module.exports = User