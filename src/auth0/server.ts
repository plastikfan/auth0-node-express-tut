// server.js

// https://www.tutorialguruji.com/javascript/building-typescript-error-unexpected-token-note-that-you-need-plugins-to-import-files-that-are-not-javascript/
// https://johnnn.tech/q/rollup-dealing-with-dependencies-that-are-typescript-files-getting-error-unexpected-token/

// the problem with express is that it uses commonjs exports only, so this mabe the cause of the problem

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");

// import express from "express";

// this doesnt work but should. Therefore use allowSyntheticDefaultImports in tsconfig instead.
// allowSyntheticDefaultImports = true doesnt work either

// import * as express from "express";

// THIS IS THE PROBLEM:
const app = express();
//
// causing the following error:
// [16:21:59] Error: Unexpected token (Note that you need @rollup/plugin-json to import JSON files)
//     at error (file:///home/plastikfan/dev/tutorials/auth0/auth0-node-express-tut/node_modules/rollup/dist/es/shared/rollup.js:10332:30)
//     at Module.error (file:///home/plastikfan/dev/tutorials/auth0/auth0-node-express-tut/node_modules/rollup/dist/es/shared/rollup.js:12251:16)
//     at Module.tryParse (file:///home/plastikfan/dev/tutorials/auth0/auth0-node-express-tut/node_modules/rollup/dist/es/shared/rollup.js:12654:25)
//     at Module.setSource (file:///home/plastikfan/dev/tutorials/auth0/auth0-node-express-tut/node_modules/rollup/dist/es/shared/rollup.js:12557:24)
//     at ModuleLoader.addModuleSource (file:///home/plastikfan/dev/tutorials/auth0/auth0-node-express-tut/node_modules/rollup/dist/es/shared/rollup.js:22021:20)
// [16:21:59] 'build-prod'

import { auth } from "express-oauth2-jwt-bearer";

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'https://quickstarts/api',
  issuerBaseURL: `https://dev-cgbm58su.eu.auth0.com/`,
});

export default {};
