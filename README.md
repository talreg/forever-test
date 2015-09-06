Forever module test
============
This is a sample application to test the forever module to re-run stopped applications.
While forever can be used as a global module, this test uses it as a local module.

Requirements:
---
This app was tested under `iojs-v3.2.0`. node 12 might work as well, but it wasn't tested there.

To start/stop the app:
--------
`npm start` this will start a web server on port 3000.
then point your browser to `http://localhost:3000`. after 5 refreshes, the server should crash and forever should pick it up and restart it. You can tell that it was restarted cause the count up will again start from 1.

To stop the app, run `npm stop`.


Problems / issues
-------
If you're using nvm make sure you set it up before running, otherwise nothing will happen. 