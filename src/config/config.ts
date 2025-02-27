/* istanbul ignore file */
export default {
  ui: {
    generalSettings: {
      width: 550,
      height: 755
    },
    export: {
      width: 550,
      height: 340
    },
    urlExport: {
      width: 550,
      height: 650
    }
  },
  key: {
    lastVersionSettingsOpened: 'lastVersionSettingsOpened',
    fileId: 'fileId',
    settings: 'settings',
    extensionPluginData: 'org.lukasoppermann.figmaDesignTokens',
    extensionFigmaStyleId: 'styleId',
    extensionAlias: 'alias',
    authType: {
      token: 'token',
      gitlabToken: 'gitlab_token',
      basic: 'Basic',
      bearer: 'Bearer'
    }
  },
  exclusionPrefixDefault: ['_', '.'],
  fileExtensions: [
    {
      label: '.tokens.json',
      value: '.tokens.json'
    },
    {
      label: '.tokens',
      value: '.tokens'
    },
    {
      label: '.json',
      value: '.json'
    }
  ]
}
