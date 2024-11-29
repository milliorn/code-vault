# centrifugal

https://github.com/centrifugal/centrifugo

https://centrifugal.dev/docs/getting-started/quickstart

First, you need to install Centrifugo. In this example, we are using a binary file release which is fine for development. Once you have the Centrifugo binary available on your machine, you can generate the minimal required configuration file with the following command:

```bash
./centrifugo genconfig
```

Now we can start a server. Let's start Centrifugo with a built-in admin web interface:

```bash
./centrifugo --config=config.json --admin
```

Now open http://localhost:8000. You should see Centrifugo admin web panel. Enter admin_password value from the configuration file to log in.

Create index.html file with our simple app

Now you need to serve this file with an HTTP server. In a real-world Javascript application, you would serve your HTML files with a web server of your choice – but for this simple example, we can use a simple built-in Centrifugo static file server:

```bash
./centrifugo serve --port 3000
```

These commands start a simple static file web server that serves the current directory on port 3000. Make sure you still have Centrifugo server running. Open http://localhost:3000/.

 The client must provide a valid JWT (JSON Web Token) to authenticate itself. This token must be generated on your backend and passed to the client-side (over template variables or using a separate AJAX call – whichever way you prefer).

```bash
./centrifugo gentoken -u 123722 
```
