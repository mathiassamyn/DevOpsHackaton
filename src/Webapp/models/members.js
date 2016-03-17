/**
 * Created by rival on 17/03/2016.
 */
var mongoose = require("mongoose");

var memberModel = new mongoose.Schema(
    {
        Email:{
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

var Member = mongoose.model('Member', memberModel);

module.exports = Member;