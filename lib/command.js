'use strict';

const path = require('path');
const program = require('commander');
const chalk = require('chalk'); 
const Action = require('./action');
module.exports= class Command{
    constructor(){
        this.baseDir = process.cwd();
        this.program=program;
        this.chalk=chalk;
        this.boilerplate = {};
        this.commands = ['init'];
        this.action = new Action(this);
    }
    version() {
        const pkg = require(path.resolve(__dirname, '../package.json'));
        this.program.version(pkg.version);
    }
    option(){
        this.program
        .option('-V,--version','output the version number')
    }
    init(){
        this.program
        .command('init')
        .option('-r, --registry [url]', 'npm registry, default https://registry.npmjs.org, you can taobao registry: https://registry.npm.taobao.org')
        .description('init boilerplate for Vue/React')
        .action(options=>{
            this.action.init(this.boilerplate,options)
        })
    }
    command() {
        this.commands.forEach(cmd => {
          if (this[cmd]) {
            this[cmd].apply(this);
          } else {
            console.log(chalk.red(`The command [${cmd}] is not implemented!`));
          }
        });
    }
    
    parse() {
        this.program.parse(process.argv);
    }
    run() {
        this.version();
        this.option();
        this.command();
        this.parse();
    }
}