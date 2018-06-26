'use strict';
const path = require('path');

exports.Masks = require(path.join(__dirname, 'masks.js'));
exports.Packet = require(path.join(__dirname, 'packet.js'));

exports.kissDefs	= require("./kissDefs.js");
exports.Defs		= require("./Defs.js");
exports.Utils		= require("./Utils.js");
exports.kissTNC		= require("./kissTNC.js");
