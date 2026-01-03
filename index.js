#!/usr/bin/env node

const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0];

if (command === 'add-task') {
  const description = args.slice(1).join(' ');
  if (!description) {
    console.log('Usage: task-manager add-task <description>');
    process.exit(1);
  }
  const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
  const newTask = {
    id: tasks.length + 1,
    description,
    status: 'pending'
  };
  tasks.push(newTask);
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
  console.log(`Task added: ${description}`);
} 
else if (command === 'show-task') {
  const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('Tasks:');
    tasks.forEach(task => {
      console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
    });
  }
} else {
  // TODO: Add other commands here

  console.log('Usage: task-manager <command>');
  console.log('Commands: add-task <description>, show-task, delete-task <id>');
}