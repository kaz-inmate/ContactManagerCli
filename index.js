#!/usr/bin/env node

const program = require('commander');
const { prompt }= require('inquirer');

const {addContact, searchContact, deleteContact, getAllContacts} = require('./logic');

const questions = [
    {
    type : 'input',
    name : 'firstname',
    message : 'Enter the firstname ...'
    },

    {
        type : 'input',
        name : 'lastname',
        message : 'Enter the lastname ...'
      },
      {
        type : 'input',
        name : 'phone',
        message : 'Enter the phone number ...'
      },
      {
        type : 'input',
        name : 'address',
        message : 'Enter address ...'
      }
];

program
    .version('0.0.1')
    .description('Contact manager')

program
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(() => {
        prompt(questions).then(answers => {
            addContact(answers);
        });
    });

program
  .command('getContact <name>')
  .alias('g')
  .description('Search contact')
  .action(name => searchContact(name));


  program
  .command('deleteContact <_id>')
  .alias('d')
  .description('Delete contact')
  .action(_id => deleteContact(_id));

program
  .command('getAllContacts')
  .alias('l')
  .description('List contacts')
  .action(() => getAllContacts());

  if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
  }

  program.parse(process.argv);