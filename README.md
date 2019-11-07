# ESFiddle API

******
**This repo is now stagnant and remains for the old version of ESFiddle. ESFiddle is being redesigned here https://github.com/esfiddle/site. At some point soon we will start creating an API for the new site. At the moment though, we are not accepting PR's on this repo. If you're a previous contributor or just looking to join a new project then feel free to grab an issue from there or reach out on Gitter.**
******



[![Greenkeeper badge](https://badges.greenkeeper.io/esfiddle/api.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/esfiddle/api.svg?branch=master)](https://travis-ci.org/esfiddle/api)
[![Join the chat at https://gitter.im/esfiddle/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/esfiddle/Lobby)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)

The ESFiddle API used by the ESFiddle site (https://esfiddle.net)
This project is a heavy work in progress. Please take a look at the issues. As this is a new project, there are lots of low hanging fruit, so dive in! We are looking for contributors and maintainers.

## Setup
```sh
# Clone the repo
$ git clone git@github.com:esfiddle/api.git esfiddle-api

# Go into the repo
$ cd esfiddle-api

# Install the dependencies and build for the first time
$ npm i && npm run build

# Setup the environment
# The default values should work fine, but edit them in the .env to make any changes
$ cp .env.example .env

# Start the project!
$ npm start

# Test
$ npm test
```

## Configuration

Create **.env** file in root directory
using **.env.example** file.

## Documentation
You can find our swagger documentation at https://api.esfiddle.net/docs.


## Contributing
Check out the contribution guide here: https://github.com/esfiddle/site/blob/master/docs/CONTRIBUTE.md
