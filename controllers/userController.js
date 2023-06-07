const mongoose = require('mongoose')
const User = require('../models/User')


///======================
///   get user
///=====================
const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw Error("please send user id to get user info ");
      }
  
      if (!mongoose.isValidObjectId(id)) {
        throw Error("please send valid user id");
      }
  
      const userData = await User.findById(id);
      if (userData) {
        userData.password = undefined;
        res.status(200).json(userData);
      } else {
        res.status(200).json("User not found");
      }
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };


  ///======================
///   delete user
///=====================
const deleteUser = async (req, res) => {
    try {
      if (!req.params.id) {
        throw Error("please send Your Valid Id to delete");
      }
  
      if (!mongoose.isValidObjectId(req.params.id)) {
        throw Error("please send valid id to delete");
      }

      const userData = await User.findById(req.params.id);
      if(!userData) {
        res.status(404).json("user not found");
      }
      if (userData.id === req.params.id) {
        const user = await User.findByIdAndDelete(req.params.id);
  
        res.status(200).json("User Deleted SuccessFully");
      } else {
        res.status(403).json("Access Denied ! you can only delete your profile");
      }
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

  module.exports = {getUser, deleteUser}