## Web App Boilerplate

- front end: react typescript
- back end: node express

- Users can log in, create accounts and log out.
- Sets the jwt token as the cookie on successful login, token is used to query the current user which is then saved to a user context. cookie token also used as authorization in later requests

- `npm run dev` in the root folder will boot up both the server and client.
- The server will automatically create a database if one doesnt exist, you will need to update the config to match local env

`npm run dev`
