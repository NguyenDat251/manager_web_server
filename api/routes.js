'use strict';
module.exports = function(app) {
  let memberCtrl = require('./controllers/member');

  // todoList Routes
  app.route('/member')
    .get(memberCtrl.get)
    .post(memberCtrl.add);

    app.route('/member/:memberId')
    .get(memberCtrl.detail)
};