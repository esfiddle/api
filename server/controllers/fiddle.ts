//const Fiddle = require('./../models/Fiddle');
//const User = require('./../models/User');

module.exports = {
  createFiddle: (req, res, next) => {
    res.json({ function: [ { name: 'createFiddle' } ] });
  },
  updateFiddle: (req, res, next) => {
    res.json({ function: [ { name: 'updateFiddle' } ] });
  },
  starFiddle: (req, res, next) => {
    res.json({ function: [ { name: 'starFiddle' } ] });
  },
  forkFiddle: (req, res, next) => {
    res.json({ function: [ { name: 'forkFiddle' } ] });
  },
  downloadFiddle: (req, res, next) => {
    res.json({ function: [ { name: 'downloadFiddle' } ] });
  },
  createBlockImageFiddle: (req, res, next) => {
    res.json({ function: [ { name: 'createBlockImageFiddle' } ] });
  },
  recentFiddles: (req, res, next) => {
    res.json({ function: [ { name: 'recentFiddles' } ] });
  },
  popularFiddles: (req, res, next) => {
    res.json({ function: [ { name: 'popularFiddles' } ] });
  },
};
