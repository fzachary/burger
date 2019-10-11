# Eat-Da-Burger!!!

A restaurant app that lets the user create a wishlist of burgers they would like to eat. 

___

## Overview

Eat-Da-Burger!!! is a dynamic web application using front end and back end technologies. The user can create a wishlist of burgers that they would like to eat. Once they have eaten a burger on their list, they simply click the burger, it is marked as "devoured", and it is moved to the devoured burgers section.

___

## Demo

To use Eat-Da-Burger!!! navigate to the depolyed Heroku page [here](#). Simply add burgers using the input form in the middle of the page to populate your burger wishlist.

___

## Run Eat-Da-Burger!!! Locally

Follow the instructions below to install the application

```
git clone git@github.com:fzachary/burger.git
cd burger
npm install
```

The required dependencies will be installed, and you will be ready to run the application from the command line. You will need to open the `server.js` file and configure the `PORT` variable to the value of your choice.

```
export PORT = 8080
```

Afterwards, you will need to initialize the server using Node.js.

```
node server.js
```

The application will now be running locally on your specified `PORT`. In this case, it will be running on PORT 8080. You will be able to access the application from your web browser at the URL [http://localhost:8080](http://localhost:8080).

___

## Technologies Used

* HTML5
* Bootstrap (CSS)
* Javascript
* NPM Packages:
    - [Express](https://www.npmjs.com/package/express)
    - [MySQL](https://www.npmjs.com/package/mysql)
    - [Handlebars](https://www.npmjs.com/package/express-handlebars)

___

## Contributing
To contribute to this application:
1. Fork the repo
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'add my-new-feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

___