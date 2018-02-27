'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.createHero = function createHero (req, res, next) {
  Default.createHero(req.swagger.params, res, next);
};

module.exports.deleteHero = function deleteHero (req, res, next) {
  Default.deleteHero(req.swagger.params, res, next);
};

module.exports.getHero = function getHero (req, res, next) {
  Default.getHero(req.swagger.params, res, next);
};

module.exports.getHeroList = function getHeroList (req, res, next) {
  Default.getHeroList(req.swagger.params, res, next);
};

module.exports.updateHero = function updateHero (req, res, next) {
  Default.updateHero(req.swagger.params, res, next);
};
