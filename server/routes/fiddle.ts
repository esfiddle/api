const fiddlecontroller = require('./../controllers/fiddle.ctrl');

module.exports = (router) => {
  router
    .route('/fiddles')
    .get(fiddlecontroller.getFiddles)

}
