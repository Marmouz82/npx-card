#!/usr/bin/env node
/* leny/npxcard
 *
 * /index.js - Main Entry point
 *
 * coded by leny@flatLand!
 * refactored at 27/08/2019
 */

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("Gaëtan Massart"),
    handle: chalk.white("Marmouz82"),
    work: chalk.white("Junior Dev at BeCode.org"),
    npm: chalk.black("https://npmjs.com/") + chalk.cyan("~marmouz82"),
    github: chalk.black("https://github.com/") + chalk.green("marmouz82"),
    linkedin: chalk.black("https://linkedin.com/in/") + chalk.yellow("gaëtan-massart"),
    npx: chalk.cyan("npx") + " " + chalk.white("marmouz82"),
    labelWork: chalk.white.bold("Work:"),
    labelNpm: chalk.white.bold("npm:"),
    labelGitHub: chalk.white.bold(" GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelCard: chalk.white.bold("Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.red(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
                backgroundColor: "grey",
                align: "center",
                borderColor: "greenBright",
            },
        ),
    ),
);