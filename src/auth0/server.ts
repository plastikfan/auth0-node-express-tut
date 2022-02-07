// server.js

import express from "express";
const app = express();

import { auth } from "express-oauth2-jwt-bearer";

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'https://quickstarts/api',
  issuerBaseURL: `https://dev-cgbm58su.eu.auth0.com/`,
});

export default {};
