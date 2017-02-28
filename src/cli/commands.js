/* jshint maxlen: false */
'use strict';

module.exports = {
  usage: 'Usage: $0 <command> [options]',
  commands: {

    dev: {
      cmd: 'dev <dirName> [port] [baseUrl]',   //should be dirPath imho
      example: {
        cmd: '$0 dev ../all-components 3001 127.0.0.1:3001 --fallbackRegistryUrl=http://anotherhost:anotherport/'
      },
      description: 'Runs a local oc test registry in order to develop and test components',
      options: {
        fallbackRegistryUrl: {
          description: 'Url to another registry which will be used by dev registry when component cannot be found in local registry',
        }
      },
      usage: 'Usage: $0 dev <dirName> [port] [baseUrl] [options]'
    },

    init: {
      cmd: 'init <componentName>',
      example: {
        cmd: '$0 init test-component --templateType=jade'
      },
      description: 'Creates a new empty component in the current folder',
      options: {
        templateType: {
          description: 'The component\'s template type. Options are jade or handlebars',
          default: 'handlebars'
        }
      },
      usage: 'Usage: $0 init <componentName> [options]'
    },

    mock: {
      cmd: 'mock <targetType> <targetName> <targetValue>',
      example: {
        cmd: '$0 mock plugin hash "always-returned-value"',
        description: 'Creates static mock for a "hash" plugin which always returns "always-returned-value" value'
      },
      description: 'Allows to mock configuration in order to facilitate local development',
      usage: 'Usage: $0 mock <targetType> <targetName> <targetValue>'
    },

    preview: {
      cmd: 'preview <componentHref>',
      example: {
        cmd: '$0 preview "http://localhost:3000/my-new-component/1.0.0/?param1=hello&name=Arthur"'
      },
      description: 'Runs a test page consuming a component',
      usage: 'Usage: $0 preview <componentHref>'
    },

    publish: {
      cmd: 'publish <componentPath>',
      example: {
        cmd: '$0 publish my-new-component/'
      },
      description: 'Publish a component',
      usage: 'Usage: $0 publish <componentPath>'
    },

    registry: {
      cmd: 'registry <command>',
      description: 'Manages oc registries in the current project',
      commands: {
        add: {
          cmd: 'add <registryUrl>',
          example: {
            cmd: '$0 registry add http://my-registry.in.my.domain/'
          },
          description: 'Adds oc registries to the current project',
          usage: 'Usage: $0 registry add <registryUrl>'
        },
        ls: {
          example: {
            cmd: '$0 registry ls'
          },
          description: 'Shows oc registries added to the current project',
          usage: 'Usage: $0 registry ls'
        },
        remove: {
          cmd: 'remove <registryUrl>',
          example: {
            cmd: '$0 registry remove http://my-registry.in.my.domain/'
          },
          description: 'Removes oc registries from the current project',
          usage: 'Usage: $0 registry remove <registryUrl>'
        }
      },
      usage: 'Usage: $0 registry <command>'
    }
  }
};
