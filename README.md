# GitHub Fetcher: Fullstack Review Exercise #
You are given a skeleton of frontend and backend code. On the frontend, you have React. On the backend, you have Express and MongoDB.

Your task is to fetch data from an API, store that data in a database, and display the data on your app's main page.
> This sprint was assigned to me when attending Hack Reactor as a student.

### Takeaways ###
The primary purpose of this sprint is to give you the opportunity to compose together all the isolated concepts you've learned in the past 5 weeks. While this is an exercise, not an assessment, DO NOT reference any code in your past projects. Instead, use Google (to find official documentation and helpful Stack Overflow answers) as your primary source of information.

## Getting Started ##
  - [ ] Install MongoDB.
       * Follow the [installation instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew).
       * Follow [these instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition) to run MongoDB.
  - [ ] Install dependencies.
```
$ npm install
```
  - [ ] Start webpack and the server in separate terminal tabs, using the following commands.
```
$ npm run react-dev
$ npm run server-dev
```
  - [ ] Open the application in your browser at __`localhost:1128`__.
  - [ ] Take a look at the provided code. This repo uses webpack. webpack is a replacement for the babel command you used in recast.ly. Notice, however, that rather than attaching components to the window object, you'll use [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) syntax.
  - [ ] See the **tips** section before you start writing any code.

## Overview ##
You are building an app that takes data from GitHub's API and stores it in your database. Here is an overview of what you'll need to do:
  * When a user types in a __GitHub username__ and submits the form, your app should:
      * Send a POST request to your Express server
      * Your server should GET that user's repos from GitHub's API
      * Your server should then save the repos to the database
  * When a user visits or refreshes your page, your app should:
      * GET the top 25 repos in your express server's database (How will you determine "top" repos? This doesn't mean "most recent")
      * Take those repos and display them on the page

## Basic Requirements: ##
  - [ ] Draw a diagram showing how this app works. Make sure your diagram includes the client, server, and database.

  - [ ] Explain your diagram to and get it signed off by a fellow student. Then do the same with your staff.

  - [ ] Design (draw a schema) a __`repos`__ Mongoose schema. You can look at __`data.json`__ to see the structure of the data from GitHub's API. What properties will you need? Once you've figured out your schema, complete __`repoSchema`__ in __`database/index.js`__, using the [Mongoose Quick Start Guide](https://mongoosejs.com/docs/index.html) for help.

  - [ ] Explain your schema to and get it signed off by a fellow student. Then do the same with your staff.

  - [ ]  When a user types a GitHub username into the text field, use jQuery's ajax method to send a __`POST`__ request to __`/repos`__ (**you'll have to fix the bug in the Search Component first**).

  - [ ] Complete the __`getReposByUsername`__ function in __`helpers/github.js`__. In this function, you'll use the axios npm module to fetch a user's repositories from the [GitHub API](https://docs.github.com/en/rest).
      - [ ] To access the GitHub API without rate limits, you'll need a [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Make a copy of __`config.example.js`__ and rename it to __`config.js`__, then add your personal access token.

  - [ ] Complete the __`save`__ function in __`database/index.js`__. This function will save the relevant data from the GitHub API into your database.
      - [ ] Ensure there are no duplicate repos. If you happen to import the same repo twice, it should only show up once in your database. See the tips section about considering unique columns.

  - [ ] Complete the __`POST /repos`__ endpoint on your Express server - in this route, you'll use your __`getReposByUsername`__ function to fetch the specified user's GitHub repos, then use your __`save`__ function to store the repo information into your database.

  - [ ] Write a __`GET /repos`__ endpoint that retrieves the top 25 repos stored in your database, sorted by the criteria you decided on earlier.

  - [ ] Refactor the client so that when the page loads, the top 25 repos are displayed on the page.

  - [ ] Make each repo's name in the table link to that repo's page on GitHub.

  - [ ] After entering a GitHub handle in the form, update the page with the latest top 25 **without requiring a page refresh**.

  - [ ] Complete [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
      - [ ] What config variables will you need to set in order for the deployed version to work? Modify your existing code to use config variables, then set those config variables when you get to that section.

  - [ ] After completing all of the above requirements, demo your app to your staff and it signed off by them.
