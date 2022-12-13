# Toolbox Technical Assessment – Server

This is a back-end technical assessment for Toolbox, it was created following the steps and requirements described in the first stage of Toolbox's Coding Challenge.

## The Project

This section is intended to bring more information about the project:

### Instructions

1. Clone the project
2. Install all dependencies by running `npm install`
3. Start the project by running `npm run start`

After running the project, a server will be listening on port `3001`.

To run the tests, run `npm run test`.

### Technologies

- The project was built using Node.js and Express.js.
- Mocha + Chai were used for unit testing.
- SWR and Axios were used for the data-fetching functionality.
- Prettier was used to enforce code styles.
- ESLint was used to lint code and detect errors.
- Husky and lint-staged were used to add pre-commit hooks.

### Routes

- `/files/data`: Retrieves files data in the following format:
  ```json
  [
    {
      "file": "<file_name>",
      "lines": [
        {
          "text": "<text>",
          "number": "<number>",
          "hex": "<hex>"
        }
      ]
    }
  ]
  ```
- `/files/list`: Retrieves a list of files in the following format:
  ```json
  {
    "files": ["<file_name>"]
  }
  ```

## The Challenge

This section contains the challenge itself:

### Description

Develop a REST API that takes information from an external API and formats it to expose it.  
The API must fetch data from the methods exposed [here](https://echo-serv.tbxnet.com/explorer/#/Secret).

To following steps are required to process the data:

1. Get a list of files from `/v1/secret/files`
2. Download each file using `/v1/secret/file/{file}`
3. Format the information in the CSV

This information should be available at the `/files/data` endpoint from the created API, and it must be created using Node.js and Express.js.

Tests to validate the API must also be created using Mocha + Chai.  
The API should be able to start running `npm start`, and tests must be able to run by running `npm test`.

### Technical Requirements

- The provided code should run using NodeJS 14 and should not depend on globally-installed dependencies, environment variables or configurations of any OS.
- Code must be written using JavaScript (ES6+). Don't use: Babel, TypeScript, Dart, Elm, etc.
- Regarding libraries and frameworks, you can use the versions you consider appropriate:
  - Express.js: https://expressjs.com/
  - Mocha: https://mochajs.org/
  - React Bootstrap: https://chaijs.com/

## Author

Victor Requena (@victorrequenadev)
