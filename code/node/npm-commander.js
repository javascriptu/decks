var commander = require("commander");

commander
  .version('0.0.1')
  .option('-e, --env [name]', 'specify environment', 'dev')
  .option('-a, --optiona',      'Option a Description')
  .option('-b, --optionb',  'Option b Description')
  .parse(process.argv);

if (commander.optiona){
  console.log('Option a selected for Env: %s',commander.env);
}

if (commander.optionb){
  console.log('Option b selected for Env: %s',commander.env);
}