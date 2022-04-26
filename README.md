#Hotel Manager 

Hotel Manager is an application that allows a customer to book hotel rooms. It allows them to find a room based on the date and room type they are looking for. It will also keep track of the total amount of money a customer has spent.

## Built With

  * JavaScript
  * CSS
  * HTML
  * WebPack

## Getting Started:

### Where to Start

1. Start by going [here](https://github.com/shanekwarning/hotel-managerClone). From here you will want to click on the green rectangular button titled 'Code'. This should open a drop down menu where you should see a link. To the left of the link there should be an icon with tow over lapping squares. You can click the icon to copy the link. For convience you can copy it here, git@github.com:shanekwarning/hotel-manager.git. 
2. You will want to clone down the reop to your terminal using 'git clone git@github.com:shanekwarning/hotel-manager.git'. 
3. Once you have cloned the repo, change inot the directory and install the project dependencies. Run 'npm install' to install the project dependencies.
4. Run npm start in the terminal to see the HTML page link. You will need to copy and paste the local servre from the terminal and paste it into your browser. The local server should be simialiar to 'http://localhost:8080/'. You can stop the local server by using. 'Control + c' in your terminal. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This is because this application uses wepPack.
5. Do not run 'npm audit fix --force'. This will update the latest verison of packages. You need to be using the correct webPack which is not the latest verison.
6. You will now need to clone down a second reop to your local. This site does not use local data but uses data from another deployable API. You can clone down the repo [here](https://github.com/turingschool-examples/overlook-api), and follow the instructions on its ReadMe.

### Using the Application![Screen Shot 2022-04-26 at 3 07 52 PM](https://user-images.githubusercontent.com/97068979/165383613-68d63f68-629b-4b8d-99e8-8a4ce9418632.png)

* On page load you will be brought to a login screen. You will need to login to access the rest of the applications content. To login you can type any user name between 'customer1' through 'customer50'. The user name always needs to start with 'customer' and end with a number between 1-50. The number at the end will determine which data you pull for the current customer. The password, regardless of the customer is always 'overlook2021'.

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with the Turing logo image and a beautiful gradient background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.

## Where to Add Your Code

### JavaScript

You have to be very intentional with where you add your feature code. This repo uses a tool called [webpack](https://webpack.js.org/) to combine many JavaScript files into one big file. Webpack enables you to have many, separate JavaScript files to keep your code organized and readable. Webpack expects all of your code files to be in a specific place, or else it doesn't know how to combine them all behind the scenes.

**Create all of your feature code files in the `src` directory.**

Since code is separated into multiple files, you need to use the `import` and `export` syntax to share code across file.

Here is a video that walks through some information about [import and export](https://www.youtube.com/watch?v=_3oSWwapPKQ). There are a lot of resources out there about `import` and `export`, and resources will sometimes call them `ES6 modules`. It's something you will see in React and beyond.

### HTML

Add the HTML you need in the `index.html` file in the `./dist` directory. There is some boilerplate HTML that exists from the start that you can modify.

### Images

Add your image files in the `src/images` directory. Similar to CSS files, you need to `import` image files in the JavaScript entry file (`scripts.js`). Then go into the HTML and add an `img` element with the `src` attribute pointing to the `images` directory. There is an example in the `index.html` file for you to see.

## How to View Your Code in Action

In the terminal, run:

```bash
npm start
```

You will see a bunch of lines output to your terminal. One of those lines will be something like:

```bash
Project is running at http://localhost:8080/
```

Go to `http://localhost:8080/` in your browser to view your code running in the browser.

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `box-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

---

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit - the linter is still running successfully.

Your linter will look at the JavaScript files you have within the `src` directory and the `test` directory.

## Webpack?

If you look in the `package.json` file, you'll see one of the library dependencies called `webpack`. If you're interested in learning more about what Webpack is and how it works behind the scenes, take a look through the [Webpack configuration documentation](https://webpack.js.org/concepts/).

## Deploying to GitHub Pages

_If you are finished with the functionality and testing of your project_, then you can consider deploying your project to the web! This way anyone can play it without cloning down your repo.

[GitHub Pages](https://pages.github.com/) is a great way to deploy your project to the web. Don't worry about this until your project is free of bugs and well tested!

If you _are_ done, you can follow [this procedure](./gh-pages-procedure.md) to get your project live on GitHub Pages.
