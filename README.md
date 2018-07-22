This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Installing WebApp
First you will require a version of Node. This app supports Node 8+.
Node can be found [here](https://nodejs.org/en/)

After installing node, I reccomend using yarn as a package manager. Install by running:
`npm install --global yarn`

Get the source code by running `git clone https://github.com/Sever0us/weddingStreamWebapp.git`

To install the dependencies, move into the repo using `cd weddingStreamWebapp` and initialise and install the project by running `yarn`

## Running a development server
To run a development server hosting the webapp run `yarn start` and open a webpage to `http://localhost:3000`

## Build a release verison
To build a minified and uglified distribution bundle, simply run `yarn build`.

This will create a folder called `build` which will hold all the files required to host a static implementation of the site.


## Updating to New Releases
Simply pull the latest version via `git pull` and re-run the yarn initialization via `yarn`


## Folder Structure
The project folder structure is as follows:
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  yarn.lock
```

+ `README.md` is this file
+ `node_modules` contains all the dependencies for this project
+ `package.json` contains all the webpack configuration, yarn scripts ect
+ `public` contains static files linked to directly by `index.html`. SHould not be used for react app resources.
+ `src` contains all react components, js files, css sheets, images ect which will be build into dynamic webapp. All code should live here.
+ `src/App.js` root app object to which all components should be mounted
+ `src/index.js` root react compenent. Should only be used for global mounting scripts, context managers, routers and mounting the root App object.
+ `yarn.lock` deterministic install instructions for project dependencies. npm is dead, long live yarn.


For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Acknowledgements
CSS / SVG wave animations designed by [Darin Reid @ codepen](https://codepen.io/elcontraption/details/NzEooQ)