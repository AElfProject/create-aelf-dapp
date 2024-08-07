# create-aelf-dapp

## Quick Start the template

Please turn to ./apps/create-aelf-dapp/REAME.md for more information.

```bash
npm create aelf-dapp my-aelf-dapp
cd my-aelf-dapp
```

## Quick Start the applications

Install dependencies
```bash
pnpm install
```

start the applications
```bash
# 3005 dev template & all demos
pnpm run -C apps/aelf-template dev
# 3006 socket
pnpm run -C apps/server-socket-io dev
# 3007 chaingpt
pnpm run -C apps/server-chaingpt start:dev
```

build
```bash
# independent
pnpm run -C packages/request-all-in-one build
lerna run build --scope request-all-in-one
# all
pnpm run build # pnpm recursive run build
lerna run build
```

publish to npm
```bash
lerna publish
```

rm node_modules
```bash
# Remove the node_modules directory from all packages
lerna clean
rm -rf node_modules/
```

