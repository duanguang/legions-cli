'use strict';
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const os = require('os');

module.exports = {
    isUdefined(value) {
        return value === undefined;
    },
    isFunction(value) {
        return typeof value === 'function';
    },
    isObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    },
    isString(value) {
        return typeof value === 'string';
    },
    isBoolean(value) {
        return typeof value === 'boolean';
    },
    getCompileTempDir(baseDir, dir = '') {
        const root = path.join(os.tmpdir(), 'easywebpack');
        try {
            const pkgfile = path.join(baseDir || process.cwd(), 'package.json');
            const pkg = require(pkgfile);
            const project = pkg.name;
            return path.join(root, project, dir);
        } catch (e) {
            return root;
        }
    },

    getInstallPackage(name, baseDir) {
        const pkg = baseDir ? path.join(baseDir, 'node_modules', name) : name;
        try {
            return require(pkg);
        } catch (e) {
            console.warn(e);
            return null;
        }
    },
    /* istanbul ignore next */
    log(info, color = 'green') {
        /* istanbul ignore next */
        console.log(chalk.blue(`[legions-cli]:${chalk[color](info)}`));
    },
}