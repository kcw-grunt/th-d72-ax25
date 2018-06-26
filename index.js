'use strict';
const path = require('path');

exports.Masks = require(path.join(__dirname, 'masks.js'));
exports.Packet = require(path.join(__dirname, 'packet.js'));

exports.kissDefs	= require("./kissdefs.js");
exports.Defs		= require("./defs.js");
exports.Utils		= require("./utils.js");
exports.kissTNC		= require("./kisstnc.js");
