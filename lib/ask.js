'use strict';
const chalk = require('chalk');
exports.boilerplateChoice = [{
        name: `create ${chalk.green('React PC/Mobile Client Render')} project boilerplate`,
        value: 'boilerplate-react'
    },
    {
        name: `create ${chalk.green('egg server  Render')} project boilerplate`,
        value: 'boilerplate-egg-server'
    },
    {
        name: `create ${chalk.green('Vue Client Render')} project boilerplate`,
        value: 'boilerplate-vue'
    },
    {
        name: `create ${chalk.green('Vue nuxt ssr Client Render')} project boilerplate`,
        value: 'boilerplate-vue-nuxt-ssr'
    },
    {
        name: `create ${chalk.green('Weapp Client Render')} project boilerplate`,
        value: 'boilerplate-weapp'
    },
    {
        name: `create ${chalk.green('React PC Client Template')} module boilerplate`,
        value: 'boilerplate-template-react'
    }
]
exports.boilerplateDetailChoice = {
    'boilerplate-react': [{
            name: `create ${chalk.green('React PC typescript Client  Render,the webpack4.x and react15.x')} project`,
            value: 'react-typescript-client-webpack4-react15',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack4-react15-ts'
        },
        {
            name: `create ${chalk.green('React PC typescript Client  Render,the webpack2.x and react15.x')} project`,
            value: 'react-typescript-client-webpack2-react15',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack2-react15-ts'
        },
        {
            name: `create ${chalk.green('React PC typescript Client  Render,the webpack4.x and react16.x')} project`,
            value: 'react-typescript-client-webpack4-react16',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack4-react16-ts'
        },
        {
            name: `create ${chalk.green('React PC Client Render,the webpack4.x and react15.x')} project`,
            value: 'react-pc-client-webpack4-react15',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack4-react15-JS'
        },
        {
            name: `create ${chalk.green('React PC Client Render,the webpack2.x and react15.x')} project`,
            value: 'react-pc-client-webpack2-react15',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack2-react15-JS'
        },
        {
            name: `create ${chalk.green('React mobile Client Render,the webpack4.x and react16.x')} project boilerplate`,
            value: 'react-typescript-mobile-client-webpack4-react16-mobile-ts',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack4-react15-mobile-ts'
        },
        {
            name: `create ${chalk.green('React mobile Client Render,the webpack2.x and react15.x')} project boilerplate`,
            value: 'react-typescript-mobile-client-webpack2-react15-mobile-ts',
            sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack2-react15-mobile-ts'
        },

    ],
    'boilerplate-vue': [{
            name: `create ${chalk.green('Vue Client Render')} project boilerplate`,
            value: 'vue-client',
            sourceDir: 'https://github.com:duanguang/vue-template#webpack2-vue2-JS'
        },
        {
            name: `create ${chalk.green('Vue PC typescript Client  Render')} project`,
            value: 'vue-typescript-client',
            sourceDir: 'https://github.com:duanguang/vue-template#webpack2-vue2-ts'
        }
    ],
    'boilerplate-weapp': [{
            name: `create ${chalk.green('Weapp Client Render')} project boilerplate`,
            value: 'weapp-client',
            sourceDir: 'https://github.com:duanguang/weapp-scaffold'
        },
        {
            name: `create ${chalk.green('Weapp typescript Client  Render')} project`,
            value: 'weapp-typescript-client',
            sourceDir: 'https://github.com:duanguang/weapp-scaffold#weapp-ts'
        }
    ],
    'boilerplate-vue-nuxt-ssr': [{
        name: `create ${chalk.green('web ssr Client Render')} project boilerplate`,
        value: 'web-ssr-client',
        sourceDir: 'https://github.com:duanguang/nuxt-vue-ssr'
    }, ],
    'boilerplate-egg-server': [{
        name: `create ${chalk.green('egg server Render')} project boilerplate`,
        value: 'egg-server',
        sourceDir: 'https://github.com:duanguang/egg-server-scaffold'
    }, ],
    'boilerplate-template-react':[{
        name:`create ${chalk.green('React PC Client Template')} module boilerplate`,
        value:'template-react',
        sourceDir: 'https://github.com:duanguang/react-scaffold-typescript#webpack4-react15-ts'
    }],
}
exports.projectAskChoice = [{
        type: 'input',
        name: 'name',
        message: 'Please input project name:',
        default: 'project-demo'
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
        choices: [{
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