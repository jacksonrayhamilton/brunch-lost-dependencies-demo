/* eslint-env node */

'use strict';

module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'}
  },
  modules: {
    autoRequire: {
      'app.js': ['main']
    }
  }
};
