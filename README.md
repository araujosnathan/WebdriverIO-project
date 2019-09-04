# WebdriverIO-project

Hey everyone,

It's a basic project for WEB Testing using WebdriverIO.
Let's automate! 

First of all, you have to download/clone this project.

Do you have node/npm installed on your computer? if not, you can download in this link: https://nodejs.org/en/download/

# How to install

* git clone https://github.com/nathsilv/WebdriverIO-project.git </br>
* npm install

Now you have this project on your computer and all dependencies you need installed.</br>

# How to run the tests?

Now you can run the tests, entry in the root folder and you just need to execute: </br>
* ./node_modules/.bin/wdio wdio.conf.js

You can change the params values of the config file in this folder `/test/config/test.config.js`.
An exemple in config file: </br>

```
exports.config = {
    valid_username: 'valid.user@gmail.com',
    valid_password: 'validPass',
    wrong_username: 'wrongpass',
    wrong_password: 'wrong_email@gmail.com'
}
```

That's it! =D
