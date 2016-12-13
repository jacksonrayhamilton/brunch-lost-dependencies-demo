# Brunch Lost Dependencies Demo

Run `npm start` and then try saving `app/main.js` in Emacs.  At first, messages
like the following will be printed:

```
12 Dec 23:29:55 - info: compiled main.js and 161 cached files into app.js in 196 ms
```

Keep editing and saving the file.  Eventually, its dependencies will be dropped:

```
12 Dec 23:30:51 - info: compiled main.js and 34 cached files into app.js in 94 ms
```

An error like this will be printed in the browser:

```
Uncaught Error: Cannot find module 'lodash/first' from 'main.js'
```
