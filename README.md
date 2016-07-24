# generator-web-skeleton

[Yeoman](http://yeoman.io/) generator to setup a very basic project structure.

## Technologies

The generator will setup a client focused web project, using [React](http://facebook.github.io/react/) and [Redux](http://redux.js.org/), with an emphasis on testing.

Testing technologies used are [Mocha](https://mochajs.org/), [WallabyJS](https://wallabyjs.com/), and [Enzyme](http://airbnb.io/enzyme/). 

### Mocha

Is used as a regular test runner, to run all tests in the project using the command:

```bash
$ npm test
```

### WallabyJS

Is used as a continuous test runner for all tests.

### Enzyme

Is used to test React components. E.g.

```js
import { shallow } from 'enzyme';

it('renders an ExampleComponent', () => {
  const component = shallow(<ExampleComponent />);
  expect(component.type()).toBe('div');
});
```

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

## Configure WallabyJS

Depending on what IDE you are using a plugin for that IDE needs to be downloaded and installed. After it is installed the configuration file ```wallaby.config.js``` is the configuration needed to test the files in the generated directory structure of this generator.

Once the plugin is at place and the configuration is loaded, it should only be to start WallabyJS to be able to reap the benefits of having your tests running as you type them.
 
If you are not sure how to configure the plugin for your IDE of choice, go to the [documentation](https://wallabyjs.com/docs/intro/install.html).
