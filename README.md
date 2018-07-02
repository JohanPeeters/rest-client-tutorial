This repo supports our ([Mich-b](https://github.com/Mich-b) and me) summer 2018 workshop on REST API access control. It illustrates 3 different API access control strategies on a React client:
* API keys
* OAuth 2.0 Resource Owner Password Credentials grant
* OpenID Connect Implicit Flow
There is a separate branch for each. There is also a branch that starts from the bare bones OpenID Connect Implicit Flow implementation and adds silent authentication. Silent authentication avoids the need for user interaction with the authorization server when new security tokens are needed.

Currently you are on the master branch. The master branch should be a good starting point to try to develop these strategies yourself. If you get stuck, you can refer to the feature branch that implements the strategy you are trying to learn.

Detailed instructions for the workshops are available [online](https://docs.google.com/document/d/e/2PACX-1vTPqEJ5RW2bOKAkhUjrfz3feu2LRcdLml0Ep9cO2eK0ALKNsvElaYEDz-FavX1ImmCiihbVQFDqfi62/pub).

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and can be extended as such.

## Installing

```
git clone git@github.com:JohanPeeters/react-rest-client.git
cd react-rest-client
npm install
```
Prerequisites:
* Node.js
* git

## Running the application

```
npm start
```

in the local repo runs the app in development mode.
It can be viewed in the browser at [http://localhost:3000](http://localhost:3000).
