/**
 * Created by Rival on 22/02/2016.
 */
var mongoose = require("mongoose");



var userModel = new mongoose.Schema(
    {
        Email:{
            type: String,
            required:true
        },
        Password:{
            type: String,
            required:true
        },
        FirstName: {
            type: String,
            required:true
        },
        LastName: {
            type: String,
            required:false
        }
    });



var User = mongoose.model('User', userModel);

module.exports = User;