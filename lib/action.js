'use strict';
const chalk = require('chalk');
const Boilerplate = require('./init');
module.exports=class Action{
    constructor(command){
      this.command=command;
      this.program = command.program;
      this.baseDir = command.baseDir;
    }
    init(boilerplate, options){
        return new Boilerplate(boilerplate).init(options);
    }
}