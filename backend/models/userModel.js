import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); //compare the entered password with the password in the database
}

userSchema.pre('save', async function (next){
  if (!this.isModified('password')) {
    next();   //if the password is not modified then we want to call next
  }

  const salt = await bcrypt.genSalt(10);    //generate a salt
  this.password = await bcrypt.hash(this.password, salt); //hash the password
});

const User = mongoose.model('users', userSchema); //create a model from the schema

export default User;