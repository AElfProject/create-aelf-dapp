## create-aelf

Creates a aelf application using the command line.

## Usage

```bash
$ yarn create aelf [appName]
```

## Usage Example

```bash
$ yarn create aelf demo

⭐️ Hi,welcome to create your project by create-aelf-cli

? Do you want to use typescript?  (TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale). Yes
? Do you want to build your application in Next.js?  (Next.js is a React framework for building full-stack web applications). Yes
? What css extension language do you want to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection)tailwindcss
? What library do you want to use for aelf? (Press <space> to select, <a> to toggle all, <i> to invert selection)aelf-web-login
? What functionality do you want to enable? (Press <space> to select, <a> to toggle all, <i> to invert selection)antd, sentry, firebase, aelf-lint


   create demo/package.json
   create demo/.prettierignore
   create demo/.prettierrc
   create demo/.stylelintrc.json
   create demo/babel.config.js
   create demo/build.config/common.js
   create demo/build.config/development.js
   create demo/build.config/plugin.js
   create demo/build.config/production.js
   create demo/build.config/rewrites/development.js
   create demo/build.config/rewrites/index.js
   create demo/build.config/rewrites/production.js
   create demo/commitlint.config.js
   create demo/Dockerfile
   create demo/gitignore
   create demo/next-env.d.ts
   create demo/next.config.js
   create demo/postcss.config.js
   create demo/public/favicon.ico
   create demo/public/font/Roboto-Bold.ttf
   create demo/public/font/Roboto-Medium.ttf
   create demo/public/font/Roboto-Regular.ttf
   create demo/README.md
   create demo/sentry.client.config.ts
   create demo/sentry.config.ts
   create demo/sentry.edge.config.ts
   create demo/sentry.server.config.ts
   create demo/src/api/axios.ts
   create demo/src/api/request.ts
   create demo/src/app/layout.tsx
   create demo/src/app/page.tsx
   create demo/src/components/Footer/index.tsx
   create demo/src/components/Header/index.tsx
   create demo/src/components/Loading/index.tsx
   create demo/src/constants/index.ts
   create demo/src/constants/media.tsx
   create demo/src/contract/token.ts
   create demo/src/contract/webLogin.ts
   create demo/src/global.d.ts
   create demo/src/hooks/useDebounce.ts
   create demo/src/pageComponents/home.tsx
   create demo/src/pageComponents/layout.tsx
   create demo/src/provider/index.tsx
   create demo/src/provider/store.tsx
   create demo/src/provider/webLoginProvider.tsx
   create demo/src/redux/reducer/data.ts
   create demo/src/redux/reducer/info.ts
   create demo/src/redux/store.ts
   create demo/src/redux/types/reducerTypes.ts
   create demo/src/styles/global.css
   create demo/src/styles/theme.css
   create demo/src/types/index.ts
   create demo/src/utils/checkAElfBridge.ts
   create demo/src/utils/common.ts
   create demo/src/utils/contractInstance.ts
   create demo/src/utils/firebase.ts
   create demo/src/utils/formattError.ts
   create demo/src/utils/getAccountInfoSync.ts
   create demo/src/utils/getTxResult.ts
   create demo/src/utils/isMobile.ts
   create demo/src/utils/portkeyProvider.ts
   create demo/src/utils/vconsole.ts
   create demo/src/utils/version.ts
   create demo/tailwind.config.js
   create demo/tsconfig.json

✨ File Generate Done /Users/user/workspace/demo

yarn install v1.22.19
info No lockfile found.
warning demo@0.0.1: "demo" is also the name of a node core module
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
$ husky install
fatal: not a git repository (or any of the parent directories): .git
husky - git command not found, skipping install
Done in 137.76s.

> demo@0.0.1 prettier
> prettier -c --write '**/*'

🎉  Successfully generated your project.
✨  Done in 145.95s.
```

## LICENSE

MIT
