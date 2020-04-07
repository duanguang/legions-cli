'use strict';
const chalk = require('chalk');
exports.boilerplateChoice=[
   {
       name:`create ${chalk.green('React PC/Mobile Client Render')} project boilerplate`,
       value:'boilerplate-react'
   },
   {
    name: `create ${chalk.green('Vue Client Render')} project boilerplate`,
    value: 'boilerplate-vue'
  }
]
exports.boilerplateDetailChoice = {
    'boilerplate-react':[
       {
           name:`create ${chalk.green('React PC Client Render')} project`,
           value:'react-pc-client',
           sourceDir:'https://github.com:duanguang/react-template'
       },
       {
        name: `create ${chalk.green('React mobile Client Render')} project boilerplate`,
        value: 'react-mobile-client',
        sourceDir: 'https://github.com:duanguang/react-mobile-template'
       }
    ],
    'boilerplate-vue': [
        {
            name: `create ${chalk.green('Vue Client Render')} project boilerplate`,
            value: 'vue-client',
            sourceDir: 'https://github.com:duanguang/vue-template'
        }
    ]
}
exports.projectAskChoice=[
    {
        type: 'input',
        name: 'name',
        message: 'Please input project name:',
        default:'project-demo'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please input project description:'
    },
    {
        type: 'input',
        name: 'main',
        message: 'Main file (index.js):',
        default: 'index.js'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author (other):',
        default: 'other she'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose license:',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'AGPL-3.0']
    },
    {
        type: 'list',
        name: 'npm',
        message: 'Please choose the way to install dependency:',
        choices: [
          {
            name: 'yarn',
            value: 'yarn',
            checked: true
          },
          {
            name: 'npm',
            value: 'npm'
          }
        ]
    }
]