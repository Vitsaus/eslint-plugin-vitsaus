'use strict';

// import all rules in lib/rules
module.exports.rules = {
  'newline-after-class': require('./rules/newline-after-class'),
  'newline-after-function': require('./rules/newline-after-function'),
  'newline-after-if': require('./rules/newline-after-if'),
  'newline-before-class': require('./rules/newline-before-class'),
  'newline-before-function': require('./rules/newline-before-function'),
  'newline-before-if': require('./rules/newline-before-if')
};

module.exports.configs = {
  recommended: {
    rules: {
      'vitsaus/newline-after-class': 2,
      'vitsaus/newline-after-function': 2,
      'vitsaus/newline-after-if': 2,
      'vitsaus/newline-before-class': 2,
      'vitsaus/newline-before-function': 2,
      'vitsaus/newline-before-if': 2,
    },
  },
};
