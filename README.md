# Popcornflix

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Needed tools

We use NodeJS (which comes bundle with the node package manager NPM).
We use NPM to manage dependencies.
We use Grunt for running javascript tasks.
We use Bower to manage web dependencies.
We use Yeoman to generate the structure project. 
We use Sass (Compass) so we need to install it.
To be able to do this we need Ruby.
We use bundle to manage the ruby dependencies.
We also use Ionic that needs to be install.
And we need Cordova to use Ionic.

### Linux

- Open the Terminal.
- Install Ruby : `sudo apt-get install ruby-full`
- Install Bundler : `sudo gem install bundler`
- Install NodeJS : Use the [NodeJS Installer](https://nodejs.org/en/download/)
- Install Grunt : `sudo npm install grunt-cli -g`
- Install Bower : `sudo npm install bower -g`
- Install Yeoman : `sudo npm install yo -g`
- Install Cordova : `sudo npm install cordova -g`
- Install Ionic : `sudo npm install ionic -g`

### Windows

- Open the Command Prompt.
- Install Ruby : Use the [Ruby Installer](http://rubyinstaller.org/)
- Install Bundler : `gem install bundler`
- Install NodeJS : Use the [NodeJS Installer](https://nodejs.org/en/download/)
- Install Grunt : `npm install grunt-cli -g`
- Install Bower : `npm install bower -g`
- Install Yeoman : `npm install yo -g`
- Install Cordova : `sudo npm install cordova -g`
- Install Ionic : `sudo npm install ionic -g`

### Mac OS

- Open the Terminal.
- Install Ruby : already installed
- Install Bundler : `sudo gem install bundler`
- Install NodeJS : Use the [NodeJS Installer](https://nodejs.org/en/download/)
- Install Grunt : `sudo npm install grunt-cli -g`
- Install Bower : `sudo npm install bower -g`
- Install Yeoman : `sudo npm install yo -g`
- Install Cordova : `sudo npm install cordova -g`
- Install Ionic : `sudo npm install ionic -g`

## Install

### Backend

- Open the terminal and go to the location of the "Backend" folder.
- Run `npm install`. This will install all dependencies for the server.

### WebApp

- Open the terminal and go to the location of the "WebApp" folder.
- Run `npm install`. This will install useful dependencies for the project.
- Run `bower install`. This will install specific web dependencies for the project.
- Run `bundle install`. This will install all ruby dependencies.

### Mobile

- Open the terminal and go to the location of the "Mobile" folder.
- Run `npm install`
- Run `ionic state restore`

## Launch

- Open the terminal and go to the location of the "Backend" folder.
- Run `grunt default`

### Launch the website

- Open an other terminal and go to the location of the "WebApp" folder.
- Run `grunt serve`. You can go to the website on http://localhost:9000

### Launch the mobile app

- Open an other terminal and go to the location of the "Mobile" folder.
- Run `ionic build android` (or `ionic build ios` if you are using an iPhone).
- Then run `ionic run android` (or `ionic run ios` if you are using an iPhone).

## AngularJS

### [ng-app](https://docs.angularjs.org/api/ng/directive/ngApp)

This is the directive to bootstrap an AngularJS app. This directive designates the root element.

### [ng-view](https://docs.angularjs.org/api/ngRoute/directive/ngView)

This directive is used to complement the service $routeProvider gives by AngularJS.
That allows the user to have a rooting in the application.

### [$routeProvider](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)

There is the rooting of our application :
```
angular
  .module('popcornFlixApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/movie/:title', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
```

We first define the **angular.module**, in which we give a name to our module and the list of modules that our module includes.
Then we use the **.config** method, it's argument is a function that has as arguments the $routeProvider service.
And then we define the routes with the $routeProvider.
Here when the user go to the root of our app we load the page _movies.html_ where was the ng-view directive. Actually, we replace the ng-view directive by the page we load. It means that somewhere in our html pages we had an element like that :
<ng-view></ng-view>. This one is replaced by what is contained in the movies.html.
We also load a controller with the page that allows to had some logic associated at the view.

### [Services](https://docs.angularjs.org/guide/services)

We also have some services defined by angular. It is used to organize and share code across the application.
We here have services that permits to get a list of movies or the detals of a specific movie.
To see more explainations on our services you can just check our [file](https://github.com/GuillaumeRahbari/PopcornFlix/blob/master/WebApp/app/scripts/services/movieservice.js) that is very well documented.

### [Directive](https://docs.angularjs.org/guide/directive)

The angular directives are something powerful that permits to manipulate the DOM.
Our most important directives are used to define templates (others are some hack).
For example, every movie that we get (thanks to the service we used before) is build thanks to the template. It avoids duplication of code and makes the code more readable and maintenable.
