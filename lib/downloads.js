'use strict';
const path = require('path');
const fs = require('fs');
const os = require('os');
const assert = require('assert');
const shell = require('shelljs');
const chalk = require('chalk');
const ora = require('ora');
const download = require("./download-git-repo");
const co = require('co');
const utils = require('./utils');
const rimraf = require('mz-modules/rimraf');
const mkdirp = require('mz-modules/mkdirp');
module.exports=class Download{
  constructor(config={}){
     
  }
  async download(template, templateDir) {
    const spinner = ora('正在初始化项目').start();
    await download.download(template, templateDir,{},async function (err) {
        await spinner.stop();
        if (err) {
            console.log('Failed to download repo ' + template + ': ' + err.message.trim());
        }
    })
  }
  copy(sourceDir, targetDir, option = { dir: '', hide: true }) {
    if (option.dir) {
      shell.cp('-R', path.join(sourceDir, option.dir), targetDir);
    } else {
      shell.cp('-R', path.join(sourceDir, '*'), targetDir);
      if (option.hide) { // copy hide file
        try {
          shell.cp('-R', path.join(sourceDir, '.*'), targetDir);
        } catch (e) {
          /* istanbul ignore next */
          console.warn('copy hide file error', e);
        }
      }
    }
  }
  writeFile(filepath, content) {
    try {
      fs.writeFileSync(filepath, typeof content === 'string' ? content : JSON.stringify(content, null, 2), 'utf8');
    } catch (e) {
      /* istanbul ignore next */
      console.error(`writeFile ${filepath} err`, e);
    }
  }
  installDeps(projectDir, info) {
    const { npm } = info;
    if (npm) {
      const cmd = `${npm} install`;
      const spinner = ora(utils.log(`start ${cmd}...`));
      spinner.start()
      const result = shell.exec(cmd, { cwd: projectDir, stdio: ['inherit'] });
      if (result) {
        if (result.code === 0) {
          utils.log(`${cmd} successfully!`);
        } else {
          console.log(chalk.red(`${cmd} error`), result.stderr);
        }
      }
      spinner.stop();
    }
  }
  quickStart(projectName, info) {
    let i = 1;
    const { npm, run } = info;
    const steps = [`${i}) cd ${projectName}`];
    if (!npm) {
      i++;
      steps.push(`${i}) npm install or yarn install`);
    }
    i++;
    steps.push(`${i}) ${run || 'npm run dev or npm start' }`);

    utils.log(`Now, start coding by follow step:\r\n${steps.join('\r\n')}`);
  }

 init(root,bilerplateInfo,projectInfoAnswer={},options={}){
    const self = this;
    const {sourceDir = '', run, value } = bilerplateInfo; 
    const { name, npm ,description,main, author, license} = projectInfoAnswer;
    const projectName = name || value;

    co(async function (){
         const projectDir=`${root}/${name}/`;
         await mkdirp(projectDir);
         await self.download(sourceDir, projectDir);
         utils.log(`init ${projectName} project successfully!\r\n`);
         const filepath = path.join(projectDir, 'package.json');
         const packageJSON = require(filepath);
         Object.keys(projectInfoAnswer).forEach((key)=>{
            if(packageJSON.hasOwnProperty(key)){
              packageJSON[key]=projectInfoAnswer[key];
            }
        })
        const destinationPackageJSON = (`${projectDir}/package.json`);
        await self.writeFile(destinationPackageJSON,packageJSON);
        self.installDeps(projectDir, { npm });
         //self.quickStart(projectName, { npm, run });
    })
  }
}