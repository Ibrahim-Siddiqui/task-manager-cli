#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .name('task-manager')
  .description('A simple CLI task manager')
  .version('1.0.0');

// TODO: Add commands here

program.parse();