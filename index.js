#!/usr/bin/env node

const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0];

// TODO: Add commands here

console.log('Usage: task-manager <command>');
console.log('Commands: add-task <description>, show-task, delete-task <id>');