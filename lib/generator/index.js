const BasicGenerator = require('../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    // let prompts = [
    //   {
    //     name: 'isTypeScript',
    //     message: 'Do you want to use typescript?',
    //     type: 'list',
    //     suffix:
    //       '  (TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale).',
    //     choices: [
    //       {
    //         name: 'Yes',
    //         value: 'true',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'isNext',
    //     message: 'Do you want to build your application in Next.js?',
    //     type: 'list',
    //     suffix: '  (Next.js is a React framework for building full-stack web applications).',
    //     choices: [
    //       {
    //         name: 'Yes',
    //         value: 'true',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'cssExtension',
    //     message: 'What css extension language do you want to enable?',
    //     type: 'checkbox',
    //     default: ['tailwindcss'],
    //     choices: [
    //       { name: 'tailwindcss', value: 'tailwindcss' },
    //       { name: 'postcss', value: 'postcss' },
    //     ],
    //   },
    //   {
    //     name: 'lib',
    //     message: 'What library do you want to use for aelf?',
    //     type: 'checkbox',
    //     default: ['aelf-web-login'],
    //     choices: [
    //       { name: 'portkey-sdk', value: 'portkey-sdk' },
    //       { name: 'aelf-web-login', value: 'aelf-web-login' },
    //       { name: 'aelf-sdk', value: 'aelf-sdk' },
    //     ],
    //   },
    //   {
    //     name: 'functionality',
    //     message: 'What functionality do you want to enable?',
    //     type: 'checkbox',
    //     default: ['antd', 'sentry', 'firebase', 'aelf-lint'],
    //     choices: [
    //       { name: 'antd', value: 'antd' },
    //       { name: 'sentry', value: 'sentry' },
    //       { name: 'firebase', value: 'firebase' },
    //       { name: 'aelf-lint', value: 'aelf-lint' },
    //     ],
    //   },
    // ];
    //
    // if (this.isBeta) {
    //   prompts = [];
    // }
    //
    // return this.prompt(prompts).then((props) => {
    //   if (this.isBeta) {
    //     this.prompts = {
    //       isTypeScript: 'true',
    //       isNext: 'true',
    //       cssExtension: ['tailwindcss'],
    //       lib: ['aelf-web-login'],
    //       functionality: ['antd', 'sentry', 'firebase', 'aelf-lint'],
    //     };
    //   } else {
    //     this.prompts = props;
    //   }
    // });
    this.prompts = {
      type: 'default'
      // isTypeScript: 'true',
      // isNext: 'true',
      // cssExtension: ['tailwindcss'],
      // lib: ['aelf-web-login'],
      // functionality: ['antd', 'sentry', 'firebase', 'aelf-lint'],
    };
  }

  writing() {
    const context = {
      name: this.name,
      ...this.prompts,
      isBeta: this.isBeta,
    };

    console.log(this.isBeta);

    this.writeFiles({
      context,
      filterFiles: (f) => {
        // const { functionality, cssExtension, lib } = this.prompts;

        // if (!this.isBeta) {
        //   if (f.includes('contractDemo')) {
        //     return false;
        //   }
        // }
        //
        // if (!functionality.includes('sentry')) {
        //   if (f.startsWith('sentry')) {
        //     return false;
        //   }
        // }
        //
        // if (!functionality.includes('firebase')) {
        //   if (f.includes('firebase')) {
        //     return false;
        //   }
        // }
        //
        // if (!functionality.includes('antd')) {
        //   if (f.includes('firebase')) {
        //     return false;
        //   }
        // }
        // if (!cssExtension.includes('tailwindcss')) {
        //   if (f.startsWith('tailwind')) {
        //     return false;
        //   }
        // }
        //
        // if (!cssExtension.includes('postcss') && !cssExtension.includes('tailwindcss')) {
        //   if (f.startsWith('postcss')) {
        //     return false;
        //   }
        // }
        //
        // if (!lib.includes('aelf-web-login')) {
        //   if (f.includes('contract/webLogin') || f.includes('webLoginProvider')) {
        //     return false;
        //   }
        // }
        //
        // if (!lib.includes('portkey-sdk')) {
        //   if (f.includes('contract/contractRequest')) {
        //     return false;
        //   }
        // }
        //
        // if (!lib.includes('portkey-sdk') && !lib.includes('aelf-web-login')) {
        //   if (f.startsWith('src/contract') || f.includes('getAccountInfoSync')) {
        //     return false;
        //   }
        // }

        return true;
      },
    });
  }
}

module.exports = Generator;
