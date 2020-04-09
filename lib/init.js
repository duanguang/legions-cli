'use strict';
const inquirer = require('inquirer');
const ask = require('./ask');
const Download = require('./downloads');
module.exports=class Boilerplate{
   constructor(config={}){
       this.projectDir=process.cwd();
       this.boilerplateChoice=config.boilerplateChoice ||ask.boilerplateChoice;
       this.boilerplateDetailChoice = config.boilerplateDetailChoice || ask.boilerplateDetailChoice;
       this.projectAskChoice = config.projectAskChoice || ask.projectAskChoice;
   } 
   getBoilerplateInfo(name){
    return this.boilerplateChoice.find(item => {
        return name === item.value;
      });
   }
   setBoilerplateInfo(boilerplateChoice) {
    this.boilerplateChoice = boilerplateChoice;
   }
   getBoilerplateDetailInfo(boilerplate, project) {
     const filterItems = this.boilerplateDetailChoice[boilerplate].filter(item => project === item.value);
     return filterItems.length > 0 ? filterItems[0] : null;
   }
   setBoilerplateDetailInfo(boilerplateDetailChoice){
       this.boilerplateDetailChoice=boilerplateDetailChoice;
   }
   getProjectAskChoices(ranges){
     if(ranges===undefined){
         return this.projectAskChoice;
     }
     return ranges.map(range=>{
         return this.projectAskChoice.filter(choice=>{
             return choice.name===range
         })[0];
     })
   }
   init(options){
     inquirer.prompt([{
         type:'list',
         name:'boilerplateName',
         message:'please choose the boilerplate mode?',
         choices:this.boilerplateChoice
     }]).then((boilerplateAnswer)=>{
        const boilerplateName = boilerplateAnswer.boilerplateName;
        const boilerplateInfo = this.getBoilerplateInfo(boilerplateName);
        const choices = boilerplateInfo.choices;
        const download = new Download(options);
        if(this.boilerplateDetailChoice[boilerplateName]){
            const boilerplateDetailAsk = [{
                type: 'list',
                name: 'project',
                message: 'please choose the boilerplate project mode?',
                choices: this.boilerplateDetailChoice[boilerplateName]
            }];
            inquirer.prompt(boilerplateDetailAsk).then(boilerplateDetailAnswer => {
                const project = boilerplateDetailAnswer.project;
                const bilerplateInfo = this.getBoilerplateDetailInfo(boilerplateName, project);
                const projectInfoChoice = this.getProjectAskChoices(choices);
                switch (boilerplateName) {
                  case 'boilerplate-react':
                    inquirer.prompt(projectInfoChoice).then(projectInfoAnswer => {
                       download.init(this.projectDir, bilerplateInfo, projectInfoAnswer);
                    });
                    break;
                  case 'boilerplate-vue':
                    inquirer.prompt(projectInfoChoice).then(projectInfoAnswer => {
                       download.init(this.projectDir, bilerplateInfo, projectInfoAnswer);
                    });
                    break;
                  case 'boilerplate-weapp':
                    inquirer.prompt(projectInfoChoice).then(projectInfoAnswer => {
                        download.init(this.projectDir, bilerplateInfo, projectInfoAnswer);
                    });
                    break;
                    case 'boilerplate-egg-server':
                      inquirer.prompt(projectInfoChoice).then(projectInfoAnswer => {
                         download.init(this.projectDir, bilerplateInfo, projectInfoAnswer);
                      });
                    break;
                    case 'boilerplate-vue-nuxt-ssr':
                      inquirer.prompt(projectInfoChoice).then(projectInfoAnswer => {
                         download.init(this.projectDir, bilerplateInfo, projectInfoAnswer);
                      });
                      break;
                  default:
                    break;
                }
            });
        }
     })
   }
}