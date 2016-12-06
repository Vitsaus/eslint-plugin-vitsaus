'use strict';

// import all rules in lib/rules
module.exports.rules = {
  'newline-after-export': require('./rules/newline-after-export'),
  'newline-after-if': require('./rules/newline-after-if'),
  'newline-before-export': require('./rules/newline-before-export'),
  'newline-before-if': require('./rules/newline-before-if')
};

module.exports.configs = {
  recommended: {
    rules: {
      'vitsaus/newline-after-export': 1,
      'vitsaus/newline-after-if': 1,
      'vitsaus/newline-before-export': 1,
      'vitsaus/newline-before-if': 1,
    },
  },
};
