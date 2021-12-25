[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][ci-image]][ci-url]
[![Windows Build][appveyor-image]][appveyor-url]
[![Test Coverage][coveralls-image]][coveralls-url]

```js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
```

## Simple server express

The point of this simple express server is to allow front-end developers the ability to quickly serve test data via HTTP to the front-end.

Often writing mock data on the front-end can take up more time than needed. Also it is important to build your front-end with HTTP requests in mind - meaning it is better to structure your front-end with the HTTP frameworks and architecture you need right from the beginning instead of adding it later and replacing your mock data.

This simple server will allow you to create your HTTP front-end architecture without having to write any "fake" code

## Features
 * Use CORS 
 * Write algorithm and use api for sending data .
 * Use this server in my weblog project that link is [here](https://github.com/fallahpour-fr/Weblog)


 ## Requirements

 * [node & npm](https://nodejs.org/en/)
 * [git](https://www.robinwieruch.de/git-essential-commands/)