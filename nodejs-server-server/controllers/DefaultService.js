'use strict';

exports.createHero = function(args, res, next) {
  /**
   * Create Hero
   * Create Hero.
   *
   * body Hero Created Hero object
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteHero = function(args, res, next) {
  /**
   * Delete Hero
   * Delete Hero.
   *
   * id Long ID of Hero
   * no response value expected for this operation
   **/
  res.end();
}

exports.getHero = function(args, res, next) {
  /**
   * get Hero
   * Returns Hero
   *
   * id Long ID of Hero
   * returns Hero
   **/
  var examples = {};
  examples['application/json'] = [ {
  "id" : 11,
  "name" : "Mr. Nice"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getHeroList = function(args, res, next) {
  /**
   * get Hero List
   * Returns All Heroes
   *
   * name String ユーザ名 (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "id" : 11,
  "name" : "Mr. Nice"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateHero = function(args, res, next) {
  /**
   * Update Hero
   * Update Hero.
   *
   * body Hero Created Hero object
   * no response value expected for this operation
   **/
  res.end();
}

