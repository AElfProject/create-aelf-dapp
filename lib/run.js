// const inquirer = require('inquirer');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const path = require('path');

var shell = require('shelljs');

const Generator = require('./generator');
const yeoman = require('yeoman-environment');

const runGenerator = async (config) => {
  let { name, cwd = process.cwd(), args = {}, type, typeValue } = config;
  return new Promise((resolve) => {
    if (name) {
      mkdirp.sync(name);
      cwd = path.join(cwd, name);
    }

    const env = yeoman.createEnv([], {
      cwd,
    });

    const generator = new Generator({
      name,
      env,
      type,
      typeValue,
      resolved: require.resolve('./generator'),
      args,
    });

    return generator.run(() => {
      console.log('');
      console.log(chalk.cyan('✨ File Generate Done'), cwd);
      console.log('');

      shell.cd(cwd);
      // const cmd = shell.which('yarn') ? 'yarn' : 'npm install';
      const cmd = 'yarn';

      shell.exec(cmd, { cwd }, () => {
        shell.exec('npm run prettier', { cwd }, (cls) => {
          resolve(true);
          console.log('');
          console.log(chalk.green('🎉  Successfully generated your project.'));
        });
      });
    });
  });
};

const run = async (config) => {
  process.send && process.send({ type: 'prompt' });
  process.emit('message', { type: 'prompt' });

  // let { type } = config;

  // if (type === 'beta') {
  //   const answers = await inquirer.prompt([
  //     {
  //       name: 'type',
  //       message:
  //         'Are you sure to install the beta version? If you choose yes, all components will be installed',
  //       type: 'list',
  //       choices: ['Yes', 'No'],
  //     },
  //   ]);
  //   const typeValue = answers.type;
  //   config.typeValue = typeValue;
  // }

  try {
    // return runGenerator(`./generators/${type}`, config);
    return runGenerator(config);
  } catch (e) {
    console.error(chalk.red(`> Generate failed`), e);
    process.exit(1);
  }
};

module.exports = run;
