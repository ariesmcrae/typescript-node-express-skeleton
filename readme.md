# typescript-node-express-skeleton

-----------------------------------

## Quick Start from your laptop

`npm install`

`npm run dev`

Open http://localhost:5000




## How to re-create this project

`npm init`

`tsc --init`

`npm install -g typescript`

`npm install express`

`npm install -D typescript @types/node @types/express ts-node nodemon rimraf npm-run-all`



## Notes

* The only compile time dependency is `express`. All others are dev dependencies.

* `tsc --init` creates `tsconfig.json`

* `npm init` creates `package.json`

* Installing `typescript` will give you the `tsc` compiler.

* `@types` allows you to use typescript code in node/express

* `ts-node` allows typescript to run in node.js

* `nodemon` monitors any changes to your node.js application and automatically restarts the server. It is only use in development.

* `rimraf` allows you to perform `rm -rf` command

* `npm-run-all` allows you to execute multiple npm scripts

* ts files live in `/src/`. This is specified in `tsconfig.json rootDir`

* compiled js files live in `/dist`. This is specified in `tsconfig.json outDir`

* `npm start` runs this project in the server. Use `npm run dev` to run this project in you laptop during development.