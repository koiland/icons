module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'hotfix', 'docs', 'improvement', 'refactor']],
    'header-max-length': [2, 'always', 100],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['ISSUE-', 'ICONS-'],
    },
  },
};
