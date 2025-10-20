module.exports = {
  branches: [
    'do-not-delete',
    { name: '6.4.x', channel: 'prerelease-bugfix', range: '6.4.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: 'v5', channel: 'prerelease-5', range: '5.x' }
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [{
    preset: 'angular',
    releaseRules: [
      { type: 'feat', release: 'patch' },
      { type: 'fix', release: 'patch' }
    ]
    },
    ,
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'patch-v${version}',
  dryRun: true
};
