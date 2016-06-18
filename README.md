# generator-web-skeleton

[Yeoman](http://yeoman.io/) generator to setup a very basic project structure.

## Technologies

The generator will setup a client focused web project, using [React](http://facebook.github.io/react/) and [Redux](http://redux.js.org/). There is also a focus on testing the project, and in order to do that the test framework [Mocha](https://mochajs.org/) is used, along with Airbnb's testing utility for React, [Enzyme](http://airbnb.io/enzyme/).

## Structure

In rough strokes the project is following the structure of a [Redux example app](https://github.com/reactjs/redux/tree/master/examples/todomvc).

The test folders are located along side the source folders in order to make it easier to include the source without having to worring about finding the correct path.

## Installation

First it is necessary to have Yeoman installed globally on your system, if you haven't installed it already.

```bash
$ npm i -g yo
```

Then it's time to install the generator for yeoman.

```bash
$ npm i -g generator-web-skeleton
```

## Generate a project

Create a directory for your project and move into it.

```bash
$ mkdir your-project-name && cd $_
```

Then run the generator in one of two ways.

1) Run the generator by name directly in the terminal
```bash
$ yo web-skeleton
```

2) Select the generator in yeomans cli
```bash
$ yo
```