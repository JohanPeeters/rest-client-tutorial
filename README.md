This repo supports our ([Mich-b](https://github.com/Mich-b) and me) summer 2018 workshop on REST API access control. You are currently looking at the silent-authentication branch in which the client uses the OpenID Connect Implicit Flow to obtain an access token for the `/friends` API. If the client and the authorization server have a session, the token is requested without user interaction. Otherwise, there is an authentication and consent dialog between the user and authorization server before the authorization server redirects back to the client. Note silent authorization only works with Auth0 if the client's URL, http://localhost:3000 presumably, is configured as one of the Allowed Web Origins.

## Running the application

```
npm start
```

in the local repo runs the app in development mode.
It can be viewed in the browser at [http://localhost:3000](http://localhost:3000).
